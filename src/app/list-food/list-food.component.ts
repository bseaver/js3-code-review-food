import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})

export class ListFoodComponent implements OnInit {
  @Input() foodList: Food[];
  @Output() deleteFoodSender = new EventEmitter();
  @Output() startNewFoodSender = new EventEmitter();
  @Output() startEditFoodSender = new EventEmitter();

  foodListFilter = 'all';

  startDeleteFood(thisFood: Food) {
    this.deleteFoodSender.emit(thisFood);
  }

  startNewFood() {
    this.startNewFoodSender.emit();
  }

  startEditFood(thisFood: Food) {
    this.startEditFoodSender.emit(thisFood);
  }

  changeFoodListFilter(option: string) {
    this.foodListFilter = option;
  }

  constructor() { }

  ngOnInit() {
  }

}
