export interface CategoryType {
  id: number;
  title: string;
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: CategoryType;
}
