const { obterStatus } = require('../src/exibirStatus');

describe('Casos de teste para exibir status', () => {
   test('Deve retornar o status correto do aluno com base na média', () => {
      expect(obterStatus(3.5)).toBe("Reprovado por média");
      expect(obterStatus(4.0)).toBe("Aguardando a final");
      expect(obterStatus(5.5)).toBe("Aguardando a final");
      expect(obterStatus(6.0)).toBe("Aprovado por média");
      expect(obterStatus(7.5)).toBe("Aprovado por média");
      expect(obterStatus(0.0)).toBe("Reprovado por média");
   });
})

