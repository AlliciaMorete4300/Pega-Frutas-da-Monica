function executarJogo(){
    background(imgFundo);
  monica.mova();

  //condições para movimento dos obstáculos
  for (let i = 0; i < frutas.length; i++) {
    frutas[i].mova();
    if (frutas[i].posY > +450) {
      frutas[i] = new Frutas(frutas[i].posY, frutas[i].imagem);
    }

    //condição para que frutas colidam com a personagem e suma
    if (
      monica.xInicial < frutas[i].xFinal &&
      monica.xFinal > frutas[i].xInicial &&
      monica.yInicial < frutas[i].yFinal &&
      monica.yFinal > frutas[i].yInicial

    ) {
      //condição para que se personagem colidir com a bomba, zerar pontos e emitir som de explosão
      if (frutas[i].imagem == imgFrutas[3]) {
        pontos = 0;
        maximo = 5;
        frutas[i] = new Frutas(frutas[i].posY);
        som_explosao.play();
        vidas -=1;
        if(vidas==0){

        controleTela="Game Over"
      }

      } else {
        pontos++;
        maximo += 1;

        frutas[i] = new Frutas(frutas[i].posY);
        som.play();
      }
    }
  }
  textSize(20);
  text("Pontos: " + pontos, 10, 20);

  textSize(20);
  text("Vidas: " + vidas, 10, 70);

}