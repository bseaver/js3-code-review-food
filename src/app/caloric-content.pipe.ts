import { Pipe, PipeTransform } from '@angular/core';
import { Food } from "./food.model";

@Pipe({
  name: 'caloricContent',
  pure: false
})
export class CaloricContentPipe implements PipeTransform {

  transform(input: Food[], option: string): Food[] {
    let output: Food[] = [];
    for (let i = 0; i < input.length; i++) {
      if (option === 'all' || input[i].foodCalories >= 499.999) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
