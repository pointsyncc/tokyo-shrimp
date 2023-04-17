export type Article = {
  id: number;
  slug: string;
  image: string;
  category: string;
  title: string;
  published_at: string;
};


export type ArticleList = {
    articles: Article[];
    articlesCount: number;
};
