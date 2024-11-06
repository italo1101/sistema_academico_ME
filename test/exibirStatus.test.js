const { obterStatus } = require('../src/exibirStatus');

test('Deve retornar o status correto do aluno com base na média', () => {
   expect(obterStatus(3.5)).toBe("Reprovado por média");
   expect(obterStatus(4.0)).toBe("Aguardando a final");
});
