const Nomi = ['Andrea', 'Giovanni', 'Alessandro',`Antonio`, `Alex`];
const Cognomi = ['Di Fraia', 'De Antonio', 'Del Monaco',`Galli`,`Giannetta`];

let Lista = [];
for (let i = 0; i < Nomi.length; i++) {
    const ArNomi = Math.floor(Math.random() * Nomi.length);
    const ArCognomi = Math.floor(Math.random() * Cognomi.length);
    Lista.push(`${Nomi[ArNomi]} ${Cognomi[ArCognomi]}`);
}
console.log(Lista);