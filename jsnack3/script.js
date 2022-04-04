let numUser = prompt('inserisci un numero di 4 cifre');
let contaNum

if(numUser.length == 4){
    console.log(nomUser + " - " + numUser.length);

    contaNum = numUser.split("")
    console.log(contaNum);
    let somma = 0;
    let index = 0;

    while (index < contaNum.length){
        console.log('index: ', index)
        console.log('conta numero: ', contaNum[index]);
        console.log('somma: ', somma)
        somma += parseInt(contaNum[index]);
        index++
    }

}else{
    alert("inserimento non coretto")
}