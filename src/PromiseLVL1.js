/* une promesse est une valeur qui ne s'initialise pas
tout de suite mais en paralelle d'autre valeur ou qui
prends plus de temps*/

const firstname = 'John'; //String
const firstname2 = new Promise((resolve, reject)=>{ // type Promise
    resolve('Jade')
})
console.log(firstname);
firstname2.then((name)=>console.log(name))