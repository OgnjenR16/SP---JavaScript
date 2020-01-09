function JSkvizb(){
		

	var prvoPitanje = document.kviz.prvoPitanje.value.toUpperCase();
	var drugoPitanje = document.kviz.drugoPitanje.value;
	var trecePitanje = document.kviz.trecePitanje.value;
	var cetvrtoPitanje = document.kviz.cetvrtoPitanje.value;
	var tacno = 0;


		if (prvoPitanje == "BILBO BAGINS" || prvoPitanje == "BILBO" || prvoPitanje == "BAGINS") {	
		tacno++;
			}
		if (drugoPitanje == "Dostojevski") {
		tacno++;
			}	
		if (trecePitanje == "Gavran") {
		tacno++;
			}
		if (cetvrtoPitanje == 1954) {
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