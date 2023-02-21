import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags?:Tag[];
  constructor(private foodService:FoodService) {
    foodService.getAllTags().subscribe((serverTags:any )=>{
      this.tags=serverTags;
    });

  }

  ngOnInit(){
    // this.tags=this.foodService.getAllTag();
  }



}
