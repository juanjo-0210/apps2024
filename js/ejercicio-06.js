
 const users = [
        {
          name: "Paco",
          isActive: false,
          edad: 18,
        },
        {
          name: "Laura",
          isActive: false,
          edad: 21,
        },
        {
          name: "Raquel",
          isActive: false,
          edad: 15,
        },
        {
          name: "Juan",
          isActive: true,
          edad: 17,
        },
        {
          name: "Alberto",
          isActive: false,
          edad: 50,
        },
        {
          name: "Rodolfo",
          isActive: true,
          edad: 7,
        },
      ];

      const result = users.filter((user) => user.isActive === true);
      
      console.log(result);

      
      const result1 = users.filter((user) => user.edad > 18);
      
      console.log(result1);

      const numeros = [1,2,3]
      const res = numeros.reduce((valorAcu, numero) => valorAcu + numero / numeros.length, 0)
      console.log(res)


      //-----------------------------------------------------------------------------------------------------

let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];


const getWomansName = (characters) => {
    const r = characters.filter(character => character.gender === "female").map(nombre => nombre.name)
    console.log('getWomansName(): ' , r);
}

const getSmallerPeople = (characters) => {
    const r = characters.map(nombre => ({ 
      ...characters,height : characters.height -10
      //añadiendo parentesis en el cuerpo del metodo puedo retornar un objeto y el codigo queda de esta manera
      // nombre.height = nombre.height - 10
      // return nombre 
    }))
    console.log(r)
}

const sumaDePeso = (characters) => {
    const r = characters.reduce((acc, n) => (acc + Number(n.mass)),0)
    console.log(r)
}

const mediaDeAltura = (characters) => {
    const r = characters.reduce((acc, n) => (acc + Number(n.height)),0)/characters.length
    console.log(r)
}

const collectByIndex  = index => {
    const r = characters[index]
    collectedCharacters.push(r)
    console.log(collectedCharacters)
}


const collectByName  = characterName => {
    const r = characters.find(character => character.name === characterName)
    collectedCharacters.push(r)
    console.log(collectedCharacters)
}

const removeByName = characterName => {
    const r = characters.filter(character => character.name !== characterName)
    collectedCharacters.push(r)
    console.log(collectedCharacters)
}

const getCharacterFilms = characterName => {
    const r = characters.filter(character => character.name === characterName).map(character => character.films)
    collectedCharacters.push(r)
    console.log(collectedCharacters)
}

const collectByName2  = characterName => {
    const r = collectedCharacters2.find(character => (character.name === characterName))
    let amount = 0;
    if (r) {
      collectedCharacters2.push({...r,amount:1})
    }else{
      r = characters.find(character => (character.name === characterName))
      collectedCharacters2.push(r.amount++)
    }
    console.log(collectedCharacters2)
}

fetch('https://swapi.py4e.com/api/people')
  .then(res => res.json())
  .then(data => {
    characters = data.results;
    // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
    console.log(characters);
    getWomansName(characters);
    getSmallerPeople(characters)
    sumaDePeso(characters)
    mediaDeAltura(characters)
    collectByIndex(1)
    collectByName("C-3PO")
    removeByName("C-3PO")
    getCharacterFilms("Luke Skywalker")
    collectByName2("Luke Skywalker")
  });
  
  

