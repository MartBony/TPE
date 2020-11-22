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


function ondepure(freq, amp, precition, deb, fin, dec, phase = 0){ //y=A × sin (ωt) avec f en hertz, ω=2πf, A est l'amplitude, deb et fin entiers en sec

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

export { carre, ligne, rond, texte, ondepure };