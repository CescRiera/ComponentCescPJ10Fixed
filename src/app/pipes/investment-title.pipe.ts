import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'investmentTitle',
  standalone: true
})
export class InvestmentTitlePipe implements PipeTransform {
  transform(value: string): string {
    return `🌍 ${value.toUpperCase()}`;
  }
}
