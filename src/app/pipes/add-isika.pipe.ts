import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addIsika'
})
export class AddIsikaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Isika "+value;
  }

}
