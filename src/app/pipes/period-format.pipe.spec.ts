import { PeriodFormatPipe } from './period-format.pipe'; // ✅ Nombre corregido

describe('PeriodFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new PeriodFormatPipe();
    expect(pipe).toBeTruthy();
  });
});