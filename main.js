const parola = prompt("inserisci")
// let parolaDivisa = parola.split('');
// let parolaReverse = parolaDivisa.reverse('');
// let parolaRiunita = parolaReverse.join('');

var parolaInversa = invertiParola(parola);
var risultato = false;
if(parola == parolaInversa){
    alert("è palindroma");
    risultato = true;
}
    else {
        alert("Non è palindroma");
    }

function invertiParola(parola){
    let parolaReverse = parola.split('').reverse(); 
    let parolaRiunita = parolaReverse.join('');
    return parolaRiunita;
}

/////////////pari dispari///////////

pariODispari = prompt("scrivi qui pari o dispari");
// controllo che siano inseriti o pari o dispari 
if(pariODispari !== 'pari' | 'dispari' ){alert("inserisci o PARI o DISPARI");}

let num1 = parseInt(Math.random()*5)+1;
let inserisciNumero = parseInt(prompt("inserisci numero da 1 a 5"));
let numSomm= num1 + inserisciNumero;

if (inserisciNumero > 5 | inserisciNumero < 1)
    { 
        alert("inserisci un numero da 1 a 5");
    }

    else{
    let ispariOrNot = ""
    if (numSomm % 2 == 0){
        var ispari = "pari"
        if(pariODispari == ispari){
            console.log("hai vinto")
            alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI VINTO `)
        }
        else{console.log("hai perso")
            alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI PERSO`)
        }
    }

    if (numSomm % 2 == 1){
        var ispariOrNot = "dispari"
        if(pariODispari == ispari){
            console.log("hai vinto")
            alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI VINTO `)
        }
        else{console.log("haiperso")
            alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI PERSO`)
        }
    }}
