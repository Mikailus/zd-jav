import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boostValue',
})
export class BoostValuePipe implements PipeTransform {
  transform(value: number, valueToAdd: number): number {
    return value + valueToAdd;
  }
}
