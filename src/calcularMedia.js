function calcularMedia(nota1, nota2) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        throw new Error('Notas devem estar no intervalo de 0 a 10');
    }
    return (nota1 + nota2) / 2;
}

module.exports = { calcularMedia };
