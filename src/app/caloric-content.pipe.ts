import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'caloricContent',
  pure: false
})
export class CaloricContentPipe implements PipeTransform {

  transform(input: Food[], option: string): Food[] {
    let output: Food[] = [];

    if (option === 'over500') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].foodCalories > 500) {
          output.push(input[i]);
        }
      }
    }

    if (option === 'under500') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].foodCalories < 500) {
          output.push(input[i]);
        }
      }
    }

    if (option === 'all') {
      for (let i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    }

    return output;
  }

}
