// src/app/pipes/period-format.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodFormat',
  standalone: true
})
export class PeriodFormatPipe implements PipeTransform {
  transform(period: string): string {
    if (!period) return '';
    
    // Si el período contiene "Presente", cambiarlo por "Actual"
    if (period.includes('Presente') || period.includes('Present')) {
      return period.replace(/Presente|Present/g, 'Actual');
    }
    
    // Reemplazar guión corto por guión largo (más profesional)
    return period.replace(' - ', ' – ');
  }
}