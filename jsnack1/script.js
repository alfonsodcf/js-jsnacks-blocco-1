// const listaInvitati = ['Francesco', 'Matteo', 'Pietro', 'Giovanna'];
// let numeUtente = prompt("Come ti chiami ?");
// let verifica = false;

// let index = 0;

// while ( checkuser && index < listaInvitati.length){
    
//     if(numeUtente === listaInvitati[index]) {
//         document.writeln('Benvenuto alla festa!')
//     }
//     index++;
// }

//con il while non mi funziona uso il for 



const Invitati = ['Francesco', 'Matteo', 'Pietro', 'Giovanna'];

let numeUtente = prompt('Come ti chiami ?');
const contenitore = document.getElementById("contenitore");
let trovata = false;

for (let i = 0; i < Invitati.length; i++){
   
    if(Invitati[i] === numeUtente ){
        trovata = true;
        
    } 
}

if(trovata){
    contenitore.innerHTML = `Benvenuto alla festa!`;
    
} else{
    contenitore.innerHTML = `Non puoi entrare`;
    
}