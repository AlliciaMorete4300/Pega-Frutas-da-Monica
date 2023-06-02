//variáveis
var fundo;
var frutas = [];
var monica;
var imgFrutas = [];
var bomba;
var pontos = 0;
var som;
var maximo = 5;
var som_explosao;
var imgAbertura;
var controleTela = "INICIO";
var vidas = 3;

//atributos do personagem (posição/altura/largura)

//atributos das frutas(velocidade,tamanho,posição)


//carregar imagens no jogo
function preload() {
  imgFundo = loadImage("jogo/imgJogo/fundo.jpg");
  imgMonica = loadImage("jogo/imgJogo/monica-1.png");
  monica = new Monica();
  imgFrutas[0] = loadImage("jogo/imgJogo/kiwi.png");
  imgFrutas[1] = loadImage("jogo/imgJogo/abacaxi.png");
  imgFrutas[2] = loadImage("jogo/imgJogo/laranja.png");
  imgFrutas[3] = loadImage("jogo/imgJogo/bombastica.png");
  frutas[0] = new Frutas();
  frutas[1] = new Frutas();
  frutas[2] = new Frutas();
  som_explosao = loadSound("jogo/audio/som_explosao.mp3");
  som = loadSound("jogo/audio/som_fruta.wav");
  imgAbertura = loadImage("IMG/fundos.canva/PÁGINA INICIAL.png");
  imgFinal = loadImage("IMG/fundos.canva/FIM DO JOGO.png");
}

//fundo
function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode==32){
    controleTela="JOGO";
  }
}

function draw() {
if(controleTela == "INICIO"){
  mostraAbertura();
} else{
   if (controleTela == "JOGO" ){
    executarJogo();
   }
  if
    (controleTela=="Game Over"){
      background(imgFinal)
      vidas = 3;

  }

}
}
