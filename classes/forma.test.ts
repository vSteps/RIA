import { Circulo, Retangulo } from './forma';

test('Testar a área do círculo', () => {
  const circulo = new Circulo(5);
  expect(circulo.calcularArea()).toBeCloseTo(78.5398, 3);

  circulo.definirRaio(10);
  expect(circulo.calcularArea()).toBeCloseTo(314.1592,3);
});

test('Testar a área do retângulo', () => {
  const retangulo = new Retangulo(4, 6);
  expect(retangulo.calcularArea()).toBe(24);

  retangulo.definirDimensoes(10, 20);
  expect(retangulo.calcularArea()).toBe(200);
});