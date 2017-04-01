import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './../food.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  @Input() editFood: Food;
  @Output() endEditFoodSender = new EventEmitter();

  endEditFood() {
    this.endEditFoodSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
