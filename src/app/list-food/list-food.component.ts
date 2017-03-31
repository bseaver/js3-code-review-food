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

  startDeleteFood(idx: number) {
    this.deleteFoodSender.emit(idx);
  }

  startNewFood() {
    this.startNewFoodSender.emit();
  }

  startEditFood(idx) {
    this.startEditFoodSender.emit(idx);
  }

  changeFoodListFilter(option: string) {
    this.foodListFilter = option;
  }

  constructor() { }

  ngOnInit() {
  }

}
