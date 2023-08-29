export interface CategoryType {
  id: number;
  title: number;
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: any;
  image: string;
  likes: any;
  category: CategoryType;
}
