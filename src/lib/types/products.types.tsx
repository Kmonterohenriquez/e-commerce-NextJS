export type ProductImage = {
  src: String;
  alt: String;
};

export type Product = {
  _id: string;
  name: string;
  category: string;
  personType: string;
  description: string;
  quantity: number;
  price: number;
  mainImage: string;
  images: [ProductImage];
};
