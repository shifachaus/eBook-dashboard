export interface User {
  _id: string;
  name: string;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface Book {
  _id: string;
  title: string;
  description: string;
  author: User;
  genre: string;
  coverImage: Image;
  file: Image;
  createdAt: string;
}
