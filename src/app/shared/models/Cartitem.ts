import { Food } from "./food";

export class cartitem {
  quantity: number = 1;
  price: number;

  constructor(public Food: Food) {
    this.price = Food.price;  // Initialize price here, after food is assigned
  }
}