class Frutas {
    constructor() {
      this.imagem = imgFrutas[int(random(0, 3.9))];
      (this.posY = 0), 2;
      this.posX = random(10, 500);
      this.velocidade = random(1, maximo);
  
      this.largura = 80;
      this.altura = 50;
  
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.altura;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.largura;
    }
  
    //mover as frutas
    mova() {
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }