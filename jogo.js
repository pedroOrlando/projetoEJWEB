//variaveis
var fullDeck;
var halfDeck1;
var halfDeck2;
var flipper;
var cardCount;
var p1;
var p2;
var placarPlayer1;
var placarPlayer2;
var winningScore;
var id;
var pauser;

//inicializador
function init(){
//valores
fullDeck = ["AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AE", "2E", "3E", "4E", "5E", "6E", "7E", "8E", "9E", "10E", "JE", "QE", "KE", "AO", "2O", "3O", "4O", "5O", "6O", "7O", "8O", "9O", "10O", "JO", "QO", "KO", "AP", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P", "10P", "JP", "QP", "KP"];
halfDeck1 = [];
halfDeck2 = [];
editName();
setPontuação();
flipper=false;
cardCount = 0;
placarPlayer1 = 0;
placarPlayer2 = 0;
deckShuffleSplit ();
pauser = true;

//matando o interval, caso haja
clearInterval(id);

//atributos
document.getElementById("botoes").style.display="none";
document.getElementById("placar1").innerHTML=placarPlayer1+"<br>";
document.getElementById("placar2").innerHTML=placarPlayer2;
document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Virar Carta';
document.getElementById("valorFalado1").innerHTML = '"Tá na hora do duelo!"';
document.getElementById("valorFalado2").innerHTML = '"Fale até cansar..."';
document.getElementById("yugi").src="./images/yugi.png";
document.getElementById("yugi").style.height="240px";
document.getElementById("yugi").style.width="120px";
document.getElementById("kaiba").src="./images/kaiba.png";
document.getElementById("kaiba").style.height="240px";
document.getElementById("kaiba").style.width="160px";


document.getElementById("pergunta").style.display="block";
document.getElementById("button6").style.display="inline"; 
document.getElementById("button6").innerHTML = "Player 1: "+p1;
document.getElementById("button7").style.display="inline"; 
document.getElementById("button7").innerHTML = "Player 2: "+p2;


for (let i=0; i < document.getElementsByClassName("cartaImagem").length; i++){
		document.getElementsByClassName("cartaImagem")[i].style.border = "40px solid rgba(165, 42, 42, 0.7)";
		document.getElementsByClassName("cartaImagem")[i].style.padding = "0px";
		document.getElementsByClassName("cartaImagem")[i].style.width="240";
		document.getElementsByClassName("cartaImagem")[i].src="./images/cardBack.jpg";
	}
}
//

function choosenStarter(){
	document.getElementById("button0").style.display="inline";
	document.getElementById("button1").style.display="inline";
	document.getElementById("button2").style.display="inline";
	document.getElementById("button3").style.display="inline";
	document.getElementById("button4").style.display="inline";
	document.getElementById("button5").style.display="none"; 
	//
	document.getElementById("button6").style.display="none"; 
	document.getElementById("button7").style.display="none"; 
	document.getElementById("pergunta").style.display="none";
	document.getElementById("botoes").style.display="block";
}

function winner(i){
	switch(i){
		case 1:
			placarPlayer1++;
			if (placarPlayer1 == winningScore){
				document.getElementById("cardPic1").style.backgroundImage = "url('./images/cash.gif')";
				document.getElementById("cardPic1").style.border = "1px solid black";
				document.getElementById("cardPic1").style.padding = "40px";
				document.getElementById("yugi").src="./images/victory.webp";
				document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Nova Partida';
				clearInterval(id);
				setTimeout(function(){
					alert("VITORIA DO JOGADOR "+p1+"!!!!!");
				}, 200)
			}
			else{
				document.getElementById("cardPic1").style.borderColor = "rgba(144, 238, 144, 0.7)";
				document.getElementById("cardPic2").style.borderColor = "rgba(255, 0, 0, 0.7)";
				document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Reembaralhar';
				document.getElementById("yugi").src="./images/winner"+(Math.floor(Math.random()*10)+1)+".webp";
				flipper = true;
				setTimeout(function(){
					alert("Ponto pro jogador "+p1+"!");
				}, 200)
			}
			document.getElementById("placar1").innerHTML=placarPlayer1+"<br>";
			cardCount=52;
			
			break;
	
		case 2:
			placarPlayer2++;
			if (placarPlayer2 == winningScore){
				
				document.getElementById("cardPic2").style.backgroundImage = "url('./images/cash.gif')";
				document.getElementById("cardPic2").style.border = "1px solid black";
				document.getElementById("cardPic2").style.padding = "40px";
				document.getElementById("kaiba").src="./images/victory.webp";
				document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Nova Partida';
				clearInterval(id);
				setTimeout(function(){
					alert("VITORIA DO JOGADOR "+p2+"!!!!!");
				}, 200)
			}
			else {
				document.getElementById("cardPic2").style.borderColor = "rgba(144, 238, 144, 0.7)";
				document.getElementById("cardPic1").style.borderColor = "rgba(255, 0, 0, 0.7)";
				document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Reembaralhar';
				document.getElementById("kaiba").src="./images/winner"+(Math.floor(Math.random()*10)+1)+".webp";
				flipper = false;
				setTimeout(function(){
					alert("Ponto pro jogador "+p2+"!");
				}, 200)
			}
			document.getElementById("placar2").innerHTML=placarPlayer2;
			cardCount=52;
			break;
	}
	
}

function deckShuffleSplit (){
	
	let deckAux = fullDeck.slice();
	
	for(let y = 0; y < 26; y++){
		let x =(Math.floor(Math.random()*(52-y)));
		halfDeck1.push(deckAux[x]);
		deckAux.splice(x, 1);
	}
	
	for(let y = 0; y < 26; y++){
		let x = (Math.floor(Math.random()*(26-y)));
		halfDeck2.push(deckAux[x]);
		deckAux.splice(x, 1);
	}
}

function cardTurnOver() {
	console.log(flipper);
	if((placarPlayer1 < winningScore) && (placarPlayer2 < winningScore)){
		if (cardCount < 52){
			if(flipper){
				document.getElementById("cardPic1").src = "./images/"+halfDeck1[0]+".png";		
				spokenCards(cardCount);
				halfDeck1.splice(0, 1);	
				cardCount++;
			}else{
				document.getElementById("cardPic2").src = "./images/"+halfDeck2[0]+".png";		
				spokenCards(cardCount);
				halfDeck2.splice(0, 1);	
				cardCount++;
			}
		}else if (cardCount===52){
			document.getElementById("cardPic1").src="./images/giphy.webp";
			document.getElementById("cardPic2").src="./images/giphy.webp";
			document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Reembaralhar';
			cardCount++;
		}else if (cardCount===53){
			defaultValues();
		}
	}else{
		newMatch();
	}
	
}

function flipperSwitch(){
	if (flipper){
		flipper = false;
	}
	else {
		flipper = true;
	}
}

function spokenCards(i) {
	switch (i){
		
	case 0:
	case 13:
	case 26:
	case 39:
	
	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Às"';
		flipperSwitch();
		if(halfDeck1[0] === "AC" || halfDeck1[0] === "AO" || halfDeck1[0] === "AE" || halfDeck1[0] === "AP"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Às"';
		flipperSwitch();
		if(halfDeck2[0] === "AC" || halfDeck2[0] === "AO" || halfDeck2[0] === "AE" || halfDeck2[0] === "AP"){
			winner(2);
		}
	}
	break;
	
	case 1:
	case 14:
	case 27:
	case 40:
	
	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Dois"';
		flipperSwitch();
		if(halfDeck1[0] === "2C" || halfDeck1[0] === "2O" || halfDeck1[0] === "2E" || halfDeck1[0] === "2P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Dois"';
		flipperSwitch();
		if(halfDeck2[0] === "2C" || halfDeck2[0] === "2O" || halfDeck2[0] === "2E" || halfDeck2[0] === "2P"){
			winner(2);
		}
	}
	break;
	
	case 2:
	case 15:
	case 28:
	case 41:

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Três"';
		flipperSwitch();
		if(halfDeck1[0] === "3C" || halfDeck1[0] === "3O" || halfDeck1[0] === "3E" || halfDeck1[0] === "3P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Três"';
		flipperSwitch();
		if(halfDeck2[0] === "3C" || halfDeck2[0] === "3O" || halfDeck2[0] === "3E" || halfDeck2[0] === "3P"){
			winner(2);
		}
	}
	break;
	
	case 3:
	case 16:
	case 29:
	case 42:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Quatro"';
		flipperSwitch();
		if(halfDeck1[0] === "4C" || halfDeck1[0] === "4O" || halfDeck1[0] === "4E" || halfDeck1[0] === "4P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Quatro"';
		flipperSwitch();
		if(halfDeck2[0] === "4C" || halfDeck2[0] === "4O" || halfDeck2[0] === "4E" || halfDeck2[0] === "4P"){
			winner(2);
		}
	}
	break;
	
	case 4:
	case 17:
	case 30:
	case 43:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Cinco"';
		flipperSwitch();
		if(halfDeck1[0] === "5C" || halfDeck1[0] === "5O" || halfDeck1[0] === "5E" || halfDeck1[0] === "5P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Cinco"';
		flipperSwitch();
		if(halfDeck2[0] === "5C" || halfDeck2[0] === "5O" || halfDeck2[0] === "5E" || halfDeck2[0] === "5P"){
			winner(2);
		}
	}
	break;
	
	case 5:
	case 18:
	case 31:
	case 44:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Seis"';
		flipperSwitch();
		if(halfDeck1[0] === "6C" || halfDeck1[0] === "6O" || halfDeck1[0] === "6E" || halfDeck1[0] === "6P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Seis"';
		flipperSwitch();
		if(halfDeck2[0] === "6C" || halfDeck2[0] === "6O" || halfDeck2[0] === "6E" || halfDeck2[0] === "6P"){
			winner(2);
		}
	}
	break;
	
	case 6:
	case 19:
	case 32:
	case 45:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Sete"';
		flipperSwitch();
		if(halfDeck1[0] === "7C" || halfDeck1[0] === "7O" || halfDeck1[0] === "7E" || halfDeck1[0] === "7P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Sete"';
		flipperSwitch();
		if(halfDeck2[0] === "7C" || halfDeck2[0] === "7O" || halfDeck2[0] === "7E" || halfDeck2[0] === "7P"){
			winner(2);
		}
	}
	break;
	
	case 7:
	case 20:
	case 33:
	case 46:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Oito"';
		flipperSwitch();
		if(halfDeck1[0] === "8C" || halfDeck1[0] === "8O" || halfDeck1[0] === "8E" || halfDeck1[0] === "8P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Oito"';
		flipperSwitch();
		if(halfDeck2[0] === "8C" || halfDeck2[0] === "8O" || halfDeck2[0] === "8E" || halfDeck2[0] === "8P"){
			winner(2);
		}
	}
	
	
	break;
	
	case 8:
	case 21:
	case 34:
	case 47:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Nove"';
		flipperSwitch();
		if(halfDeck1[0] === "9C" || halfDeck1[0] === "9O" || halfDeck1[0] === "9E" || halfDeck1[0] === "9P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Nove"';
		flipperSwitch();
		if(halfDeck2[0] === "9C" || halfDeck2[0] === "9O" || halfDeck2[0] === "9E" || halfDeck2[0] === "9P"){
			winner(2);
		}
	}
	break;
	
	case 9:
	case 22:
	case 35:
	case 48:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Dez"';
		flipperSwitch();
		if(halfDeck1[0] === "10C" || halfDeck1[0] === "10O" || halfDeck1[0] === "10E" || halfDeck1[0] === "10P"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Dez"';
		flipperSwitch();
		if(halfDeck2[0] === "10C" || halfDeck2[0] === "10O" || halfDeck2[0] === "10E" || halfDeck2[0] === "10P"){
			winner(2);
		}
	}
	break;
	
	case 10:
	case 23:
	case 36:
	case 49:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Valete"';
		flipperSwitch();
		if(halfDeck1[0] === "JC" || halfDeck1[0] === "JO" || halfDeck1[0] === "JE" || halfDeck1[0] === "JP"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Valete"';
		flipperSwitch();
		if(halfDeck2[0] === "JC" || halfDeck2[0] === "JO" || halfDeck2[0] === "JE" || halfDeck2[0] === "JP"){
			winner(2);
		}
	}
	break;
	
	case 11:
	case 24:
	case 37:
	case 50:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Dama"';
		flipperSwitch();
		if(halfDeck1[0] === "QC" || halfDeck1[0] === "QO" || halfDeck1[0] === "QE" || halfDeck1[0] === "QP"){
			winner(1);
			
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Dama"';
		flipperSwitch();
		if(halfDeck2[0] === "QC" || halfDeck2[0] === "QO" || halfDeck2[0] === "QE" || halfDeck2[0] === "QP"){
			winner(2);
		}
	}
	break;
	
	case 12:
	case 25:
	case 38:
	case 51:	

	if(flipper){
		document.getElementById("valorFalado1").innerHTML='"Rei"';
		flipperSwitch();
		if(halfDeck1[0] === "KC" || halfDeck1[0] === "KO" || halfDeck1[0] === "KE" || halfDeck1[0] === "KP"){
			winner(1);
		}
	}
	else{
		document.getElementById("valorFalado2").innerHTML='"Rei"';
		flipperSwitch();
		if(halfDeck2[0] === "KC" || halfDeck2[0] === "KO" || halfDeck2[0] === "KE" || halfDeck2[0] === "KP"){
			winner(2);
		}
	}
	break;
	
	default:
	document.getElementById("valorFalado1").innerHTML="...";
	break;
	}
	
} 

// criar função pra conferir nome null

function editName(){
	p1=prompt("Nome do Jogador 1: ");
	for (let i=0; i < document.getElementsByClassName("p1").length; i++){
		document.getElementsByClassName("p1")[i].innerHTML=p1;
	}
	p2=prompt("Nome do Jogador 2: ");
	for (let i=0; i < document.getElementsByClassName("p2").length; i++){
		document.getElementsByClassName("p2")[i].innerHTML=p2;
	}
	
	document.getElementById("button2").innerHTML='<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Renomear Jogadores';
}

function defaultValues(){
	document.getElementById("placar1").innerHTML=placarPlayer1+"<br>";
	document.getElementById("placar2").innerHTML=placarPlayer2;
	halfDeck1 = [];
	halfDeck2 = [];
	deckShuffleSplit();
	document.getElementById("cardPic1").src="./images/cardBack.jpg";
	document.getElementById("cardPic1").width="240";
	document.getElementById("cardPic2").src="./images/cardBack.jpg";
	document.getElementById("cardPic2").width="240";
	cardCount=0;
	document.getElementById("button1").innerHTML='<span class="glyphicon glyphicon-retweet" aria-hidden="true"></span> Virar Carta';
	document.getElementById("cardPic1").style.borderColor = "rgba(165, 42, 42, 0.7)";
	document.getElementById("cardPic2").style.borderColor = "rgba(165, 42, 42, 0.7)";
	document.getElementById("valorFalado1").innerHTML = '"Tá na hora do duelo!"';
	document.getElementById("valorFalado2").innerHTML = '"Fale até cansar..."';
	document.getElementById("yugi").src="./images/yugi.png";
	document.getElementById("kaiba").src="./images/kaiba.png";
}

function resetScore(){
	let i = window.confirm("Deseja realmente resetar os placares e nomes dos jogadores?");
	if(i){
		clearInterval(id);
		placarPlayer1=0;
		placarPlayer2=0;
		init();
	}
}

function setPontuação(){
	winningScore = prompt("De quantos pontos será a partida?");
}

function newMatch(){
	pausar();
	let i = window.confirm("Deseja iniciar uma nova partida?");
	if(i){
		placarPlayer1=0;
		placarPlayer2=0;
		init();
	}
}

function auto(){
	id = setInterval(cardTurnOver, 500);
	document.getElementById("button1").disabled = true; //disable
	document.getElementById("button4").style.display="none";
	document.getElementById("button5").style.display="inline";
}

function pausar(){
	if (pauser){
		clearInterval(id);
		document.getElementById("button4").style.display="none";
		document.getElementById("button5").innerHTML='<span class="glyphicon glyphicon-play" aria-hidden="true"></span> Auto';
		document.getElementById("button1").disabled = false;
		pauser = false;
	}else{
		document.getElementById("button5").innerHTML='<span class="glyphicon glyphicon-pause" aria-hidden="true"></span> Pause';
		auto();
		pauser = true;
	}
}