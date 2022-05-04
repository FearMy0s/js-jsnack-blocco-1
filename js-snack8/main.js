const Numeri = [1,2,3,4,5,6,7,8,9,10]
let somma = 0;
for(let i = 0; i<Numeri.length;i++){
    if(Numeri[i]%2==1){
        somma += Numeri[i];
    }
}
console.log(somma)