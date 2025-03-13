import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase',
  standalone: false,
})
export class UpercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
