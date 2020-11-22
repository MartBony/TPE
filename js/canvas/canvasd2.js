import { ligne, texte, ondepure } from "./canvasTools.js";

/* function ondepurer(freq,amp,precition,deb,fin,dec, phase){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec
	var Interval = new Array(1+Math.floor((fin)*precition)); // On crée l'intervalle
	var Images = new Array(1+Math.floor((fin)*precition));// On crée le tableau d'images

	var A = amp;
	var ω = 2*Math.PI*freq;

	var i = deb;
	var iteration = 0;

	while (i <= fin) {// On y remplis les antécedents et images
		Interval[iteration] = i;
		Images[iteration] = (A*Math.sin((ω*i)+phase))-dec;

		i += 1/precition;
		iteration++;
	}

	var Result = [Interval,Images];
	return(Result);


} */

function addimg(i1,m1,i2,m2) {
	if (i1.length == i2.length){
		var Interval = [];
		var Images = [];
		for (var i = 0; i < i1.length; i++) {
			var added = m1[i]+m2[i];
			Images.push(added);
		}

		Result = [i1,Images];

		return Result;
	}
}







var canvasdrawond = document.getElementById('candrawond');
var cdrawond = canvasdrawond.getContext('2d');
var cdrawond_width = canvasdrawond.width;
var cdrawond_height = canvasdrawond.height;

var sliderdrawondfreq = document.getElementById("sliderdrawondfreq");
var sliderdrawondamp = document.getElementById("sliderdrawondamp");
var sliderdrawondph = document.getElementById("sliderdrawondph");

function tracedrawond(freq,amp) {

	if (freqsindw <= 1) {
		precition = 20;
	}
	else{
		precition = 40;
	}
	var Result = ondepure(freqsindw,amp,precition,0,2*Math.PI,0, phase);
	var Interval = Result[0];
	var Images = Result[1];

	ligne(0,Originedwo[1],cdrawond_width,Originedwo[1],"#bbb", cdrawond);
	ligne(Originedwo[0],0,Originedwo[0],cdrawond_height,"#bbb", cdrawond);
	ligne(Vecteuridwo[0],0,Vecteuridwo[0],cdrawond_height,"#eee", cdrawond);
	ligne(0,Vecteurjdwo[1],cdrawond_width,Vecteurjdwo[1],"#eee", cdrawond);

	texte(Originedwo[0]+2,Originedwo[1]+10,"10px","0","black", cdrawond);
	texte(Vecteuridwo[0]+2,Originedwo[1]+10,"10px","1","black", cdrawond);
	texte(Originedwo[0]+2,Vecteurjdwo[1]+10,"10px","1","black", cdrawond);
	texte(2,Originedwo[1]-10,"10px","temps(s)","black", cdrawond);
	texte(Originedwo[0]+2,10,"10px","pression(mPa)","black", cdrawond);

	for (var i = 0; i < Interval.length; i++) {
		var x1 = Originedwo[0]+(Interval[i])*(Vecteuridwo[0]-Originedwo[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Originedwo[1]+(Images[i])*(Vecteuridwo[0]-Originedwo[0]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Originedwo[0]+(Interval[i+1])*(Vecteuridwo[0]-Originedwo[0]);
		var y2 = Originedwo[1]+(Images[i+1])*(Vecteuridwo[0]-Originedwo[0]);
		ligne(x1,y1,x2,y2,"#0078D7", cdrawond);
	}

	texte(10,10,"10px","Fréquence: "+ freqsindw.toFixed(2) +"Hz","#0078D7", cdrawond);
	texte(10,20,"10px","Periode: "+ (1/freqsindw).toFixed(2) +"s","#0078D7", cdrawond);
	texte(10,30,"10px","Amplitude: "+ ampdw.toFixed(2) +"mPa","#0078D7", cdrawond);
	texte(10,40,"10px","phase: "+ degphase +"°","#0078D7", cdrawond);

}

sliderdrawondfreq.oninput = function() {
	freqsindw = this.value/500;
	animatecandrawond();
}

sliderdrawondamp.oninput = function() {
	ampdw = this.value/300;
	animatecandrawond();
}

sliderdrawondph.oninput = function() {
	degphase = this.value;
	phase = degphase*Math.PI/180;
	animatecandrawond();
}

var Originedwo = [cdrawond_width/3, cdrawond_height/2];

var Vecteuridwo = [cdrawond_width*5/12, cdrawond_height/2];

var Vecteurjdwo = [cdrawond_width/3, Originedwo[1]+(Originedwo[0]-Vecteuridwo[0])]; // Repere orthonormé

let degphase = 0,
phase = 0,
precition = 20,
freqsindw = 1,
ampdw = 1;

function animatecandrawond(){

	cdrawond.clearRect(0,0,cdrawond_width,cdrawond_height);

	tracedrawond(freqsindw,ampdw);

}

animatecandrawond();