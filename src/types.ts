export interface FoodData {
  id: string;
  name: string;
  description: String;
  price: number;
  available: boolean;
  image: string;
}

export interface Stock {
  id: number;
  amount: number;
}
