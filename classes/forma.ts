interface Forma {
    calcularArea(): number;
  }
  
  class Circulo implements Forma {
    private raio: number;
  
    constructor(raio: number) {
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * this.raio * this.raio;
    }
  
    definirRaio(raio: number): void {
      this.raio = raio;
    }
  }
  
  class Retangulo implements Forma {
    private largura: number;
    private altura: number;
  
    constructor(largura: number, altura: number) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return this.largura * this.altura;
    }
  
    definirDimensoes(largura: number, altura: number): void {
      this.largura = largura;
      this.altura = altura;
    }
  }
  

  
  export { Forma, Circulo, Retangulo};
  