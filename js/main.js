const name1 = prompt("inserisci primo nome");
const name2 = prompt ("inserisci secondo nome");
if(name1.length > name2.length){
    console.log(name1);
}else if (name1.length === name2.length){
    console.log("i nomi sono uguali");
}
else{
    console.log(name2);
}