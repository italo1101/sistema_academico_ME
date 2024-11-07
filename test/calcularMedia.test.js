const { calcularMedia } = require('../src/calcularMedia');

describe('Testes para cálculo da média', () => {
   test('Deve calcular a média corretamente', () => {
      expect(calcularMedia(7.0, 8.0)).toBe(7.5);
      expect(calcularMedia(5.0, 5.0)).toBe(5.0);
      expect(calcularMedia(0.0, 10.0)).toBe(5.0);
      expect(calcularMedia(0.0, 7.0)).toBe(3.5);
      expect(calcularMedia(8.0, 10.0)).toBe(9.0);
      
   });

   test('Deve lançar erro para notas fora do intervalo', () => {
      expect(() => calcularMedia(-1.0, 11.0)).toThrow('Notas devem estar no intervalo de 0 a 10');
   })
})
