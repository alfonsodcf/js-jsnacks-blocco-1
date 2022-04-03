// JSnack 2
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let numeriDispari = [];
const contenitore = document.getElementById("contenitore");

for (let i = 0; i < 6; i++){
    let numeroInserto = parseInt(prompt('Inserisci un numero'));

    if(numeroInserto % 2 !== 0) {
        numeriDispari.push(numeroInserto);
    }
    
    console.log(numeriDispari)
}
console.log(numeriDispari)

contenitore.innerHTML = numeriDispari; 