import type { StrapiBlock, StrapiBlockText, StrapiBlockLink } from "./types";
import { STRAPI_URL } from "./strapi";

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Render inline text with formatting marks (Strapi v5 blocks format)
 */
function renderTextNode(node: StrapiBlockText | StrapiBlockLink): string {
  if (node.type === 'link') {
    const linkContent = node.children.map(renderTextNode).join('')
    return `<a href="${escapeHtml(node.url)}">${linkContent}</a>`
  }

  let text = escapeHtml(node.text)
  if (node.bold) text = `<strong>${text}</strong>`
  if (node.italic) text = `<em>${text}</em>`
  if (node.underline) text = `<u>${text}</u>`
  if (node.strikethrough) text = `<s>${text}</s>`
  if (node.code) text = `<code>${text}</code>`
  return text
}

/**
 * Convert a Strapi v5 block to HTML
 */
function blockToHtml(block: StrapiBlock): string {
  switch (block.type) {
    case 'paragraph':
      return `<p>${block.children.map(renderTextNode).join('')}</p>`

    case 'heading': {
      const level = block.level || 2
      return `<h${level}>${block.children.map(renderTextNode).join('')}</h${level}>`
    }

    case 'list': {
      const tag = block.format === 'ordered' ? 'ol' : 'ul'
      const items = block.children
        .map((item) => `<li>${item.children.map(renderTextNode).join('')}</li>`)
        .join('')
      return `<${tag}>${items}</${tag}>`
    }

    case 'quote':
      return `<blockquote>${block.children.map(renderTextNode).join('')}</blockquote>`

    case 'code':
      return `<pre><code>${block.children.map((c) => escapeHtml(c.text)).join('')}</code></pre>`

    case 'image': {
      const imgUrl = block.image?.url
        ? (block.image.url.startsWith('/') ? `${STRAPI_URL}${block.image.url}` : block.image.url)
        : ''
      const alt = block.image?.alternativeText || ''
      return `<img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(alt)}" class="my-4 rounded-lg max-w-full" />`
    }

    default:
      return ''
  }
}

/**
 * Convert Strapi v5 blocks content to HTML string
 */
export function blocksToHtml(blocks: StrapiBlock[] | null | undefined): string {
  if (!blocks || !Array.isArray(blocks)) return ''
  return blocks.map(blockToHtml).join('')
}

// Keep legacy function for backward compatibility with old formats
interface Mark {
  type: string;
  attrs?: { href?: string; url?: string };
}

interface LegacyNode {
  type?: string;
  text?: string;
  marks?: Mark[];
  content?: LegacyNode[];
  attrs?: { level?: number; src?: string; url?: string; srcset?: string; alt?: string; caption?: string };
  data?: { text?: string; level?: number; items?: string[]; style?: string; file?: { url?: string } };
}

function renderMarks(text: string, marks: Mark[] | undefined): string {
  if (!marks || marks.length === 0) return escapeHtml(text)

  return marks.reduce((acc, mark) => {
    switch (mark.type) {
      case 'bold':
      case 'strong':
        return `<strong>${acc}</strong>`
      case 'italic':
      case 'em':
        return `<em>${acc}</em>`
      case 'code':
        return `<code>${acc}</code>`
      case 'link':
        return `<a href="${escapeHtml(mark.attrs?.href || mark.attrs?.url || '#')}">${acc}</a>`
      default:
        return acc
    }
  }, escapeHtml(text))
}

function nodeToHtml(node: LegacyNode | string | LegacyNode[]): string {
  if (!node) return ''
  if (typeof node === 'string') return escapeHtml(node)
  if (Array.isArray(node)) return node.map(nodeToHtml).join('')

  // Editor.js style blocks: { type: 'paragraph', data: { text: '...' } }
  if (node.type && node.data && typeof node.data.text === 'string') {
    switch (node.type) {
      case 'paragraph':
        return `<p>${node.data.text}</p>`
      case 'header': {
        const level = node.data.level || 2
        return `<h${level}>${node.data.text}</h${level}>`
      }
      case 'list':
        return node.data.style === 'ordered'
          ? `<ol>${(node.data.items || []).map((it: string) => `<li>${it}</li>`).join('')}</ol>`
          : `<ul>${(node.data.items || []).map((it: string) => `<li>${it}</li>`).join('')}</ul>`
      default:
        return node.data.text || ''
    }
  }

  // ProseMirror-like nodes (Strapi v4 Rich Text JSON may look like this)
  if (node.type === 'doc' && node.content) {
    return node.content.map(nodeToHtml).join('')
  }

  switch (node.type) {
    case 'paragraph':
      return `<p>${(node.content || []).map(nodeToHtml).join('')}</p>`
    case 'heading': {
      const level = node.attrs?.level || 1
      return `<h${level}>${(node.content || []).map(nodeToHtml).join('')}</h${level}>`
    }
    case 'text':
      return renderMarks(node.text || '', node.marks)
    case 'bullet_list':
      return `<ul>${(node.content || []).map(nodeToHtml).join('')}</ul>`
    case 'ordered_list':
      return `<ol>${(node.content || []).map(nodeToHtml).join('')}</ol>`
    case 'list_item':
      return `<li>${(node.content || []).map(nodeToHtml).join('')}</li>`
    case 'blockquote':
      return `<blockquote>${(node.content || []).map(nodeToHtml).join('')}</blockquote>`
    case 'code_block':
      return `<pre><code>${escapeHtml((node.content || []).map((n) => n.text || '').join(''))}</code></pre>`
    case 'image': {
      const src = node.attrs?.src || node.attrs?.url || node.attrs?.srcset || node.data?.file?.url || ''
      const alt = node.attrs?.alt || node.attrs?.caption || ''
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`
    }
    default:
      // Generic fallback: render children if present
      if (node.content) return node.content.map(nodeToHtml).join('')
      if (node.data && typeof node.data === 'string') return escapeHtml(node.data)
      return ''
  }
}

export function richTextToHtml(input: StrapiBlock[] | LegacyNode | LegacyNode[] | string | null | undefined): string {
  if (!input) return ''

  // If it's already a string (HTML) return as-is
  if (typeof input === 'string') return input

  // Check if it's Strapi v5 blocks format (array with type like 'paragraph', 'heading', etc.)
  if (Array.isArray(input) && input.length > 0) {
    const firstBlock = input[0]
    if (firstBlock && typeof firstBlock === 'object' && 'type' in firstBlock && 'children' in firstBlock) {
      // This looks like Strapi v5 blocks format
      return blocksToHtml(input as StrapiBlock[])
    }
    // Otherwise treat as legacy format
    return input.map(nodeToHtml).join('')
  }

  // Handle object input (legacy format)
  if (typeof input === 'object') {
    const legacyInput = input as LegacyNode & { data?: LegacyNode; content?: LegacyNode[] }
    const candidate = legacyInput.data ?? legacyInput.content ?? legacyInput
    if (typeof candidate === 'string') return candidate
    if (Array.isArray(candidate)) return candidate.map(nodeToHtml).join('')
    return nodeToHtml(candidate as LegacyNode)
  }

  return ''
}

export default richTextToHtml
