import { Component } from '@angular/core';
import { Food } from "./food.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  showNewFoodForm = false;
  editFood: Food = null;

  // Seeded data for demonstration purposes
  foodList: Food[] = [
    new Food('Apple', 'Large Braeburn', 100),
    new Food('Short Bread', 'Two pieces', 300),
    new Food('Walnuts', 'Small handfull', 250),
    new Food('Dried Fruit', 'Small handful', 180),
    new Food('Pint IPA', 'House Brand', 290),
    new Food('Burger', 'large with cheese', 800),
    new Food('Fries', 'heaping plateful', 900),
    new Food('Ice Cream', 'bowl with cherry on top', 750)
  ];

  deleteFood(idx: number) {
    this.foodList.splice(idx, 1);
  }

  startNewFood() {
    this.showNewFoodForm = true;
  }

  cancelNewFood() {
    this.showNewFoodForm = false;
  }

  newFood(sentFood: Food) {
    this.foodList.push(sentFood);
    this.showNewFoodForm = false;
  }

  startEditFood(idx: number) {
    this.editFood = this.foodList[idx];
  }

  endEditFood() {
    this.editFood = null;
  }
}
