import { ligne, texte, ondepure } from "./canvasTools.js";

/* function ondepure(freq,amp,precition,deb,fin,dec){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec

	var Intervalo = new Array(1+Math.floor((fin)*precition)); // On crée l'intervalle
	var Imageso = new Array(1+Math.floor((fin)*precition));// On crée le tableau d'images

	var A = amp;
	var ω = 2*Math.PI*freq;

	var i = deb;
	var iteration = 0;

	while (i <= fin) {// On y remplis les antécedents et images
		Intervalo[iteration] = i;
		Imageso[iteration] = (A*Math.sin(ω*i))-dec;

		i += 1/precition;
		iteration++;
	}

	var Result = [Intervalo,Imageso];
	return(Result);


} */







var canvasdotsi = document.getElementById('candotsi');
var cdotsi = canvasdotsi.getContext('2d');
var cdotsi_width = canvasdotsi.width;
var cdotsi_height = canvasdotsi.height;

function tracedotsi() {


	ligne(0,Originedotsi[1],cdotsi_width,Originedotsi[1],"#bbb", cdotsi);
	ligne(Originedotsi[0],0,Originedotsi[0],cdotsi_height,"#bbb", cdotsi);
	ligne(Vecteuridotsi[0],0,Vecteuridotsi[0],cdotsi_height,"#eee", cdotsi);
	ligne(0,Vecteurjdotsi[1],cdotsi_width,Vecteurjdotsi[1],"#eee", cdotsi);

	texte(Originedotsi[0]+2,Originedotsi[1]+10,"10px","0","black", cdotsi);
	texte(Vecteuridotsi[0]+2,Originedotsi[1]+10,"10px","1","black", cdotsi);
	texte(Originedotsi[0]+2,Vecteurjdotsi[1]+10,"10px","1","black", cdotsi);
	texte(2,Originedotsi[1]-10,"10px","temps(s)","black", cdotsi);
	texte(Originedotsi[0]+2,10,"10px","pression(mPa)","black", cdotsi);


	let Result = ondepure(2,1/3,40,0,3/2,-1/3),
	Intervald = Result[0],
	Imagesd = Result[1];


	for (var i = 0; i < Intervald.length; i++) {
		var x1 = Originedotsi[0]+(Intervald[i])*(Vecteuridotsi[0]-Originedotsi[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Originedotsi[1]+(Imagesd[i])*(Vecteurjdotsi[1]-Originedotsi[1]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Originedotsi[0]+(Intervald[i+1])*(Vecteuridotsi[0]-Originedotsi[0]);
		var y2 = Originedotsi[1]+(Imagesd[i+1])*(Vecteurjdotsi[1]-Originedotsi[1]);
		ligne(x1,y1,x2,y2,"rgb(31,209,94)", cdotsi);
		ligne(x1-2,y1-2,x1+2,y1+2,"#0099BC", cdotsi);
		ligne(x1-2,y1+2,x1+2,y1-2,"#0099BC", cdotsi);
	}

}

var Originedotsi = [cdotsi_width/5, cdotsi_height*3/4];

var Vecteuridotsi = [cdotsi_width*4/5, cdotsi_height*3/4];

var Vecteurjdotsi = [cdotsi_width*2/3, cdotsi_height/4]; // Repere orthonormé

var rayondotsi = Vecteuridotsi[0]-Originedotsi[0];

tracedotsi();
