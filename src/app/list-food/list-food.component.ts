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

  startDeleteFood(idx: number) {
    this.deleteFoodSender.emit(idx);
  }

  constructor() { }

  ngOnInit() {
  }

}
