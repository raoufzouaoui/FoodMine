import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[]=[]

  constructor(private foodService:FoodService, private activatedroute:ActivatedRoute){

  }

  ngOnInit(): void {
    let foodsObservable : Observable<Food[]>;
    this.activatedroute.params.subscribe((params)=>{
      if(params.searchTerm){
        foodsObservable=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
        console.log(this.foods);
      }else if(params.tag){
        foodsObservable=this.foodService.getAllFoodsByTag(params.tag);
        console.log(foodsObservable);
      }else{
        foodsObservable=this.foodService.getAll();
      }
      foodsObservable.subscribe(serverFoods =>{
        this.foods = serverFoods;
        console.log(this.foods);
      })

    })


  }

}
