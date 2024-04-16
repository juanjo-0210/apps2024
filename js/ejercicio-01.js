// const txt1 = 'Este es el principio'
// const txt2 = 'Este es el final'
// const txt3 = txt1+txt2
// console.log(txt3)

// const euros = 7;
// const dolares = euros*2
// console.log(dolares);


// const precio = 100;
// const precioConIva = precio * 0.21
// console.log(precioConIva+precio);


// const ancho = 4
// const alto = 7
// console.log(ancho+alto/2);



// const centigrados = 20;
// const fahrenheit = centigrados * 9/5 +32
// console.log(fahrenheit);


// const nombre = 'Juan';
// const material = 'madera';
// const dimensiones = 'diminutas';
// const comentario = 'Que sea bonita, pero de una belleza estraña, indómita';
// console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensiones}. ${comentario}`);

// let myVar = 87; 
// myVar1 = ++myVar;
// console.log(myVar1);



// myVar3 = --myVar;
// console.log(myVar3);

// const dato1 = 10;
// const dato2 = 10;
// if(dato1 === dato2){
// 	console.log('exito');
// }

// if (10 === 10){
//     console.log('You got a true!')
// }
//  else {
//     console.log('You got a false!')
// }

// const nota = 8
// if(nota > 5){
// 	console.log("aprobado");
// }else if(nota === 5){
// 	console.log('aprobado a pelos');
// } else{
// 	console.log('suspendido');
// }



// const i = 100
// if(i < 0){
// 	console.log("Negativo");
// } 
// if(i % 2 === 0){
// 	console.log('Numero par');
// }  
// if (i % 5 === 0) {
// 	console.log('multiplo de cinco');
// } 
// if (i % 10 === 0) {
// 	console.log('multiplo de 10');
// } 
// if (i > 100) {
// 	console.log('mayor que 100');
// } 
// if (i < 100) {
// 	console.log('menor que 100');
// }


// const n1 = 3;
// const n2 = 7;
// const op = 'x';

// if (op === '+') {
// 	console.log(2+2)
// }else if (op === '-') {
// 	console.log(2-2)
// }else if (op === 'x') {
// 	console.log(2*2)
// }else {
// 	console.log(2/2)
// }

// const b = -10
// console.log(b>0 ? 'b es positivo' : 'b es negativo');


// {const i = 21
// console.log(i%2 === 0 ? 'i es par' : 'i no es par');}


// const color = 'amarillo';
// switch(color) {
// 	case 'rojo':
// 		console.log('Has escogido rojo');
// 	break;
// 	case 'azul':
// 		console.log('Has escogido azul');
// 	break;
// 	case 'amarillo':
// 		console.log('Has escogido amarillo');
// 	break;
// 	default:
// 		console.log('No has escogido ningún color de la lista!');
// }

// const golosina = 'nubes';

// switch(golosina) {
// 	case 'chicle':
// 		console.log('Has escogido un chicle');
// 	break;
// 	case 'gominola':
// 		console.log('Has escogido una gominola');
// 	break;
// 	case 'regaliz':
// 		console.log('Has escogido un regaliz');
// 	break;
// 	default:
// 		console.log("No has escogido nada")
// }


// // https://github.com/monteserin/chat/tree/master


// for(let i=0; i<=100; i = i + 2){
// 	console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i%2 != 0) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i%3 === 0 && i%5 === 0) {
// 		console.log("fizzBuzz");
//         continue;
// 	} else {

// 		if (i%3 === 0) {

// 		console.log("fizz");
//         continue;
//     	}
// 		if (i%5 === 0) {
// 			console.log("buzz");
// 			continue;
// 		}
// 	}
    

//     console.log(i);
// }

let numero = 0;
for (let i = 5;  i >= 0; i--) {
	numero +=i;
}
console.log(numero);

// for (let i = 1;  i < 10; i++) {
// 	console.log(`7 * ${i} = ${7*i}`);
// }

// for (let i = 1;  i < 10; i++) {

// 	for (let j = 1;  j < 10; j++) {
// 		console.log(`${i} * ${j} = ${i*j}`);
// 	}

// }

let num = 5;
let res = 0;
while (num) {
	res += num
	num--
}
console.log(res);


function condicion(booleano = true) {
	if (booleano) {
		console.log("Sí, eso es cierto")
	}else{
		console.log("No, eso es falso")
	}
}
condicion(false)

function hoyQuieroComer(comida) {
	console.log(comida)
}

hoyQuieroComer("garbanzos")

function calcularCubo(num) {
	console.log(num/2)
}

calcularCubo(3)

function calcularVelocidad(vel) {
	
	console.log(vel*1000, "metro/hora")
}

calcularVelocidad(3)

function calcularArea(alto,ancho) {
	
	console.log(alto*ancho)
}

calcularArea(20,20)

function calcularTriangulo(base,altura) {
	console.log(base*altura/2)
}

calcularTriangulo(3,5)

function calcularPerimetro(radio) {
	console.log(2*Math.PI*radio)
}

calcularPerimetro(20)

function calcularArear2(radio) {
	console.log(Math.PI*radio)
}

calcularArear2(20)

function echo(params) {
	console.log(params)
}

echo("Greta");
echo("CO2")

function saludar(params) {
	console.log(params)
}

saludar("Ada");
saludar("Grace");

function test(val) {
	if (val >= 10 && val <= 20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}

console.log(test(21));


function testEqual(val) {
	if (val===12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(21));


function testElse(val) {
	let result = "";
	if (val <= 5) {
		result = "Menor o igual a 5";
	}else {
		result = "Mayor que 5";
	}
	return result;
}

console.log(testElse(20));

function testElse2(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	}else if (val < 5) {
	result = "Smaller than 5";
	}else if (val == 5) {
		result = "Equal to 5";
	}
	return result;
}

console.log(testElse2(20));


function testSize(num) {

	switch (num) {
		case 1 : ;
		case 2 : ;
		case 3 : ;
		case 4 : ;
		case 5:
			return "Tiny"
			break;
		case 6 : ;
		case 7 : ;
		case 8 : ;
		case 9 : ;
		case 10:
			 return "Small"
			 break;
		case 11 : ;
		case 12 : ;
		case 13 : ;
		case 14 : ;
		case 15:
			return "Medium"
			break;
		case 16 : ;
		case 17 : ;
		case 18 : ;
		case 19 : ;
		case 20:
			return "Large"
			break;

		default:
			return "Huge";
			break;
	}
	
}

console.log(testSize(19));


const longitud = word => {
	let cantidad = word.length
	return cantidad
}

console.log(longitud('ana'))

const devuelvePrimeraLetra = (word) =>{
	const result = word.charAt(0)
	return result
}

console.log(devuelvePrimeraLetra('Pedro'))

const devuelveUltimaLetra = (word) => word.slice(-1)
	


console.log(devuelveUltimaLetra('Alejandro'))

const devuelveEnesimaLetra = (word,pos) =>{
	const result = word.charAt(pos-1)
	return result
}

console.log(devuelveEnesimaLetra('Alejandro',4))

const imprime = (word) =>{
	const result = word.substring(3,7)
	return result
}

console.log(imprime('wonderful day'))


const devuelveMasLarga = (word,word2) =>{
	const result = word.length > word2.length ? word : word2
	return result
}

console.log(devuelveMasLarga('pedro','miguel'))


//PENDIENTE
	const devuelveMasLarga2 = (word,word2,word3) =>{
		
	

		
	}

	console.log(devuelveMasLarga2('pedro','miguel','angel'))



const generarNombre  = (word,word2,word3) =>{
	if (word.length < 3 || word2.length < 3 || word3.length < 3) {
		const error = "error"
		return error
	}else{
		const pal1 = word.charAt(0)
		const pal2 = word2.charAt(0)
		const pal3 = word3.charAt(0)

		return pal1+pal2+pal3
	}
}

console.log(generarNombre ('pee','miguel','angel'))



const generarNombre2  = (word,word2,word3) =>{
	if (word.length < 3 || word2.length < 3 || word3.length < 3) {
		const pal1 = word.slice(-1)
		const pal2 = word2.slice(-1)
		const pal3 = word3.slice(-1)

		return pal1+pal2+pal3
	}else{
		const pal1 = word.charAt(0)
		const pal2 = word2.charAt(0)
		const pal3 = word3.charAt(0)

		return pal1+pal2+pal3
	}
}

console.log(generarNombre2 ('pe','miguel','angel'))

const generarNombre3  = (word,word2,word3) =>{
	if (word.length < 3 || word2.length < 3 || word3.length < 3) {
		const error = "error"
		return error
	}else{
		const pal1 = word.slice(-1)
		const pal2 = word2.slice(-1)
		const pal3 = word3.slice(-1)

		return pal1+pal2+pal3
	}
}

console.log(generarNombre3 ('ped','miguel','angel'));

const tieneLetra = word => {
	const result = word.includes('A')
	
	return result ? 'true' : 'false'
}
console.log(tieneLetra ('peda'));


const tieneLetra2 = word => {
	const result = word.toLowerCase().includes('a')
	
	return result ? 'true' : 'false'
}
console.log(tieneLetra2 ('pedA'));


const crearPalabra = (word,num) => {
	let result = ""
	for (let i = 0; i < num ; i++) {
		result += word
		
	}
	
	return result
}
console.log(crearPalabra ('p',8));


const crearPalabra2 = (word,num) => {
	let result = ""
	for (let i = 0; i < num ; i++) {
		result += word
		
	}
	
	return result.toLocaleUpperCase()
}
console.log(crearPalabra2 ('p',8));

const addGuiones  = (word) => {
	let result = ""
	for (let i = 0; i < word.length ; i++) {
		result += word.charAt(i) + "-"
	}
	
	return result
}
console.log(addGuiones  ('pedro')); 



const contadorDeLetras   = (word) => {
	let result = ""
	for (let i = 0; i < word.length ; i++) {
		result = i
	}
	
	return result
}
console.log(contadorDeLetras('pedro'));

const contadorDeLetras2   = (word) => {
	let result = ""
	for (let i = 0; i < word.length ; i++) {
		result = i
	}
	
	return result
}
console.log(contadorDeLetras('pedro'));

//const url = location.href;
//const lastUrl = url.lastIndexOf("/");
//const result = url.substring(lastUrl);
//console.log(result);

const nombre = "juanjo"
const min = 1
const max = nombre.length
const rango = Math.floor(Math.random() * (max - min + 1)) + min;

const letra = nombre.charAt(rango-1)



console.log(letra)
console.log(letra)
