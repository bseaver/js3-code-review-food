import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from "./../food.model";

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Input() showNewFoodForm: boolean;
  @Output() cancelNewFoodSender = new EventEmitter();

  cancelNewFoodForm() {
    this.cancelNewFoodSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
