import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from '../../data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private HttpClient:HttpClient) { }
  getAll():Food[]{
    return sample_foods;
  }
  //searchFood
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // Add the getFoodById method
  getFoodById(id: string): Food | undefined {
    return this.getAll().find(food => food.id === id)?? new Food();
  }
}