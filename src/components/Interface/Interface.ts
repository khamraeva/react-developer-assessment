export interface IPost {
  author: IAuthor,
  categories: ICategory[],
  id: string,
  publishDate: string,
  summary: string,
  title: string
}

export default interface IAuthor {
  name: string,
  avatar: string
}

export interface IPostlist {
  posts: IPost[]
}

export interface ICard {
  card: IPost;
}

export interface ICategory {
  id: string,
  name: string
}

export interface IShowCount {
  showCount: number,
  useShowCount: (showCount: number) => void,
  increaseShowAmount: () => void,
}
