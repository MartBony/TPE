function ondepure(freq,amp,precition,deb,fin,dec){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec

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


}

function carre(x, y, width, height, color, id) {
	id.fillStyle = color;
	id.beginPath();
	id.fillRect(x, y, width, height);
}

function ligne(x1, y1, x2, y2, color, id) {
	id.strokeStyle = color;
	id.beginPath();
	id.moveTo(x1, y1);
	id.lineTo(x2, y2);
	id.stroke();
}

function rond(x, y, rayon, s_angle, f_angle, sens_cont, color, pleind, id) {
	id.strokeStyle = color;
	id.fillStyle = color;
	id.beginPath();
	id.arc(x, y, rayon, s_angle, f_angle, sens_cont);
	id.stroke()
	if (pleind == true) {
		id.fill();
	}
}

function texte(x,y,pxsize,content, color, id){
	id.fillStyle = color;
	id.font = pxsize +" Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif";
	id.fillText(content, x, y); 
}





















var canvassimp = document.getElementById('cansimp');
var csimp = canvassimp.getContext('2d');
var csimp_width = canvassimp.width;
var csimp_height = canvassimp.height;

function tracesimp() {


	ligne(0,Originesimp[1],csimp_width,Originesimp[1],"#bbb", csimp);
	ligne(Originesimp[0],0,Originesimp[0],csimp_height,"#bbb", csimp);
	ligne(Vecteurisimp[0],0,Vecteurisimp[0],csimp_height,"#eee", csimp);
	ligne(0,Vecteurjsimp[1],csimp_width,Vecteurjsimp[1],"#eee", csimp);

	texte(Originesimp[0]+2,Originesimp[1]+10,"10px","0","black", csimp);
	texte(Vecteurisimp[0]+2,Originesimp[1]+10,"10px","1","black", csimp);
	texte(Originesimp[0]+2,Vecteurjsimp[1]+10,"10px","1","black", csimp);
	texte(2,Originesimp[1]-10,"10px","temps(s)","black", csimp);
	texte(Originesimp[0]+2,10,"10px","pression(mPa)","black", csimp);
	texte(50,csimp_height-10,"20px","Fréquence : 2Hz","#0099BC", csimp);


	var Result = ondepure(2,1/3,40,0,3/2,-1/3);
	Intervald = Result[0];		
	Imagesd = Result[1];


	for (var i = 0; i < Intervald.length; i++) {
		var x1 = Originesimp[0]+(Intervald[i])*(Vecteurisimp[0]-Originesimp[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Originesimp[1]+(Imagesd[i])*(Vecteurjsimp[1]-Originesimp[1]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Originesimp[0]+(Intervald[i+1])*(Vecteurisimp[0]-Originesimp[0]);
		var y2 = Originesimp[1]+(Imagesd[i+1])*(Vecteurjsimp[1]-Originesimp[1]);
		ligne(x1,y1,x2,y2,"rgb(31,209,94)", csimp);
	}

}

var Originesimp = [csimp_width/5, csimp_height*3/4];

var Vecteurisimp = [csimp_width*4/5, csimp_height*3/4];

var Vecteurjsimp = [csimp_width*2/3, csimp_height/4]; // Repere orthonormé

var rayonsimp = Vecteurisimp[0]-Originesimp[0];

tracesimp();

















var canvastren = document.getElementById('cantren');
var ctren = canvastren.getContext('2d');
var ctren_width = canvastren.width;
var ctren_height = canvastren.height;

function tracetren(freq,amp) {

	var Result = ondepure(freqsin,amp,precition,0,9*Math.PI/6,9/8);
	var Interval = Result[0];
	var Images = Result[1];

	for (var i = 0; i < Interval.length; i++) {
		var x1 = Origine[0]+(Interval[i])*(Vecteuri[0]-Origine[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Origine[1]+(Images[i])*(Vecteuri[0]-Origine[0]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère

		coordligne.push([x1,y1]);
	}

	enroulementren(Interval, Images);

}

function enroulementren(temps, image) {
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i])*(rayon))+ctren_width/3;
		y1 = image[i]*(Math.sin(temps[i])*(rayon))+ctren_height/2;

		coordrond.push([x1,y1]);
	}
}

function getVector(coordorigin, coordend){

	for (var i = 0; i < coordorigin.length; i++) {
		var x1 = coordorigin[i][0];
		var y1 = coordorigin[i][1];
		var x2 = coordend[i][0];
		var y2 = coordend[i][1];

		vecteurs.push([x2-x1,y2-y1]);

	}
}

var Origine = [ctren_width/3, ctren_height/2];

var Vecteuri = [ctren_width*5/12, ctren_height/2];

var Vecteurj = [ctren_width/3, Origine[1]+(Origine[0]-Vecteuri[0])]; // Repere orthonormé

var rayon = Vecteuri[0]-Origine[0];

imgstep = 1;
precition = 20;
freqsin = 1;
amp = 1;
numimg = 6*60; // 3 secondes avec 60 fps

var coordligne = [];

var coordrond = [];


tracetren(freqsin,amp); // Calculer les coodonnées de début et de fin

var vecteurs = [];

getVector(coordligne,coordrond); // Creer toutes les coordonnées de l'animation

finalcoord = [];

function animatecantren(){

	ctren.clearRect(0,0,ctren_width,ctren_height);

	ligne(0,Origine[1],ctren_width,Origine[1],"#bbb", ctren);
	ligne(Origine[0],0,Origine[0],ctren_height,"#bbb", ctren);
	ligne(Vecteuri[0],0,Vecteuri[0],ctren_height,"#eee", ctren);
	ligne(0,Vecteurj[1],ctren_width,Vecteurj[1],"#eee", ctren);

	mult = imgstep/numimg;
	mult += Math.sin(mult*2*Math.PI+Math.PI)/7;

	if (mult < 1) {

		var localcoord = [];
		for (var i = 0; i < coordligne.length-1; i++) {
			x1 = coordligne[i][0]+(vecteurs[i][0]*mult);
			y1 = coordligne[i][1]+(vecteurs[i][1]*mult);
			x2 = coordligne[i+1][0]+(vecteurs[i+1][0]*mult);
			y2 = coordligne[i+1][1]+(vecteurs[i+1][1]*mult);

			localcoord.push([x1,y1,x2,y2]);

			ligne(x1,y1,x2,y2,"rgb(31,209,94)", ctren);
		}

		finalcoord.push(localcoord);

	}
	else{

		var step = imgstep % finalcoord.length;

		var datastep = finalcoord[step];

		for (var i = 0; i < datastep.length-1; i++) {
			x1 = datastep[i][0];
			y1 = datastep[i][1];
			x2 = datastep[i+1][0];
			y2 = datastep[i+1][1];

			ligne(x1,y1,x2,y2,"rgb(31,209,94)", ctren);
		}

	}

	if(position == 4){
		requestAnimationFrame(animatecantren);
	}
	imgstep++;
}

animatecantren();











var canvasenrvec = document.getElementById('canenrvec');
var cenrvec = canvasenrvec.getContext('2d');
var cenrvec_width = canvasenrvec.width;
var cenrvec_height = canvasenrvec.height;

function enroulementenrvec(temps, image, first) {
	if (first == true) {
		for (var i = 0; i < temps.length; i++) {
			x1 = -image[i]*(Math.cos(temps[i])*(rayonev))+cenrvec_width/3;
			y1 = -image[i]*(Math.sin(temps[i])*(rayonev))+cenrvec_height/2;
			x2 = -image[i+1]*(Math.cos(temps[i+1])*(rayonev))+cenrvec_width/3;
			y2 = -image[i+1]*(Math.sin(temps[i+1])*(rayonev))+cenrvec_height/2;

			datavec.push([x1,y1]);
			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cenrvec);
		}
	}
	else{
		for (var i = 0; i < datavec.length-1; i++) {
			x1 = datavec[i][0];
			y1 = datavec[i][1];
			x2 = datavec[i+1][0];
			y2 = datavec[i+1][1];
			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cenrvec);
		}
	}


	var e = actimg%datavec.length;
	var dist = datavec[e][0];
	var haut = datavec[e][1];

	ligne(Origineev[0],Origineev[1],dist,haut,"#E81123", cenrvec);
}

function contentenrvec() {
	ligne(0,cenrvec_height/2,cenrvec_width,cenrvec_height/2,"#bbb", cenrvec);
	ligne(cenrvec_width/3,0,cenrvec_width/3,cenrvec_height,"#bbb", cenrvec);
	ligne(Vecteuriev[0],0,Vecteuriev[0],cenrvec_height,"#eee", cenrvec);
	rond(Origineev[0],Origineev[1],rayonev,0,Math.PI*2,false,"#ccc",false, cenrvec);
	texte(cenrvec_width/4,cenrvec_height*7/8,"15px","Enroulement une fois autour du cercle","rgb(31,209,94)", cenrvec);
}

var Origineev = [cenrvec_width/3, cenrvec_height/2];

var Vecteuriev = [cenrvec_width/2, cenrvec_height/2];

var rayonev = Vecteuriev[0]-Origineev[0];

var firstvec = true;

var datavec = [];

function animatecanenrvec(temps, image){

	cenrvec.clearRect(0,0,cenrvec_width,cenrvec_height);

	contentenrvec();
	enroulementenrvec(temps, image, firstvec);

	firstvec = false;

}











var canvasfreqvar = document.getElementById('canfreqvar');
var cfreqvar = canvasfreqvar.getContext('2d');
var cfreqvar_width = canvasfreqvar.width;
var cfreqvar_height = canvasfreqvar.height;

var sliderfv = document.getElementById("sliderfv");

function enroulementfreqvar(temps, image, first) {
	if (first == true) {
		datafv.fill(0);
		for (var i = 0; i < temps.length; i++) {
			x1 = -image[i]*(Math.cos(temps[i]*freqfv)*(rayonfv))+cfreqvar_width/3;
			y1 = -image[i]*(Math.sin(temps[i]*freqfv)*(rayonfv))+cfreqvar_height/2;
			x2 = -image[i+1]*(Math.cos(temps[i+1]*freqfv)*(rayonfv))+cfreqvar_width/3;
			y2 = -image[i+1]*(Math.sin(temps[i+1]*freqfv)*(rayonfv))+cfreqvar_height/2;

			datafv[i] = [x1,y1];

			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cfreqvar);		}
	}
	else{
		for (var i = 0; i < datafv.length-1; i++) {
			x1 = datafv[i][0];
			y1 = datafv[i][1];
			x2 = datafv[i+1][0];
			y2 = datafv[i+1][1];
			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cfreqvar);
		}	

		var e = actimgfv%datafv.length;
		var dist = datafv[e][0];
		var haut = datafv[e][1];

		ligne(Originefv[0],Originefv[1],dist,haut,"#E81123", cfreqvar);

	}



}

function contentfreqvar() {
	ligne(0,cfreqvar_height/2,cfreqvar_width,cfreqvar_height/2,"#bbb", cfreqvar);
	ligne(cfreqvar_width/3,0,cfreqvar_width/3,cfreqvar_height,"#bbb", cfreqvar);
	ligne(Vecteurifv[0],0,Vecteurifv[0],cfreqvar_height,"#eee", cfreqvar);
	rond(Originefv[0],Originefv[1],rayonfv,0,Math.PI*2,false,"#ccc",false, cfreqvar);
}

sliderfv.oninput = function() {
	sliderfv = this.value;
	freqfv = sliderfv/20;
	firstfv = true;
} 

var Originefv = [cfreqvar_width/3, cfreqvar_height/2];

var Vecteurifv = [cfreqvar_width/2, cfreqvar_height/2];

var rayonfv = Vecteurifv[0]-Originefv[0];

var firstfv = true;

var datafv = [];

var freqfv = 1;

var actimgfv = 0;

function animatecanfreqvar(temps, image){
	actimgfv++;
	cfreqvar.clearRect(0,0,cfreqvar_width,cfreqvar_height);

	contentfreqvar();
	enroulementfreqvar(temps, image, firstfv);

	firstfv = false;

}













var canvasond = document.getElementById('canond');
var cond = canvasond.getContext('2d');
var cond_width = canvasond.width;
var cond_height = canvasond.height;

var sliderondfreq = document.getElementById("sliderondfreq");
var sliderondamp = document.getElementById("sliderondamp");

function traceond(freq,amp, first) {


	ligne(0,Origineond[1],cond_width,Origineond[1],"#bbb", cond);
	ligne(Origineond[0],0,Origineond[0],cond_height,"#bbb", cond);
	ligne(Vecteuriond[0],0,Vecteuriond[0],cond_height,"#eee", cond);
	ligne(0,Vecteurjond[1],cond_width,Vecteurjond[1],"#eee", cond);

	texte(Origineond[0]+2,Origineond[1]+10,"10px","0","black", cond);
	texte(Vecteuriond[0]+2,Origineond[1]+10,"10px","1","black", cond);
	texte(Origineond[0]+2,Vecteurjond[1]+10,"10px","1","black", cond);
	texte(2,Origineond[1]-10,"10px","temps(s)","black", cond);
	texte(Origineond[0]+2,10,"10px","pression(mPa)","black", cond);



	if (first == true) {
		var Result = ondepure(freqsin,amp,precition,0,2*Math.PI,5/8);
		Interval = Result[0];
		Images = Result[1];


		for (var i = 0; i < Interval.length; i++) {
			var x1 = Origineond[0]+(Interval[i])*(Vecteuriond[0]-Origineond[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
			var y1 = Origineond[1]+(Images[i])*(Vecteuriond[0]-Origineond[0]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
			var x2 = Origineond[0]+(Interval[i+1])*(Vecteuriond[0]-Origineond[0]);
			var y2 = Origineond[1]+(Images[i+1])*(Vecteuriond[0]-Origineond[0]);
			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cond);

			datatraceond.push([x1,y1]);
		}

		animatecanfreqvar(Interval,Images);
		animatecanenrvec(Interval,Images);

	}
	else{

		for (var i = 0; i < datatraceond.length-1; i++) {
			var x1 = datatraceond[i][0];
			var y1 = datatraceond[i][1];
			var x2 = datatraceond[i+1][0];
			var y2 = datatraceond[i+1][1];
			ligne(x1,y1,x2,y2,"rgb(31,209,94)", cond);
		}

		animatecanfreqvar(Interval,Images);
		animatecanenrvec(0,0);

	}

	var e = actimg%datatraceond.length;
	var dist = datatraceond[e][0];
	var haut = datatraceond[e][1];

	ligne(dist,Origineond[1],dist,haut,"#E81123", cond);

}

var Origineond = [cond_width/3, cond_height/2];

var Vecteuriond = [cond_width*5/12, cond_height/2];

var Vecteurjond = [cond_width/3, Origineond[1]+(Origineond[0]-Vecteuriond[0])]; // Repere orthonormé

var rayonond = Vecteuriond[0]-Origineond[0];

var Interval = [];
var Images = [];


actimg = 0;

precition = 20;
freqsin = 1;
amp = -1/2;

var datatraceond = [];

var first = true;

function animatecanond(){
	actimg += 1;

	cond.clearRect(0,0,cond_width,cond_height);

	traceond(freqsin,amp, first);

	first = false;

	if(position == 4){
		setTimeout(function(){animatecanond()},100);
	}

}

animatecanond();














var canvasmatch = document.getElementById('canmatch');
var cmatch = canvasmatch.getContext('2d');
var cmatch_width = canvasmatch.width;
var cmatch_height = canvasmatch.height;


var slidermatch = document.getElementById("slidermatch");

function enroulementmatch(temps, image, freq) {

	for (var i = 0; i < temps.length; i++) {
		x1 = -image[i]*(Math.cos(temps[i]*freq)*(rayonev))+Originemt[0];
		y1 = -image[i]*(Math.sin(temps[i]*freq)*(rayonev))+Originemt[1];
		x2 = -image[i+1]*(Math.cos(temps[i+1]*freq)*(rayonev))+Originemt[0];
		y2 = -image[i+1]*(Math.sin(temps[i+1]*freq)*(rayonev))+Originemt[1];

		ligne(x1,y1,x2,y2,"rgb(31,209,94)", cmatch);
	}

}

function contentmatch(freq) {
	ligne(0,Originemt[1],cmatch_width,Originemt[1],"#bbb", cmatch);
	ligne(Originemt[0],0,Originemt[0],cmatch_height,"#bbb", cmatch);
	ligne(Vecteurimt[0],0,Vecteurimt[0],cmatch_height,"#eee", cmatch);
	rond(Originemt[0],Originemt[1],rayonev,0,Math.PI*2,false,"#ccc",false, cmatch);

	texte(0,15,"15px","Fréquence du signal : 1Hz", "#038387", cmatch);
	texte(0,40,"15px","Fréquence d'enroulement : "+ (freq/(2*Math.PI)).toFixed(2) +"Hz", "#038387", cmatch);
}

slidermatch.oninput = function() {
	slidermt = this.value;
	freqmt = slidermt/10;
	animatecanmatch(Tpsmt,Imgmt);
} 

var Originemt = [cmatch_width/3, cmatch_height/2];

var Vecteurimt = [cmatch_width/2, cmatch_height/2];

var rayonev = Vecteurimt[0]-Origineev[0];

var dataenr = ondepure(freqsin,amp,precition,0,2*Math.PI,5/8);
var Tpsmt = dataenr[0];
var Imgmt = dataenr[1];

freqmt = 1;

function animatecanmatch(temps, image){

	cmatch.clearRect(0,0,cmatch_width,cmatch_height);

	contentmatch(freqmt);
	enroulementmatch(temps, image, freqmt);

}

animatecanmatch(Tpsmt,Imgmt);















var canvasadded = document.getElementById('canadded');
var cadded = canvasadded.getContext('2d');
var cadded_width = canvasadded.width;
var cadded_height = canvasadded.height;

function traceadded() {


	ligne(0,Origineadded[1],cadded_width,Origineadded[1],"#bbb", cadded);
	ligne(Origineadded[0],0,Origineadded[0],cadded_height,"#bbb", cadded);
	ligne(Vecteuriadded[0],0,Vecteuriadded[0],cadded_height,"#eee", cadded);
	ligne(0,Vecteurjadded[1],cadded_width,Vecteurjadded[1],"#eee", cadded);

	texte(Origineadded[0]+2,Origineadded[1]+10,"10px","0","black", cadded);
	texte(Vecteuriadded[0]+2,Origineadded[1]+10,"10px","1","black", cadded);
	texte(Origineadded[0]+2,Vecteurjadded[1]+10,"10px","1","black", cadded);
	texte(2,Origineadded[1]-10,"10px","temps(s)","black", cadded);
	texte(Origineadded[0]+2,10,"10px","pression(mPa)","black", cadded);
	texte(50,cadded_height-10,"20px","Fréquences : 2Hz + 4Hz","#0099BC", cadded);


	var Result1 = ondepure(2,1,40,0,2*Math.PI,0);
	var Intervalae1 = Result1[0];		
	var Imagesae1 = Result1[1];

	var Result2 = ondepure(4,1,40,0,2*Math.PI,0);
	var Intervalae2 = Result2[0];		
	var Imagesae2 = Result2[1];

	for (var i = 0; i < Intervalae1.length; i++) {
		FIntervalae.push(Intervalae1[i]);
		FImagesae.push(Imagesae1[i]+Imagesae2[i]);
	}

	for (var i = 0; i < Intervalae1.length-1; i++) {

		var x1 = Origineadded[0]+(FIntervalae[i])*(Vecteuriadded[0]-Origineadded[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Origineadded[1]+(FImagesae[i])*(Vecteurjadded[1]-Origineadded[1]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Origineadded[0]+(FIntervalae[i+1])*(Vecteuriadded[0]-Origineadded[0]);
		var y2 = Origineadded[1]+(FImagesae[i+1])*(Vecteurjadded[1]-Origineadded[1]);
		ligne(x1,y1,x2,y2,"rgb(31,209,94)", cadded);

	}

}

var Origineadded = [cond_width/3, cond_height/2];

var Vecteuriadded = [cond_width*5/12, cond_height/2];

var Vecteurjadded = [cond_width/3, Origineond[1]+(Origineond[0]-Vecteuriond[0])]; // Repere orthonormé

var rayonadded = Vecteuriadded[0]-Origineadded[0];

var FIntervalae = [];
var FImagesae = [];

traceadded();












var canvasaddedenr = document.getElementById('canaddedenr');
var caddedenr = canvasaddedenr.getContext('2d');
var caddedenr_width = canvasaddedenr.width;
var caddedenr_height = canvasaddedenr.height;

var sliderae = document.getElementById("sliderae");

function enroulementaddedenr(temps, image, freq) {

	for (var i = 0; i < temps.length; i++) {
		x1 = -image[i]*(Math.cos(temps[i]*freq)*(rayonae))+caddedenr_width/3;
		y1 = -image[i]*(Math.sin(temps[i]*freq)*(rayonae))+caddedenr_height/2;
		x2 = -image[i+1]*(Math.cos(temps[i+1]*freq)*(rayonae))+caddedenr_width/3;
		y2 = -image[i+1]*(Math.sin(temps[i+1]*freq)*(rayonae))+caddedenr_height/2;

		ligne(x1,y1,x2,y2,"rgb(31,209,94)", caddedenr);
	}

}

function contentaddedenr(freq) {
	ligne(0,caddedenr_height/2,caddedenr_width,caddedenr_height/2,"#bbb", caddedenr);
	ligne(caddedenr_width/3,0,caddedenr_width/3,caddedenr_height,"#bbb", caddedenr);
	ligne(Vecteuriae[0],0,Vecteuriae[0],caddedenr_height,"#eee", caddedenr);
	rond(Origineae[0],Origineae[1],rayonae,0,Math.PI*2,false,"#ccc",false, caddedenr);

	texte(0,15,"15px","Fréquence d'enroulement : "+ (freq/(2*Math.PI)).toFixed(2) +"Hz", "#038387", caddedenr);
}

sliderae.oninput = function() {
	slideraed = this.value;
	freqae = slideraed/20;
	animatecanaddedenr(FIntervalae,FImagesae);
} 

var Origineae = [caddedenr_width/3, caddedenr_height/2];

var Vecteuriae = [caddedenr_width/2, caddedenr_height/2];

var rayonae = Vecteuriae[0]-Origineae[0];

var freqae = 1;

function animatecanaddedenr(temps, image){

	caddedenr.clearRect(0,0,caddedenr_width,caddedenr_height);

	contentaddedenr(freqae);
	enroulementaddedenr(temps, image, freqae);

}

animatecanaddedenr(FIntervalae,FImagesae);











var canvascgrav = document.getElementById('cancgrav');
var ccgrav = canvascgrav.getContext('2d');
var ccgrav_width = canvascgrav.width;
var ccgrav_height = canvascgrav.height;

var slidercgrav = document.getElementById("slidercgrav");

function enroulementcgrav(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = -image[i]*(Math.cos(temps[i]*freq)*(rayoncg))+Originecg[0];
		y1 = -image[i]*(Math.sin(temps[i]*freq)*(rayoncg))+Originecg[1];
		x2 = -image[i+1]*(Math.cos(temps[i+1]*freq)*(rayoncg))+Originecg[0];
		y2 = -image[i+1]*(Math.sin(temps[i+1]*freq)*(rayoncg))+Originecg[1];

		Xco += x1;
		Yco += y1;

		num++;

		ligne(x1,y1,x2,y2,"rgb(31,209,94)", ccgrav);
	}

	cgravX = Xco/num;
	cgravY = Yco/num;

	rond(cgravX,cgravY,3,0,Math.PI*2,false,"rgb(70,162,250)",true, ccgrav);
}

function contentcgrav(freq) {
	ligne(0,Originecg[1],ccgrav_width,Originecg[1],"#bbb", ccgrav);
	ligne(Originecg[0],0,Originecg[0],ccgrav_height,"#bbb", ccgrav);
	ligne(Vecteuricg[0],0,Vecteuricg[0],ccgrav_height,"#eee", ccgrav);
	rond(Originecg[0],Originecg[1],rayoncg,0,Math.PI*2,false,"#ccc",false, ccgrav);

	texte(ccgrav_width/7,ccgrav_height/6,"20px","Fréquence d'enroulement: "+ (freq/(2*Math.PI)).toFixed(2) +"Hz","#038387", ccgrav);
	texte(ccgrav_width/5,ccgrav_height*7/8,"20px","Centre de gravité de la figure","rgb(70,162,250)", ccgrav);
	rond(ccgrav_width/6,(ccgrav_height*7/8)-5,3,0,Math.PI*2,false,"rgb(70,162,250)",true, ccgrav);
}

slidercgrav.oninput = function() {
	freqcgrav = this.value/100;
	animatecancgrav(Interval, Images, freqcgrav);
}

var Originecg = [ccgrav_width/3, ccgrav_height/2];

var Vecteuricg = [ccgrav_width/2, ccgrav_height/2];

var rayoncg = Vecteuricg[0]-Originecg[0];

function animatecancgrav(temps, image, freq){

	ccgrav.clearRect(0,0,ccgrav_width,ccgrav_height);

	contentcgrav(freq);
	enroulementcgrav(temps, image, freq);

}


animatecancgrav(Interval,Images,1);
















var canvascgraph = document.getElementById('cancgraph');
var ccgraph = canvascgraph.getContext('2d');
var ccgraph_width = canvascgraph.width;
var ccgraph_height = canvascgraph.height;

function enroulementcgraph(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i]*freq)*(rayoncgr));
		y1 = image[i]*(Math.sin(temps[i]*freq)*(rayoncgr));
		x2 = image[i+1]*(Math.cos(temps[i+1]*freq)*(rayoncgr));
		y2 = image[i+1]*(Math.sin(temps[i+1]*freq)*(rayoncgr));

		Xco += x1;
		Yco += y1;

		num++;

	}

	cgraphX = Xco/num;
	cgraphY = Yco/num;

	return([cgraphX,cgraphY]);
}

function contentcgraph() {
	ligne(0,ccgraph_height/2,ccgraph_width,ccgraph_height/2,"#bbb", ccgraph);
	ligne(ccgraph_width/3,0,ccgraph_width/3,ccgraph_height*4/5,"#bbb", ccgraph);
	ligne(Vecteuricg[0],0,Vecteuricg[0],ccgraph_height*4/5,"#eee", ccgraph);

	texte(Originecg[0]+2,Originecg[1]+10,"10px","0","black", ccgraph);
	texte(Vecteuricg[0]+2,Originecg[1]+10,"10px","1","black", ccgraph);
	texte(2,Originecg[1]-10,"10px","Fréquence(Hz)","black", ccgraph);
	texte(Originecg[0]-70,10,"10px","Coordonnée X","#00CC6A", ccgraph);
	texte(Originecg[0]+2,10,"10px","Coordonnée Y","rgb(70,162,250)", ccgraph);
}

var Originecg = [ccgraph_width/3, ccgraph_height/2];

var Vecteuricg = [ccgraph_width*2/3, ccgraph_height/2];

var Vecteurjcg = [ccgraph_width/3, Originecg[1]+(Originecg[0]-Vecteuricg[0])]; // Repere orthonormé

var rayoncgr = Vecteuricg[0]-Originecg[0];

function drawcgraph(temps, image){
		
	contentcgraph();

	var imagesx = [];
	var imagesy = [];
	for (var i = 0; i < 500; i++) {

		enr = enroulementcgraph(temps, image, i/(50));
		enr1 = enroulementcgraph(temps, image, (i+1)/(50));

		imagesx.push(enr[0]);
		imagesix1 = enr1[0];

		xx1 = (i*1.60*rayoncgr/500)+Originecg[0];
		xy1 = imagesx[i]+Originecg[1];

		xx2 = (i*1.60*rayoncgr/500)+Originecg[0];
		xy2 = imagesix1+Originecg[1];


		ligne(xx1,xy1,xx2,xy2,"#00CC6A", ccgraph);
		
		imagesy.push(enr[1]);
		imagesiy1 = enr1[1];

		yx1 = (i*1.60*rayoncgr/500)+Originecg[0];
		yy1 = imagesy[i]+Originecg[1];

		yx2 = (i*1.60*rayoncgr/500)+Originecg[0];
		yy2 = imagesiy1+Originecg[1];


		ligne(yx1,yy1,yx2,yy2,"rgb(70,162,250)", ccgraph);
		
	}
}

var Resultcgraph = ondepure(1,1,40,0,2*Math.PI,0);

drawcgraph(Resultcgraph[0], Resultcgraph[1]);