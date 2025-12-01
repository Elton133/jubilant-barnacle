function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderMarks(text: string, marks: any[] | undefined) {
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

function nodeToHtml(node: any): string {
  if (!node) return ''
  if (typeof node === 'string') return escapeHtml(node)
  if (Array.isArray(node)) return node.map(nodeToHtml).join('')

  // Editor.js style blocks: { type: 'paragraph', data: { text: '...' } }
  if (node.type && node.data && typeof node.data.text === 'string') {
    switch (node.type) {
      case 'paragraph':
        return `<p>${node.data.text}</p>`
      case 'header':
        return `<h${node.data.level || 2}>${node.data.text}</h${node.data.level || 2}>`
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
    case 'heading':
      const level = node.attrs?.level || node.attrs?.level || 1
      return `<h${level}>${(node.content || []).map(nodeToHtml).join('')}</h${level}>`
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
      return `<pre><code>${escapeHtml((node.content || []).map((n: any) => n.text || '').join(''))}</code></pre>`
    case 'image':
      const src = node.attrs?.src || node.attrs?.url || node.attrs?.srcset || node.data?.file?.url || ''
      const alt = node.attrs?.alt || node.attrs?.caption || ''
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`
    default:
      // Generic fallback: render children if present
      if (node.content) return (node.content || []).map(nodeToHtml).join('')
      if (node.data && typeof node.data === 'string') return escapeHtml(node.data)
      return ''
  }
}

export function richTextToHtml(input: any): string {
  if (!input) return ''

  // Common wrappers: { data: { ... } } or { content: [...] }
  const candidate = input?.data ?? input?.content ?? input

  // If it's already a string (HTML) return as-is
  if (typeof candidate === 'string') return candidate

  // If it's an Editor.js style array of blocks
  if (Array.isArray(candidate)) return candidate.map(nodeToHtml).join('')

  // Otherwise try to convert node
  return nodeToHtml(candidate)
}

export default richTextToHtml
