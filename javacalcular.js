function calcular(){
  
    distancia=inputDistancia.value
    tempo=inputTempo.value
    paragrafoResultado.innerHTML=("O valor de sua corrida é de R$" +      (2+distancia*1.4+tempo*0.26).toFixed(2).replace("." , ",") + ". <br>Clique no botão abaixo para tentar concorrer a uma corrida gratuita!")
    tt.innerHTML=`|||||||||<button id="botaoSorteio" onclick="sorteio()"> CORRIDA DE GRAÇA </button>`
  }
  
  function sorteio(){
    
     aleatorio=Math.round(Math.random()*10)
    console.log(aleatorio)
  //numerocerto=chute==aleatorio
   numeroCerto=prompt("Digite seu número da sorte. Ele deve ser entre 1 e 10")
  
   if(numeroCerto < 0 || numeroCerto> 10){
     paragrafoResultado.innerHTML='Você colocou um número maior que dez. <br>Tente novamente.' 
   }
   if(numeroCerto == aleatorio && numeroCerto >=0 && numeroCerto <=10){
     paragrafoResultado.innerHTML='Parabéns! <br> Você acertou!<br> Aproveite sua corrida GRÁTIS!'
   }
   if(numeroCerto != aleatorio && numeroCerto >=0 && numeroCerto <=10){
     paragrafoResultado.innerHTML='Hummm...<br>Não foi dessa vez.<br> Tente novamente mais tarde.'
   }
   
  }