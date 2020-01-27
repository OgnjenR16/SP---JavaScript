	
	var prviBroj= Math.floor(Math.random()*20) + 1;
	var drugiBroj= Math.floor(Math.random()*20) + 1;
	var treciBroj= Math.floor(Math.random()*20) + 1;
	var cetvrtiBroj= Math.floor(Math.random()*20) + 1;
	var pp= Math.floor(Math.random()*10) + 1;
	


function JSkvizm(){

	var prviZadatak = document.kviz.prviZadatak.value;
	var drugiZadatak = document.kviz.drugiZadatak.value;
	var treciZadatak = document.kviz.treciZadatak.value;
	var cetvrtiZadatak = document.kviz.cetvrtiZadatak.value;
	var tacno = 0;

	if(prviZadatak == prviBroj+treciBroj-drugiBroj){
		tacno++;
		}
	if(drugiZadatak == treciBroj*(cetvrtiBroj-prviBroj)+12){
		tacno++;
		}
	if(treciZadatak == (9/3)*(drugiBroj*drugiBroj-treciBroj)){
		tacno++;
		}
	if(cetvrtiZadatak == (2*pp*3.14)){
		tacno++;
		}	
 	
	var poruka = ["Одлично!", "Врло добро.", "Фино, може боље", "Слабо, слабо...", "Ништа, следећи пута мора боље"];
	var rez;

			if (tacno == 0) {
			rez = 4;
			}
			if (tacno == 1) {
			rez =3;
			}
			if (tacno == 2){
			rez = 2;
			}
			if (tacno == 3) {
			rez = 1;
			}
			if (tacno == 4) {
			rez = 0;
			}



	document.getElementById("rezultatKviza").style.visibility = "visible";
	document.getElementById("poruka").innerHTML = poruka[rez];
	document.getElementById("tacniOdgovori").innerHTML = "Имали сте " + tacno + " тачна одговора.";
}

	function ponovoIsto(){

	window.location.reload(true);
	}