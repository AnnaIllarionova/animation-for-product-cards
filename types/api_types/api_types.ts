export interface IProductsData {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  images: string[];
  price: number;
  title: string;
  description: string
  category: string
  warrantyInformation: string
}
