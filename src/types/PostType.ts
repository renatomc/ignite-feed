export type AuthorData = {
  avatarUrl: string;
  name: string;
  rule: string;
}

export type ContentData = {
  type: 'paragraph' | 'link';
  content: string;
}

export type PostData = {
  id: number;
  author: AuthorData;
  content: ContentData[];
  publishedAt: Date;
}