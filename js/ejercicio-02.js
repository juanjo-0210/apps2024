const nombre = ['juan','Roberto','Ernesto','Mirian','Laura']

for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i]) 
}


const toArray  = (valor1, valor2) => {
    const array = [valor1,valor2]
    return array
}
console.log(toArray("hola","amigo"))

const numbers = [1,9,3,8,5,7]

for (let i = 0; i < numbers.length; i++) {
    let valor = numbers[i]*2
    console.log(valor) 
}

const getFirstElement = (valor) => {
    return valor[0]
}
console.log(getFirstElement([2,5,4,3]))


const setFirstElement = (valor,valor2) => {
    valor.unshift(valor2)
    return valor[0]
}
console.log(setFirstElement([2,5,4,3],7))

const getLastElement  = (valor) => {
    const ult = valor.length -1
    return valor[ult]
}
console.log(getLastElement([2,5,4,3,7]))

const harc = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let auxPos = 0
let auxCer = 0
let auxNeg = 0
for (let i = 0; i < harc.length; i++) {
    const element = harc[i];
    if (element>0 ) {
        auxPos +=1
    } else if (element<0 ) {
        auxNeg +=1
    } else{
        auxCer +=1
    }  
}

console.log(`Cantidad de positivos: ${auxPos}`)

