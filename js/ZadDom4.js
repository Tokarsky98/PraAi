//ZAD DOM
//Przy haśle wyświetl czy hasło jest słabe, dobre czy silne. Wyświetlenie ma być obrazkiem. Kolor zielony - silne hasło, Kolor pomarańczowy - dobre hasło, czerwone - słabe hasło.

//Słabe hasło to male litery
//Średnie hasło male duże cyfry
//Silne haslo male duze cyfry znak ?


var elHaslo = document.getElementById("haslo");
var elObrazek = document.getElementById("obrazek");


var regSlabe = /^[a-z]{3,10}$/;
var regSrednie = /^[A-z0-9]{3,10}$/;
var regMocne = /^[A-z\?]{3,10}|[A-z0-9/?]{3,10}$/;

function Haslo(){
    if (regSlabe.test(elHaslo.value)){
        elObrazek.setAttribute('src','Czerwony.png');
    }else if(regSrednie.test(elHaslo.value)){
        elObrazek.setAttribute('src','Pomaranczowy.png');
    }else if(regMocne.test(elHaslo.value)){
        elObrazek.setAttribute('src','Zielony.png');
    }else if (elHaslo.value == ""){
        elObrazek.setAttribute('src','WpiszHaslo.png');
    }else{
        elObrazek.setAttribute('src','Niezgodne.png');

    }
}

elHaslo.addEventListener('input',Haslo);

