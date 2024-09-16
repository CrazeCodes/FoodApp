import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/food';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        const foodItem = this.foodService.getFoodById(params['id']);
        if (foodItem) {
          this.food = foodItem;
        } else {
          console.error('Food item not found');
          // Optional: Redirect to another page or set a default value
          this.router.navigateByUrl('/cart-page');
        }
      }
    });
  }
  ngOnInit(): void {

  }
  //add to cart button code
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}