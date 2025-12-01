// Strapi v5 API response types

// Strapi v5 uses a flat structure for single relations and media
export interface StrapiImage {
  id: number;
  documentId?: string;
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface StrapiCategory {
  id: number;
  documentId?: string;
  name: string;
  slug: string;
}

// Strapi v5 Blocks content types
export interface StrapiBlockText {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface StrapiBlockLink {
  type: 'link';
  url: string;
  children: StrapiBlockText[];
}

export interface StrapiBlockParagraph {
  type: 'paragraph';
  children: (StrapiBlockText | StrapiBlockLink)[];
}

export interface StrapiBlockHeading {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: StrapiBlockText[];
}

export interface StrapiBlockListItem {
  type: 'list-item';
  children: (StrapiBlockText | StrapiBlockLink)[];
}

export interface StrapiBlockList {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: StrapiBlockListItem[];
}

export interface StrapiBlockQuote {
  type: 'quote';
  children: StrapiBlockText[];
}

export interface StrapiBlockCode {
  type: 'code';
  children: StrapiBlockText[];
}

export interface StrapiBlockImage {
  type: 'image';
  image: StrapiImage;
  children: StrapiBlockText[];
}

export type StrapiBlock =
  | StrapiBlockParagraph
  | StrapiBlockHeading
  | StrapiBlockList
  | StrapiBlockQuote
  | StrapiBlockCode
  | StrapiBlockImage;

// Blog entity
export interface StrapiBlog {
  id: number;
  documentId?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: StrapiBlock[];
  coverImage?: StrapiImage | null;
  category?: StrapiCategory | null;
  published?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  readTime?: string;
}

// Strapi v5 API response wrapper
export interface StrapiListResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Formatted blog for UI
export interface FormattedBlog {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  readTime: string;
  date: string | null;
}
