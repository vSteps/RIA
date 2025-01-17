abstract class FormaGeometrica {
    abstract calcularArea(): number;
  
    static descreverArea(forma: FormaGeometrica): string {
      return `A área da forma é ${forma.calcularArea()}.`;
    }
  }
  
  class Quadrado extends FormaGeometrica {
    private lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  
    definirLado(lado: number): void {
      this.lado = lado;
    }
  }
  
  class Triangulo extends FormaGeometrica {
    private base: number;
    private altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  
    definirDimensoes(base: number, altura: number): void {
      this.base = base;
      this.altura = altura;
    }
  }
  
  export { FormaGeometrica, Quadrado, Triangulo };
  