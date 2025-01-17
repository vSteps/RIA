import { FormaGeometrica, Quadrado, Triangulo } from './formaAbstract';

test('Testar a área do quadrado', () => {
  const quadrado = new Quadrado(4);
  expect(quadrado.calcularArea()).toBe(16);

  quadrado.definirLado(8);
  expect(quadrado.calcularArea()).toBe(64);
});

test('Testar a área do triângulo', () => {
  const triangulo = new Triangulo(5, 10);
  expect(triangulo.calcularArea()).toBe(25);

  triangulo.definirDimensoes(10, 20);
  expect(triangulo.calcularArea()).toBe(100);
});

test('Testar a descrição da área de uma forma', () => {
  const quadrado = new Quadrado(4);
  expect(FormaGeometrica.descreverArea(quadrado)).toBe('A área da forma é 16.');

  const triangulo = new Triangulo(5, 10);
  expect(FormaGeometrica.descreverArea(triangulo)).toBe('A área da forma é 25.');
});
