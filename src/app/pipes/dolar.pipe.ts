import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolar',
  standalone: true
})
export class DolarPipe implements PipeTransform {

  transform(value: any,): any {
    const dollar = this.dollarsign(value)
    return dollar;
  }

  private dollarsign( value: any): any
  {
    const result = value += '$';
    return result;
}}
