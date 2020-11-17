function filterinput(inval){
	inval = Number(inval);
	if (inval >= 0 && inval <= 5) {
		return([true, inval])
	}
	else{
		return(false)
	}
}

function ondepure(freq,amp,precition,deb,fin,dec){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec

	var Interval = new Array(1+Math.floor((fin)*precition)); // On crée l'intervalle
	var Images = new Array(1+Math.floor((fin)*precition));// On crée le tableau d'images

	var A = amp;
	var ω = 2*Math.PI*freq;

	var i = deb;
	var iteration = 0;

	while (i <= fin) {// On y remplis les antécedents et images
		Interval[iteration] = i;
		Images[iteration] = (A*Math.sin(ω*i))-dec;

		i += 1/precition;
		iteration++;
	}

	var Result = [Interval,Images];
	return(Result);


}

function ondepurer(freq,amp,precition,deb,fin,dec, phase){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec

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


}

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

function animwait(){

	$('.claculstart p').css({'transform':'translateX(50px)'});
	$('#canadd').css({'opacity':'0.1'});
	setTimeout(function(){
		$('#canaddenr').css({'opacity':'0.1'});
		$('.buttonscalc span').css({'display':'block'});
		$('.buttonscalc span').css({'transform':'translateX(0px)'});
		$('.buttonscalc span').css({'opacity':'1'});
	},150);
	setTimeout(function(){$('#canaddconc').css({'opacity':'0.1'})},300);

	setTimeout(function(){
		$('#canadd').css({'opacity':'1'});
		$('#canaddenr').css({'opacity':'1'});
		$('#canaddconc').css({'opacity':'1'});
		$('.buttonscalc span').css({'opacity':'0'});
		$('.buttonscalc span').css({'transform':'translateX(-50px)'});
		$('.claculstart p').css({'transform':'translateX(0px)'});
		$('.canmultcont img.logo').css({'transform':'rotate(-360deg)'});
	},1000);
	
	setTimeout(function(){
		$('.buttonscalc span').css({'display':'none'});
	},1200);

	setTimeout(function(){
		$('.canmultcont img.logo').css({'transition-duration':'0s'});
		$('.canmultcont img.logo').css({'transform':'rotate(0deg)'});
		setTimeout(function(){$('.canmultcont img.logo').css({'transition-duration':'1s'})}, 1);
	},2100);
	
}







var canvaseuler = document.getElementById('caneuler');
var c = canvaseuler.getContext('2d');
var c_width = canvaseuler.width;
var c_height = canvaseuler.height;

var slider = document.getElementById("slidereuler");

function content() {
	ligne(0,c_height/2,c_width,c_height/2,"#eee", c);
	ligne(c_width/3,0,c_width/3,c_height,"#eee", c);
	ligne((c_width+c_height)/3,0,(c_width+c_height)/3,c_height,"#eee", c);
	rond(c_width/3,c_height/2,c_height/3,0,Math.PI*2,false,"#ccc",false, c);

	rond(c_width/3,c_height/2,c_height/3,0,poslin,true,"#E81123",false, c);
	texte(xlintx2,ylintx2,"20px",Math.abs(poslin.toFixed(2)) +" unités","#E81123", c);

	ligne(c_width/3,c_height/2,xlin,ylin,"black", c);
	rond(xlin,ylin,3,0,Math.PI*2,false,"black",true, c);

	if(Math.abs(poslin) > 0.3){
		texte(xlintx,ylintx,"20px","e","#E81123", c);
		texte(xlintx+10,ylintx-10,"10px",Math.abs(poslin.toFixed(2)) +"i","#E81123", c);
	}

	if (numimg > 80) {
		velocite /= 1.05;
		poslin += velocite;
	}
	
}

slider.oninput = function() {
	poslin = -this.value/100;
	animatecaneuler();
}

var poslin = 0;
var velocite = -0.1;
var xlin = 0;
var ylin = 0;
var numimg = 0;

function animatecaneuler(){
	if (numimg < 300) {
		if (numimg > 0) {
			setTimeout(function(){animatecaneuler()}, 10); 
			slider.value = Math.abs(Math.floor(poslin*100));
		}
	}
	c.clearRect(0,0,c_width,c_height);
	

	xlin = c_width/3+Math.cos(poslin)*c_height/3;
	ylin = c_height/2+Math.sin(poslin)*c_height/3;

	xlintx = c_width/3+Math.cos(poslin)*c_height/3*1.3;
	ylintx = c_height/2+Math.sin(poslin)*c_height/3*1.3;

	xlintx2 = c_width/3+Math.cos(poslin/2)*c_height/3*1.05;
	ylintx2 = c_height/2+Math.sin(poslin/2)*c_height/3*1.05;

	content();

	numimg++;

}














var canvastour = document.getElementById('cantour');
var ctour = canvastour.getContext('2d');
var ctour_width = canvastour.width;
var ctour_height = canvastour.height;


function contenttour() {

	xi = (ctour_width+ctour_height)/3;
	midheiht = ctour_height/2;
	
	ligne(0,midheiht,ctour_width,midheiht,"#eee", ctour);
	ligne(ctour_width/3,0,ctour_width/3,ctour_height,"#eee", ctour);
	ligne(xi,0,xi,ctour_height,"#eee", ctour);
	rond(ctour_width/3,midheiht,ctour_height/3,0,Math.PI*2,false,"#ccc",false, ctour);

	ligne(ctour_width/3,midheiht,xi,midheiht,"black", ctour);
	rond(ctour_width/3,midheiht,ctour_height/3,0,2*Math.PI,true,"#E81123",false, ctour);
	rond(xi,midheiht,3,0,Math.PI*2,false,"black",true, ctour);

	texte(ctour_width*3/4,midheiht,"20px","2π unités","#E81123", ctour);

}
contenttour();

















var canvastime = document.getElementById('cantime');
var ctime = canvastime.getContext('2d');
var ctime_width = canvastime.width;
var ctime_height = canvastime.height;


function contenttime() {
	ligne(0,ctime_height/2,ctime_width,ctime_height/2,"#eee", ctime);
	ligne(ctime_width/3,0,ctime_width/3,ctime_height,"#eee", ctime);
	ligne((ctime_width+ctime_height)/3,0,(ctime_width+ctime_height)/3,ctime_height,"#eee", ctime);
	rond(ctime_width/3,ctime_height/2,ctime_height/3,0,Math.PI*2,false,"#ccc",false, ctime);

	ligne(ctime_width/3,ctime_height/2,xlintime,ylintime,"black", ctime);
	rond(ctime_width/3,ctime_height/2,ctime_height/3,0,poslintime%(2*Math.PI),true,"#E81123",false, ctime);

	texte(ctime_width*5/8,ctime_height/2,"20px",((Math.abs(poslintime)/(2*Math.PI))-0.5).toFixed(0) +" secondes","#E81123", ctime);// J'enlève 0.5 car tiFixed arrondis

	poslintime += velocitetime;
}

var poslintime = 0;
var velocitetime = -2*Math.PI/80;
var xlintime = 0;
var ylintime = 0;

function animatecantime(){
	if(position == 5){
		setTimeout(function(){animatecantime()},25);
	}

	ctime.clearRect(0,0,ctime_width,ctime_height);

	xlintime = ctime_width/3+Math.cos(poslintime)*ctime_height/3;
	ylintime = ctime_height/2+Math.sin(poslintime)*ctime_height/3;

	contenttime();

}

animatecantime();
















var canvasfreq = document.getElementById('canfreq');
var cfreq = canvasfreq.getContext('2d');
var cfreq_width = canvasfreq.width;
var cfreq_height = canvasfreq.height;

var sliderfreq = document.getElementById("sliderfreq");


function contentfreq() {
	ligne(0,cfreq_height/2,cfreq_width,cfreq_height/2,"#eee", cfreq);
	ligne(cfreq_width/3,0,cfreq_width/3,cfreq_height,"#eee", cfreq);
	ligne((cfreq_width+cfreq_height)/3,0,(cfreq_width+cfreq_height)/3,cfreq_height,"#eee", cfreq);
	rond(cfreq_width/3,cfreq_height/2,cfreq_height/3,0,Math.PI*2,false,"#ccc",false, cfreq);

	ligne(cfreq_width/3,cfreq_height/2,xlinfreq,ylinfreq,"black", cfreq);
	rond(cfreq_width/3,cfreq_height/2,cfreq_height/3,0,poslinfreq%(2*Math.PI),true,"#E81123",false, cfreq);

	texte(cfreq_width*5/8,cfreq_height/2,"16px","Fréquence : 1/"+ sliderfreq + "Hz","#E81123", cfreq);

	poslinfreq += velocitefreq/sliderfreq;
}

sliderfreq.oninput = function() {
	sliderfreq = this.value;
} 


sliderfreq = 5;

var poslinfreq = 0;
var velocitefreq = -0.1;
var xlinfreq = 0;
var ylinfreq = 0;

function animatecanfreq(){

	if(position == 5){
		requestAnimationFrame(animatecanfreq);
	}

	cfreq.clearRect(0,0,cfreq_width,cfreq_height);

	xlinfreq = cfreq_width/3+Math.cos(poslinfreq)*cfreq_height/3;
	ylinfreq = cfreq_height/2+Math.sin(poslinfreq)*cfreq_height/3;

	xlintxfreq = cfreq_width/3+Math.cos(poslinfreq)*cfreq_height/3*1.3;
	ylintxfreq = cfreq_height/2+Math.sin(poslinfreq)*cfreq_height/3*1.3;

	xlintx2freq = cfreq_width/3+Math.cos(poslinfreq/2)*cfreq_height/3*1.05;
	ylintx2freq = cfreq_height/2+Math.sin(poslinfreq/2)*cfreq_height/3*1.05;

	contentfreq();

}

animatecanfreq();














var canvasinv = document.getElementById('caninv');
var cinv = canvasinv.getContext('2d');
var cinv_width = canvasinv.width;
var cinv_height = canvasinv.height;


function contentinv() {
	ligne(0,cinv_height/2,cinv_width,cinv_height/2,"#eee", cinv);
	ligne(cinv_width/3,0,cinv_width/3,cinv_height,"#eee", cinv);
	ligne((cinv_width+cinv_height)/3,0,(cinv_width+cinv_height)/3,cinv_height,"#eee", cinv);
	rond(cinv_width/3,cinv_height/2,cinv_height/3,0,Math.PI*2,false,"#ccc",false, cinv);

	ligne(cinv_width/3,cinv_height/2,xlininv,ylininv,"black", cinv);
	rond(cinv_width/3,cinv_height/2,cinv_height/3,0,poslininv%(2*Math.PI),false,"#E81123",false, cinv);

	texte(cinv_width*5/8,cinv_height/2,"20px","Sens négatif","#E81123", cinv);

	poslininv += velociteinv/inv;
}

inv = 5;

var poslininv = 0;
var velociteinv = 0.1;
var xlininv = 0;
var ylininv = 0;

function animatecaninv(){
	if(position == 5){
		requestAnimationFrame(animatecaninv);
	}

	cinv.clearRect(0,0,cinv_width,cinv_height);

	xlininv = cinv_width/3+Math.cos(poslininv)*cinv_height/3;
	ylininv = cinv_height/2+Math.sin(poslininv)*cinv_height/3;

	contentinv();

}

animatecaninv();













var canvasmult2 = document.getElementById('canmult2');
var cmult2 = canvasmult2.getContext('2d');
var cmult2_width = canvasmult2.width;
var cmult2_height = canvasmult2.height;

function enroulement(temps, image) {
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i])*(rayon))+cmult2_width/3;
		y1 = image[i]*(Math.sin(temps[i])*(rayon))+cmult2_height/2;
		x2 = image[i+1]*(Math.cos(temps[i+1])*(rayon))+cmult2_width/3;
		y2 = image[i+1]*(Math.sin(temps[i+1])*(rayon))+cmult2_height/2;

		ligne(x1,y1,x2,y2,"#E81123", cmult2);
	}
}

function contentmult2() {
	ligne(0,cmult2_height/2,cmult2_width,cmult2_height/2,"#bbb", cmult2);
	ligne(cmult2_width/3,0,cmult2_width/3,cmult2_height,"#bbb", cmult2);
	ligne(Vecteuri2[0],0,Vecteuri2[0],cmult2_height,"#eee", cmult2);
	rond(Origine2[0],Origine2[1],rayon,0,Math.PI*2,false,"#ccc",false, cmult2);
	texte(cmult2_width/4,cmult2_height*7/8,"15px","Enroulement une fois autour du cercle","#E81123", cmult2);
	texte(cmult2_width*5/8,cmult2_height/2,"15px","Fréquence: 1/2π","#E81123", cmult2);
}

var Origine2 = [cmult2_width/3, cmult2_height/2];

var Vecteuri2 = [cmult2_width/2, cmult2_height/2];

var rayon = Vecteuri2[0]-Origine2[0];

function animatecanmult2(temps, image){

	cmult2.clearRect(0,0,cmult2_width,cmult2_height);

	contentmult2();
	enroulement(temps, image);

}













var canvasmult = document.getElementById('canmult');
var cmult = canvasmult.getContext('2d');
var cmult_width = canvasmult.width;
var cmult_height = canvasmult.height;

var slidermultfreq = document.getElementById("slidermultfreq");
var slidermultamp = document.getElementById("slidermultamp");
var slidermultalt = document.getElementById("slidermultalt");

function trace(freq,amp) {

	if (freqsin <= 1) {
		precition = 20;
	}
	else{
		precition = 40;
	}
	var Result = ondepurer(freqsin,amp,precition,0,2*Math.PI,0, alt);
	var Interval = Result[0];
	var Images = Result[1];

	ligne(0,Origine[1],cmult_width,Origine[1],"#bbb", cmult);
	ligne(Origine[0],0,Origine[0],cmult_height,"#bbb", cmult);
	ligne(Vecteuri[0],0,Vecteuri[0],cmult_height,"#eee", cmult);
	ligne(0,Vecteurj[1],cmult_width,Vecteurj[1],"#eee", cmult);

	texte(Origine[0]+2,Origine[1]+10,"10px","0","black", cmult);
	texte(Vecteuri[0]+2,Origine[1]+10,"10px","1","black", cmult);
	texte(Origine[0]+2,Vecteurj[1]+10,"10px","1","black", cmult);
	texte(2,Origine[1]-10,"10px","temps(s)","black", cmult);
	texte(Origine[0]+2,10,"10px","pression(mPa)","black", cmult);

	for (var i = 0; i < Interval.length; i++) {
		var x1 = Origine[0]+(Interval[i])*(Vecteuri[0]-Origine[0]);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Origine[1]+(Images[i])*(Vecteuri[0]-Origine[0]);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Origine[0]+(Interval[i+1])*(Vecteuri[0]-Origine[0]);
		var y2 = Origine[1]+(Images[i+1])*(Vecteuri[0]-Origine[0]);
		ligne(x1,y1,x2,y2,"#E81123", cmult);
	}

	animatecanmult2(Interval,Images);

	texte(cmult_width/10,cmult_height/3,"20px",freqsin.toFixed(2) +"Hz","#E81123", cmult);
	texte(cmult_width/10,cmult_height*2/3,"20px",amp.toFixed(2) +"mPa","#E81123", cmult);
	texte(cmult_width/4,cmult_height*7/8,"15px","Temps total du signal : 2π secondes","#E81123", cmult);


}

var Origine = [cmult_width/3, cmult_height/2];

var Vecteuri = [cmult_width*5/12, cmult_height/2];

var Vecteurj = [cmult_width/3, Origine[1]+(Origine[0]-Vecteuri[0])]; // Repere orthonormé

precition = 20;
freqsin = 1;
amp = 1;
alt = 0;

slidermultfreq.oninput = function() {
	freqsin = this.value/500;
	animatecanmult();
}

slidermultamp.oninput = function() {
	amp = this.value/300;
	animatecanmult();
}

slidermultalt.oninput = function() {
	alt = this.value*Math.PI/180;
	animatecanmult();
}

function animatecanmult(){

	cmult.clearRect(0,0,cmult_width,cmult_height);

	trace(freqsin,amp);

}

animatecanmult();


















var canvasmoy = document.getElementById('canmoy');
var cmoy = canvasmoy.getContext('2d');
var cmoy_width = canvasmoy.width;
var cmoy_height = canvasmoy.height;

var slidermoy = document.getElementById("slidermoy");

function enroulementmoy(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = -image[i]*(Math.cos(temps[i]*freq)*(rayonmo))+Originemo[0];
		y1 = -image[i]*(Math.sin(temps[i]*freq)*(rayonmo))+Originemo[1];
		x2 = -image[i+1]*(Math.cos(temps[i+1]*freq)*(rayonmo))+Originemo[0];
		y2 = -image[i+1]*(Math.sin(temps[i+1]*freq)*(rayonmo))+Originemo[1];

		Xco += x1;
		Yco += y1;

		num++;

		ligne(x1,y1,x2,y2,"#E81123", cmoy);
	}

	MoyX = Xco/num;
	MoyY = Yco/num;

	rond(MoyX,MoyY,3,0,Math.PI*2,false,"rgb(70,162,250)",true, cmoy);
}

function contentmoy(freq) {
	ligne(0,Originemo[1],cmoy_width,Originemo[1],"#bbb", cmoy);
	ligne(Originemo[0],0,Originemo[0],cmoy_height,"#bbb", cmoy);
	ligne(Vecteurimo[0],0,Vecteurimo[0],cmoy_height,"#eee", cmoy);
	rond(Originemo[0],Originemo[1],rayonmo,0,Math.PI*2,false,"#ccc",false, cmoy);

	texte(cmoy_width/7,cmoy_height/6,"20px","Fréquence d'enroulement: "+ (freq/(2*Math.PI)).toFixed(2) +"Hz","#E81123", cmoy);
	texte(cmoy_width/5,cmoy_height*7/8,"20px","Centre de gravité de la figure","rgb(70,162,250)", cmoy);
	rond(cmoy_width/6,(cmoy_height*7/8)-5,3,0,Math.PI*2,false,"rgb(70,162,250)",true, cmoy);
}

slidermoy.oninput = function() {
	freqmoy = this.value/100;
	animatecanmoy(Resultmoy[0], Resultmoy[1], freqmoy);
	drawgraph(Resultgraph[0], Resultgraph[1], freqmoy/(2*Math.PI));
}

var Originemo = [cmoy_width/3, cmoy_height/2];

var Vecteurimo = [cmoy_width/2, cmoy_height/2];

var rayonmo = Vecteurimo[0]-Originemo[0];

function animatecanmoy(temps, image, freq){

	cmoy.clearRect(0,0,cmoy_width,cmoy_height);

	contentmoy(freq);
	enroulementmoy(temps, image, freq);

}

var Resultmoy = ondepure(1,-1,40,0,2*Math.PI,0);

animatecanmoy(Resultmoy[0], Resultmoy[1], 1);


















var canvasgraph = document.getElementById('cangraph');
var cgraph = canvasgraph.getContext('2d');
var cgraph_width = canvasgraph.width;
var cgraph_height = canvasgraph.height;

function enroulementgraph(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i]*freq)*(rayongr));
		y1 = image[i]*(Math.sin(temps[i]*freq)*(rayongr));
		x2 = image[i+1]*(Math.cos(temps[i+1]*freq)*(rayongr));
		y2 = image[i+1]*(Math.sin(temps[i+1]*freq)*(rayongr));

		Xco += x1;
		Yco += y1;

		num++;

	}

	graphX = Xco/num;
	graphY = Yco/num;

	return([graphX,graphY]);
}

function contentgraph(freq) {
	ligne(0,cgraph_height/2,cgraph_width,cgraph_height/2,"#bbb", cgraph);
	ligne(cgraph_width/3,0,cgraph_width/3,cgraph_height*4/5,"#bbb", cgraph);
	ligne(Vecteurig[0],0,Vecteurig[0],cgraph_height*4/5,"#eee", cgraph);

	texte(Origineg[0]+2,Origineg[1]+10,"10px","0","black", cgraph);
	texte(Vecteurig[0]+2,Origineg[1]+10,"10px","1","black", cgraph);
	texte(2,Origineg[1]-10,"10px","Fréquence(Hz)","black", cgraph);
	texte(Origine[0]-70,10,"10px","Coordonnée X","#00CC6A", cgraph);
	texte(Origine[0]+2,10,"10px","Coordonnée Y","rgb(70,162,250)", cgraph);
}

var loadgra = false;

var Origineg = [cgraph_width/3, cgraph_height/2];

var Vecteurig = [cgraph_width*2/3, cgraph_height/2];

var Vecteurjg = [cgraph_width/3, Origineg[1]+(Origineg[0]-Vecteurig[0])]; // Repere orthonormé

var rayongr = Vecteurig[0]-Origineg[0];

function drawgraph(temps, image, loc){

	cgraph.clearRect(0,cgraph_height*4/5,cgraph_width,cgraph_height);

	if(loadgra == false) {

		loadgra = true;
		
		contentgraph();

		var imagesx = [];
		var imagesy = [];
		for (var i = 0; i < 500; i++) {

			enr = enroulementgraph(temps, image, i/(50));
			enr1 = enroulementgraph(temps, image, (i+1)/(50));

			imagesx.push(enr[0]);
			imagesix1 = enr1[0];

			xx1 = (i*1.60*rayongr/500)+Origineg[0];//1.60 car (500/50)/2pi (la plus grande fréquence est de 1.6) (à cause de la lingueur de 2pi du signal)
			xy1 = imagesx[i]+Origineg[1];

			xx2 = (i*1.60*rayongr/500)+Origineg[0];
			xy2 = imagesix1+Origineg[1];


			ligne(xx1,xy1,xx2,xy2,"#00CC6A", cgraph);
			
			imagesy.push(enr[1]);
			imagesiy1 = enr1[1];

			yx1 = (i*1.60*rayongr/500)+Origineg[0];
			yy1 = imagesy[i]+Origineg[1];

			yx2 = (i*1.60*rayongr/500)+Origineg[0];
			yy2 = imagesiy1+Origineg[1];


			ligne(yx1,yy1,yx2,yy2,"rgb(70,162,250)", cgraph);
		
		}


	}

	xr1 = loc*rayongr+Origineg[0];
	xy1 = cgraph_height*5/6;

	ligne(xr1,xy1,xr1,xy1+10,"#E81123", cgraph);
	texte(xr1,xy1+20,"10px",loc.toFixed(2) +"Hz","#E81123", cgraph);


}

var Resultgraph = ondepure(1,1,40,0,2*Math.PI,0);

drawgraph(Resultgraph[0], Resultgraph[1], 0.16);


















var canvasaddconc = document.getElementById('canaddconc');
var caddconc = canvasaddconc.getContext('2d');
var caddconc_width = canvasaddconc.width;
var caddconc_height = canvasaddconc.height;

function enroulementaddconc(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i]*freq)*(rayonco));
		y1 = image[i]*(Math.sin(temps[i]*freq)*(rayonco));
		x2 = image[i+1]*(Math.cos(temps[i+1]*freq)*(rayonco));
		y2 = image[i+1]*(Math.sin(temps[i+1]*freq)*(rayonco));

		Xco += x1;
		Yco += y1;

		num++;

	}

	addconcX = Xco/num;
	addconcY = Yco/num;

	return([addconcX,addconcY]);
}

function contentaddconc(freq) {
	ligne(0,Originec[1],caddconc_width,Originec[1],"#bbb", caddconc);
	ligne(Originec[0],0,Originec[0],caddconc_height*4/5,"#bbb", caddconc);
	ligne(Vecteuric[0],0,Vecteuric[0],caddconc_height*4/5,"#eee", caddconc);
	ligne(Vecteuric[0]+rayonco,0,Vecteuric[0]+rayonco,caddconc_height*4/5,"#eee", caddconc);
	ligne(Vecteuric[0]+2*rayonco,0,Vecteuric[0]+2*rayonco,caddconc_height*4/5,"#eee", caddconc);
	ligne(Vecteuric[0]+3*rayonco,0,Vecteuric[0]+3*rayonco,caddconc_height*4/5,"#eee", caddconc);
	ligne(Vecteuric[0]+4*rayonco,0,Vecteuric[0]+4*rayonco,caddconc_height*4/5,"#eee", caddconc);

	texte(Originec[0]+2,Originec[1]+10,"10px","0","black", caddconc);
	texte(Vecteuric[0]+2,Originec[1]+10,"10px","1","black", caddconc);
	texte(2,Originec[1]-10,"10px","Fréquence(Hz)","black", caddconc);
	texte(Originec[0]-70,10,"10px","Coordonnée X","#00CC6A", caddconc);
	texte(Originec[0]+2,10,"10px","Coordonnée Y","rgb(70,162,250)", caddconc);
}

var loadconc = false;

var Originec = [caddconc_width/4, caddconc_height/2];

var Vecteuric = [caddconc_width*15/40, caddconc_height/2];

var Vecteurjc = [caddconc_width/3, Originec[1]+(Originec[0]-Vecteuric[0])]; // Repere orthonormé

var rayonco = Vecteuric[0]-Originec[0];

function drawaddconc(temps, image, loc,on){

	if (on == true) {
		caddconc.clearRect(0,0,caddconc_width,caddconc_height);
		loadconc = false;
	}
	else{
		caddconc.clearRect(0,caddconc_height*4/5,caddconc_width,caddconc_height);
	}

	if(loadconc == false) {

		loadconc = true;
		
		contentaddconc();

		var imagesx = [];
		var imagesy = [];
		for (var i = 0; i < 1870; i++) {

			enr = enroulementaddconc(temps, image, i/(50));
			enr1 = enroulementaddconc(temps, image, (i+1)/(50));

			imagesx.push(enr[0]);
			imagesix1 = enr1[0];

			xx1 = (i*1.60*rayonco/500)+Originec[0];
			xy1 = imagesx[i]*1.5+Originec[1];

			xx2 = (i*1.60*rayonco/500)+Originec[0];
			xy2 = imagesix1*1.5+Originec[1];


			ligne(xx1,xy1,xx2,xy2,"#00CC6A", caddconc);
			
			imagesy.push(enr[1]);
			imagesiy1 = enr1[1];

			yx1 = (i*1.60*rayonco/500)+Originec[0];
			yy1 = imagesy[i]*1.5+Originec[1];

			yx2 = (i*1.60*rayonco/500)+Originec[0];
			yy2 = imagesiy1*1.5+Originec[1];


			ligne(yx1,yy1,yx2,yy2,"rgb(70,162,250)", caddconc);
		
		}


	}

	loc = (loc/(2*Math.PI));

	xr1 = loc*rayonco+Originec[0];
	xy1 = caddconc_height*5/6;

	ligne(xr1,xy1,xr1,xy1+10,"#E81123", caddconc);
	texte(xr1,xy1+20,"10px",loc.toFixed(2) +"Hz","#E81123", caddconc);


}

























var canvasaddenr = document.getElementById('canaddenr');
var caddenr = canvasaddenr.getContext('2d');
var caddenr_width = canvasaddenr.width;
var caddenr_height = canvasaddenr.height;

var slideraddenr = document.getElementById("slideraddenr");

function enroulementaddenr(temps, image, freq) {
	Xco = 0;
	Yco = 0;
	num = 0;
	for (var i = 0; i < temps.length; i++) {
		x1 = image[i]*(Math.cos(temps[i]*freq)*(rayonmo))+Origine2[0];
		y1 = image[i]*(Math.sin(temps[i]*freq)*(rayonmo))+Origine2[1];
		x2 = image[i+1]*(Math.cos(temps[i+1]*freq)*(rayonmo))+Origine2[0];
		y2 = image[i+1]*(Math.sin(temps[i+1]*freq)*(rayonmo))+Origine2[1];

		Xco += x1;
		Yco += y1;

		num++;

		ligne(x1,y1,x2,y2,"#E81123", caddenr);
	}

	addenrX = Xco/num;
	addenrY = Yco/num;

	rond(addenrX,addenrY,3,0,Math.PI*2,false,"rgb(70,162,250)",true, caddenr);
}

function contentaddenr(freq) {
	ligne(0,Originemo[1],caddenr_width,Originemo[1],"#bbb", caddenr);
	ligne(Originemo[0],0,Originemo[0],caddenr_height,"#bbb", caddenr);
	ligne(Vecteurimo[0],0,Vecteurimo[0],caddenr_height,"#eee", caddenr);
	rond(Originemo[0],Originemo[1],rayonmo,0,Math.PI*2,false,"#ccc",false, caddenr);

	texte(caddenr_width*4/5,caddenr_height/3,"20px",(freq/(2*Math.PI)).toFixed(2) +"Hz","#E81123", caddenr);
	texte(caddenr_width/5,caddenr_height*7/8,"20px","Centre de gravité de la figure","rgb(70,162,250)", caddenr);
	rond(caddenr_width/6,(caddenr_height*7/8)-5,3,0,Math.PI*2,false,"rgb(70,162,250)",true, caddenr);
}

slideraddenr.oninput = function() {
	freqaddenr = this.value/30;
	animatecanadd(freqaddenr);
}

var freqaddenr = 1;

var Originemo = [caddenr_width/3, caddenr_height/2];

var Vecteurimo = [caddenr_width/2, caddenr_height/2];

var rayonmo = Vecteurimo[0]-Originemo[0];

function animatecanaddenr(temps, image, freq){

	caddenr.clearRect(0,0,caddenr_width,caddenr_height);

	contentaddenr(freq);
	enroulementaddenr(temps, image, freq);

}
















var canvasadd = document.getElementById('canadd');
var cadd = canvasadd.getContext('2d');
var cadd_width = canvasadd.width;
var cadd_height = canvasadd.height;

var hzselect = document.getElementById("hzselect");
var hzselect2 = document.getElementById("hzselect2");

function traceadd(amp,precition,freq1,freq2,freq, animconc) {

	var Result1 = ondepure(freq1,amp,precition,0,2*Math.PI,0);
	var Result2 = ondepure(freq2,amp,precition,0,2*Math.PI,0);
	var Interval1 = Result1[0];
	var Images1 = Result1[1];
	var Interval2 = Result2[0];
	var Images2 = Result2[1];

	var Result = addimg(Interval1,Images1,Interval2,Images2);

	var Interval = Result[0];
	var Images = Result[1];

	ligne(0,Origineadd[1],cadd_width,Origineadd[1],"#bbb", cadd);
	ligne(Origineadd[0],0,Origineadd[0],cadd_height,"#bbb", cadd);
	ligne(Vecteuriadd[0],0,Vecteuriadd[0],cadd_height,"#eee", cadd);
	ligne(0,Vecteurjadd[1],cadd_width,Vecteurjadd[1],"#eee", cadd);

	texte(Origineadd[0]+2,Origineadd[1]+10,"10px","0","black", cadd);
	texte(Vecteuriadd[0]+2,Origineadd[1]+10,"10px","1","black", cadd);
	texte(Origineadd[0]+2,Vecteurjadd[1]+10,"10px","1","black", cadd);
	texte(2,Origineadd[1]-10,"10px","temps(s)","black", cadd);
	texte(Origineadd[0]+2,10,"10px","pression(mPa)","black", cadd);

	for (var i = 0; i < Interval.length; i++) {
		var x1 = Origineadd[0]+(Interval[i])*(rayonadd);// Il faut scaler le signal pour qu'il s'adapte au repere
		var y1 = Origineadd[1]+(Images[i])*(rayonadd);// On scale le signal selon notre repère(...*(...)) puis on le déplace(...+(...)) pour qu'il atterisse sur le repère
		var x2 = Origineadd[0]+(Interval[i+1])*(rayonadd);
		var y2 = Origineadd[1]+(Images[i+1])*(rayonadd);

		ligne(x1,y1,x2,y2,"#E81123", cadd);
	}

	animatecanaddenr(Interval,Images,freq);

	drawaddconc(Interval,Images,freq,animconc);

}

val1 = 1;
val2 = 2.3;

var Origineadd = [cadd_width/3, cadd_height/2];

var Vecteuriadd = [cadd_width*5/12, cadd_height/2];

var Vecteurjadd = [cadd_width/3, Origineadd[1]+(Origineadd[0]-Vecteuriadd[0])]; // Repere orthonormé

var rayonadd = Vecteuriadd[0]-Origineadd[0];

precition = 30;
ampconc = 1;

function animatecanadd(freq, animconc){

	cadd.clearRect(0,0,cadd_width,cadd_height);

	traceadd(ampconc,precition,val1,val2,freq, animconc);

}

animatecanadd(1, true);