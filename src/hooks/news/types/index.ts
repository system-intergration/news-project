export interface Article {
  source_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: string[];
  video_url?: string;
  description: string;
  content: string;
  pubDate: Date;
  full_description: string;
  image_url?: string;
  country: string[];
  category: string[];
  language: string;
}

export interface News {
  status: string;
  totalResults: number;
  results: Article[];
  nextPage: number;
}
