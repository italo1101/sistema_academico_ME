const { lancarNota } = require('../src/lancamentoNotas');

test('Deve lançar erro para notas inválidas de 1UP e 2UP', () => {
   expect(() => lancarNota(-1.0, 8.2)).toThrow('Nota de 1UP inválida');
   expect(() => lancarNota(7.5, 12.0)).toThrow('Nota de 2UP inválida');
   expect(() => lancarNota(7.567, 8.2)).toThrow('Nota de 1UP inválida');
   expect(() => lancarNota(7.5, "oito")).toThrow('Entradas devem ser numéricas');
});