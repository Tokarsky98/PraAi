//Tworzenie obiektu za pomocą literału obiektu

//var janusz = {}; //obiekt pusty
var janusz = {
    wzrost: 180,
    waga: 80,
    miejsceUrodzenia: 'Poznań',
    plec: 'm'
};

//console.log(janusz.wzrost); //tak sie wypisuje do konsoli to co tam chcesz

var auto = {
  marka: 'Porsche',
  model: 'Panamera',
  predkosc: 220,
  wyswietl(){
      //document.write('Marka: '+ this.marka);
      return 'Marka: ' + this.marka;
  }
};

//auto.wyswietl(); // 2 metody na wyświetlenie jedna w komentarzu
//document.write(auto.wyswietl());

//********************************************************************

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydania: 1834,
    gatunek: 'poemat epicki',
    autor: {
        imie: 'Adam',
        nazwisko: 'Mickiewicz',
        wyswietlDane(){
            return 'Imię: '+ this.imie + '<br>Nazwisko: ' + this.nazwisko;
        }
    }

};

//console.log(ksiazka.autor.imie); //1 sposób
//console.log(ksiazka['autor']['imie']); // 2 sposób
//console.log(ksiazka.autor['imie']); // 3 sposób

//var klucz = 'nazwisko';
//console.log(ksiazka.auto[klucz]); // 4 sposób XDD

//console.log(ksiazka.autor.wyswietlDane()); //Imię: Adam<br>Nazwisko: Mickiewicz
//document.write(ksiazka.autor.wyswietlDane());

//********************************************************************

var produkt = {};
/*
console.log(produkt.nazwa); //undefined
console.log(typeof(produkt.nazwa)); //undefined
*/

produkt.nazwa = 'pralka';
produkt.model = 'WAK2024PI';
produkt.firma = 'Bosch';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function(){
    return 'Nazwa: ' + this.nazwa + 'Model: ' + this.model + 'Cena: ' + this.cena;

}
console.log(typeof(produkt.nazwa)); //string
console.log(typeof(produkt.waga)); //number
console.log(typeof(produkt.wyswietl)); //function

//******************************************************************

//Konstruktor Object

//var tablica = new Array();

var hotel = new Object();

hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 50;
hotel.zarezerwowanePokoje = 35;
hotel.silowania = true;
hotel.basen = true;
hotel.rodzajPokoju = ['Pojedyncze','Podwójne','Apartament'];
hotel.wolnePokoje = function(){
    return this.pokoje - this.zarezerwowanePokoje;
}
console.log('Wolne Pokoje: ' + hotel.wolnePokoje());

//*********************************************************************

function Hotel(nazwa, pokoje, zarezerwowanePokoje, silownia, basen, rodzajPokoju) {

this.nazwa = nazwa;
this.pokoje = pokoje;
this.pokojeZarezerwowane = zarezerwowanePokoje;
this.silownia = silownia;
this.basen = basen;
this.rodzajPokoju = rodzajPokoju;
this.wolnePokoje = function() {
    return this.pokoje - this.pokojeZarezerwowane;
}
this.wyswietl = function() {
    return 'Nazwa: ' + this.nazwa + '<br>Liczba pokoi: ' + this.pokoje + '<br>Pokoje zarezerwowane: ' + this.pokojeZarezerwowane + '<br>Siłownia: ' + this.silownia + '<br>Basen: ' + this.basen + '<br>Rodzaje pokojów: ' + this.rodzajPokoju + '<br>Wolne pokoje: ' + this.wolnePokoje();
}
}

var HotelLech = new Hotel('Lech',100,30,true,false,['jednoosobowy','apartament']);

document.write(HotelLech.wyswietl());

//***************************************************************
/*function Osoba(imie,nazwisko,wiek,plec){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.plec = plec;
}

var czarek = new osoba('Czarek','Kowal',19,'M');
document.write(czarek.imie);*/

//UTWORZ KONSTRUKTOR O NAZWIEK PIES,IMIE,RASA,WAGA ORAZ ULUBIONE ZAJĘCIA, W ULUBIONYCH ZAJECIACH MOŻE BYĆ WIELE WARTOŚCI, UTWÓRZ 3 OBIEKTY O NAZWACH AZOR EDI SABA.


function pies(imie,rasa,waga,ulubioneZajecia){
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulubioneZajecia = ulubioneZajecia;
}

var azor = new pies('Azor','Owczarek Niemiecki',30,['jedzenie','spanie']);
var edi = new pies('Edi','Sznaucer',20,['jedzenie','lezenie']);
var saba = new pies('Saba','Jamnik',10,['spanie','jedzenie']);

document.write(edi.ulubioneZajecia); //tak dla przykładu co wyciągam z niego

var psy = [azor,edi,saba];

edi.ulubioneZajecia.push('spacer'); // dodaję spacer do ulubionych zajęć ediego

var rozmiar = 'Mały pies';

for (var i=0;i<psy.length;i++){
    if(psy[i].waga<10){
        psy[i].rozmiar = ' duży pies';
    }else{
        psy[i].rozmiar = ' mały pies';
    }
    document.write('<br>'+'Pies: ' + '<span style="color:blue">'+ psy[i].imie + '</span>' + psy[i].rozmiar + '<br>');
}

/*var tab = ['jan','nowak','Poznań'];
for (var i in tab){
    //document.write(i); // indeksy 012
    document.write(i+ "-"+tab[i]+'<br>');
}

for (var x in edi){
    if(x=='imie' || x=='rasa'){
        document.write(edi[x]);
    }
}*/

function Pole(a,b){
    return a*b;
}
console.log(Pole.length); //2 BŁAGAM, ile parametrów ma konstruktor pole

console.log(Pole.constructor); // czy utworzyliśmy konstruktor pole, utworzony za pomocą funkcji

console.log(Pole.prototype); // jest nim object

//**********************************************************

function Uczen(imie,nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var janusz = new Uczen('Maciej','Nowak');
Uczen.prototype.narodowosc = 'polska';
Uczen.prototype.wyswietl = function() {
    return "imie: " +this.imie +',nazwisko'+this.nazwisko+',narodowość:'+this.narodowosc;

}
document.write(janusz.wyswietl());
document.write(janusz.constructor.prototype.narodowosc);// zwraca wartość dla prototypu narodowosc

//************************************************************

/*Utwórz konstruktor rower, który ma dwa parametry: nazwa oraz kolor. Utwórz prototyp ilosckol, który ma wartość 2. Utwórz metodę wyświetlającą wszystkie dane za pomocą for in prototyp wyświetlający wszystkie dane za pomocą for in.*/


function rower(nazwa,kolor){
    this.nazwa = nazwa;
    this.kolor = kolor;
}

var cos = new rower('Składak','Czerwony');
rower.prototype.ilosckol = 2;
rower.prototype.wyswietl = function(){
    return "nazwa: " + this.nazwa + " ,ilość kół: "  + this.ilosckol + " ,kolor: " + this.kolor;

}
document.write(cos.wyswietl()); //nie wiem XD


console.log(janusz.hasOwnProperty('narodowość1')); //sprawdzimy czy ta metoda jest w tym obiekcie

if (typeof(this[i]!='function'));
