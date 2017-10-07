//Zadanie dom
//Zmień metodę wyświetl z konstruktora hotel, zastosuj tablicę do wyświetlania wartości

function Hotel(nazwa, pokoje, zarezerwowanePokoje, silownia, basen, rodzajPokoju) {

this.tablica = [];
this.tablica[0] = nazwa;
this.tablica[1] = pokoje;
this.tablica[2] = zarezerwowanePokoje;
this.tablica[3] = silownia;
this.tablica[4] = basen;
this.tablica[5] = rodzajPokoju;
this.tablica[6] = this.tablica[1] - this.tablica[2];

this.wyswietl = function() {
 return this.tablica;
}
}

var HotelLech = new Hotel('Lech',100,30,true,false,['jednoosobowy','apartament']);

document.write(HotelLech.wyswietl());




