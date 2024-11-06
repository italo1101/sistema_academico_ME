const { calcularMedia } = require('../src/calcularMedia');

test('Deve calcular a média corretamente', () => {
   expect(calcularMedia(7.0, 8.0)).toBe(7.5);
   expect(calcularMedia(5.0, 5.0)).toBe(5.0);
});
