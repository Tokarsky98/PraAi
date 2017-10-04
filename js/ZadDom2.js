var elLogin = document.getElementById('login');
var elHaslo = document.getElementById('haslo');
var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function() {
    if(elLogin.value == 'filip' && elHaslo.value == 'Okoń@1234'){
        document.getElementById('wynik').style.color = 'red';
        document.getElementById('wynik').textContent = elHaslo.value;
    }

    else if(elHaslo.value != 'Okoń@1234'){
        document.getElementById('wynik').style.color = 'green';
        document.getElementById('wynik').textContent = 'Błędne hasło: ' + elHaslo.value;
    }
}
