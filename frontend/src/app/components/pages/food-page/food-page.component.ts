import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute,private foodService: FoodService,
    private cartService:CartService,private route:Router
    ){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.foodService.getFoodById(params.id).subscribe((serviceFood:any) =>{
          this.food =serviceFood;
          console.log(this.food);
        })
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.route.navigateByUrl('/cart-page');
  }

}
