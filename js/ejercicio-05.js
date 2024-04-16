const miPerro = {
    'piernas': 4,
    'colas': 1,
    'amigos': 1
}

console.log(miPerro.piernas)
console.log(miPerro.colas)
console.log(miPerro.amigos)

//-----------------------------------------------

const testObj = {
     "ojos": 2,
    "nombre": "Pablo",
    "piernas": 2
}

const ojo = testObj.ojos
const nombre = testObj.nombre
console.log(ojo)
console.log(nombre)

//------------------------------

const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 19;
const player = testObj2[playerNumber] ;

console.log(player)



//-------------------------------------------

const myDog = {
    "nombre": "Coder",
    "piernas": 4,
    "colas": 1,
};
console.log(myDog.nombre)
myDog.nombre = "HappyCoder"
console.log(myDog.nombre)


//---------------------------------------------

function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
    

    const lookup = {
        "alpha":"Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo":"Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val]

    // Sólo cambia el código por encima de esta línea
    return result;
}

const value = phoneticLookup("charlie")
console.log(value);



//----------------------------------
const myMusic = [
    {
        "artista": "Shakira",
        "titulo": "Piano Man",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": true
    },
    {
        "artista": "Juan",
        "titulo": "Pepe",
        "formatos": [
            "CD",
            "8T",
            "LP"
        ],
        "premios": false
    }
];

console.log(myMusic[0].artista)
console.log(myMusic[0].formatos[0])

//----------------------------------------------

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents);

//---------------------------------------------------------

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list
console.log(secondTree);

//--------------------------------------------------------------

const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"age": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"age": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"age": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"age": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"age": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"age":7
	},
];

const choosedUser = users.find(user => user.name === "Juan" ) // Modifica esta línea para resolver el ejercicio

console.log(choosedUser.age);
