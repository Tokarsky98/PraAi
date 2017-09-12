var text = 'ZSK - Zespół Szkół Komunikacji';
console.log(text.length); //30

var pierwszy = text.charAt();
console.log(pierwszy); //Z

var ostatni = text.charAt(text.length - 1);
console.log(ostatni);

document.write(text.charAt(11)); //ł

//ASCII
document.write(text.charCodeAt(0)); //Litera Z = 90
document.write(text.charCodeAt(14)); //Litera z = 122

//Zamiana na duże litery
var duze = text.toUpperCase();
console.log(duze);
//Zmiana na małe litery
var male = text.toLowerCase();
console.log(male);
//camelCase - zapis zmiannej zua=mala=duza=mala litera
//Pierwsza duża
var duzeMale = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzeMale);
 
//Użytkownik wprowadza z klawiatury swoje imię, zamień pierwszy znak na duża literę a pozostałe na małe. Wyświetl wszystko w naglówku drugiego stopnia w kolorze niebieskim.


/*var imie = prompt("podaj swoje imię: ");
var dane = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
console.log(dane);
dane.innerHTML = imie;
document.getElementById("a").innerHTML = dane; */

//Wyswietl tekst bez pierwszego i sotatniego znaku
console.log(text.substr(1,text.length - 2));











