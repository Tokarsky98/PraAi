var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikaty');

elKomunikat.style.color = 'red';

//onload -> pierwsze zdarzenie

/*window.onload = function(){
    alert('4te');
}*/

/*elImie.onblur = function(){
    if (elImie.value.length > 2 && elImie.value.length < 10){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędne dane';
    }
}*/

/*function sprawdz(){
     if (elImie.value.length > 2 && elImie.value.length < 10){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędne dane';
    }
}

elImie.addEventListener('blur',sprawdz);*/



// co to this? funkcja do kazdego kolejnego pola
function sprawdz(){
     if (this.value.length > 2 && this.value.length < 10){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędne dane';
        this.focus();
    }
}

function mail(){
    if (elMail1.value != elMail2.value){
        elKomunikat.textContent = 'Adresy mail są różne';
        elMail2.focus();

    }else{
        this.disabled=true;
        elKomunikat.textContent = ''; //jeśli ok to mam blokadę tych 2 pól i pusty komunikat.


    }
}

function blokuj(){
    elMail2.disabled = false; //drugie pole nie zablokowane
    this.disabled = true; //cos tam na drugim sie zatrzymuje do poprawienia.
    elMail2.focus();
}


function haslo(){
    if (elPass1.value != elPass2.value){
        elKomunikat.textContent = 'Hasła są rózne';
        elPass2.focus();
    }else {
        this.disabled=true;
        elKomunikat.textContent='';
    }
}


function blokuj2(){
    elPass2.disabled = false;
    this.disabled = true;
    elPass2.focus();
}

function sprawdzRegulamin(){
    if(elRegulamin.checked){
        elPrzycisk.disabled = false;
    }else {
        elPrzycisk.disabled = true;
    }

}

function odblokuj(){
    var zablokowane = document.getElementsByTagName('input');
    if (zablokowane.length > 0){
        for (var i=0;i<zablokowane.length;i++){
            if(zablokowane[i].disabled == true)
                zablokowane[i].disabled = false;

        }
        //console.log(zablokowane);
    }
}

/*
function wyslij(){
    document.write('<div>');
    document.write('Imię: '+ elImie.value+'<br>');
    document.write('Nazwisko: '+ elNazwisko.value+'<br>');
    document.write('Login: '+ elLogin.value+'<br>');
    document.write('Mail: '+ elMail1.value+'<br>');
    document.write('Data Urodzenia: '+ elData.value+'<br>');
    document.write('</div>');
}
*/

//To co wyzej + jak puste pole to pojawia sie komunikat 'Masz puste pole'.

function wyslij1(){
    var puste =0;
    var x = document.getElementsByTagName('input');
    for (var i=0;i<x.length;i++){
        if (x[i].value=='')
            puste++;
    }

    if (puste){
        elKomunikat.textContent = 'Masz puste pole';
    }
    else{

    document.write('<div>');
    document.write('Imię: '+ elImie.value+'<br>');
    document.write('Nazwisko: '+ elNazwisko.value+'<br>');
    document.write('Login: '+ elLogin.value+'<br>');
    document.write('Mail: '+ elMail1.value+'<br>');
    document.write('Data Urodzenia: '+ elData.value+'<br>');
    document.write('</div>');

    }
}


elImie.addEventListener('blur',sprawdz);
elNazwisko.addEventListener('blur',sprawdz);
elLogin.addEventListener('blur',sprawdz);
elMail2.addEventListener('blur',mail);
elMail1.addEventListener('blur',blokuj);
elPass2.addEventListener('blur',haslo);
elPass1.addEventListener('blur',blokuj2);
elRegulamin.addEventListener('change',sprawdzRegulamin);
elPopraw.addEventListener('click',odblokuj);
elPrzycisk.addEventListener('click',wyslij1);











//dokończ hasło.
//stwórz formularz z polem tekstowym ze znakami od 5-10 w imieniu nazwisko i loginie. Potem masz 2 maile które musza do siebie pasować. Wykorzystaj blokowanie pól. Hasło to samo.







































