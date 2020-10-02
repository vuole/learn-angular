import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, isUpper: boolean, addTo: number): number {
    return (isUpper ? Math.ceil(value + addTo) : Math.floor(value + addTo));
  }

}
