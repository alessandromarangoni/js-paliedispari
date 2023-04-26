const parola = prompt("inserisci")
// let parolaDivisa = parola.split('');
// let parolaReverse = parolaDivisa.reverse('');
// let parolaRiunita = parolaReverse.join('');

var parolaReverse = invertiParola(parola);
if(parola == parolaReverse){
    alert("è palindroma");
}
    else {
        alert("Non è palindroma");
    }

function invertiParola(parolaDainvertire){
    // let parolaReverse = parola.split('').reverse(); 
    // let parolaRiunita = parolaReverse.join('');
    let parolaReverse='';

    for (let i = parolaDainvertire.length-1; i >= 0; i--) {
        const carattere = parolaDainvertire[i]
        parolaReverse += carattere;
    }

    return parolaReverse;
}

/////////////pari dispari///////////

let pariODispari = prompt("scrivi qui pari o dispari");
// controllo che siano inseriti o pari o dispari 
if(pariODispari !== 'pari' | 'dispari' ){alert("inserisci o PARI o DISPARI");}

let num1 = parseInt(Math.random()*5)+1;
let inserisciNumero = parseInt(prompt("inserisci numero da 1 a 5"));
let numSomm = funzione1(num1, inserisciNumero);

function funzione1(){
    return num1 + inserisciNumero;
}

let esito = funzione2(numSomm);

function funzione2(numero){
    if (numSomm % 2 == 0 ){
        return "pari"
    }
    return "dispari"
}

if(esito == pariODispari){
    alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI VINTO `)
}
else{
    alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI PERSO `)
}

// if (inserisciNumero > 5 | inserisciNumero < 1)
//     { 
//         alert("inserisci un numero da 1 a 5");
//     }

//     else{
//     ispariOrNot = ""
//     if (numSomm % 2 == 0){
//         var ispari = "pari"
//         if(pariODispari == ispari){
//             console.log("hai vinto")
//             alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI VINTO `)
//         }
//         else{console.log("hai perso")
//             alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI PERSO`)
//         }
//     }

//     if (numSomm % 2 == 1){
//         var ispariOrNot = "dispari"
//         if(pariODispari == ispari){
//             console.log("hai vinto")
//             alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI VINTO `)
//         }
//         else{console.log("haiperso")
//             alert(`hai scelto ${pariODispari} il numero del banco è ${num1} il tuo è ${inserisciNumero} HAI PERSO`)
//         }
//     }}
