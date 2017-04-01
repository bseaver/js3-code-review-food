import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  inValidName = false;
  inValidCalories = false;

  @Input() showNewFoodForm: boolean;
  @Output() cancelNewFoodSender = new EventEmitter();
  @Output() newFoodSender = new EventEmitter();

  cancelNewFoodForm() {
    this.cancelNewFoodSender.emit();
  }

  saveNewFood(foodName: string, foodDetails: string, foodCalories: number) {
    const newFood = new Food(foodName, foodDetails, foodCalories);

    this.inValidName = !newFood.isValidName();
    this.inValidCalories = !newFood.isValidCalories();

    if (!this.inValidName && !this.inValidCalories) {
      this.newFoodSender.emit(newFood);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
