export type Article = {
  id: number;
  slug: string;
  preview_image: string;
  image: string;
  category: string;
  title: string;
  description: string;
  published_at: string;
};


export type ArticleList = {
    articles: Article[];
    articlesCount: number;
};
