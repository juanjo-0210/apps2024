const nombres = ["juan", "roberto","Ernesto","miriam","laura"]

nombres.forEach(nombre => console.log(`Conozco a alguien llamado ${nombre}`));

const numbers = [1,9,3,8,5,7]

numbers.forEach(number => console.log(number*2));


//---------------------------------------------
const array = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

let numPos = 0
let numNeg = 0
let numCer = 0
array.forEach(number => {
    console.log(number)
    if (number>0) {
        numPos += 1
    }else if(number===0) {
        numCer += 1     
    }else{
        numNeg += 1
    }
});

console.log(numPos)
console.log(numNeg)
console.log(numCer)

//-------------------
let aux1 = 0
let aux2 = 0
let numPos1 = 0
let numNeg1 = 0
array.forEach(number => {
    console.log(number)
    if (number>0) {
        aux1 += 1
        numPos1 += number
    }else {
        aux2 += 1
        numNeg1 += number    
    }
});
console.log(numPos1/aux1)
console.log(numNeg1/aux2)


//--------------------------------

