export interface Image {
  '@id': string;
  '@type': string;
  url: string;
  alt: string;
  isActif: boolean;
}

export interface Piece {
  '@id': string;
  '@type': string;
  description: string;
  surface: string;
  items: Item[];
  isActif: boolean;
}

export interface Item {
  '@id': string;
  '@type': string;
  space: string;
  type: string;
  isActif: boolean;
}

export interface Category {
  '@id': string;
  '@type': string;
  name: string;
  info: string;
  imageUrl: string;
  isActif: boolean;
}

export interface User {
  '@id': string;
  '@type': string;
  email: string;
  telephone: string;
  fullName: string;
  age: string;
  imgUrl: string;
  badge: string;
  bio: string;
  roles: string[];
}

export interface MoElement {
  "@id": string;
  name: string;
  '@content': string;
  description: string;
  locate: string;
  price: string;
  size: string;
  createdDate: string;
  verified: boolean;
  exactLocate: string;
  desired: string;
  city: string;
  images: Image[];
  pieces: Piece[];
  elementType: { '@id': string; name: string; isActif: boolean; };
  user: User;
  category: Category;
  isActif: boolean;
}
