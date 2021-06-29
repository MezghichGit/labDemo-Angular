import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addIsika'
})
export class AddIsikaPipe implements PipeTransform {

  transform(value: string): string {
    return "Isika "+value;
  }

}
