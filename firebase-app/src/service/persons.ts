import { conec } from "./dbNode";


// CREATE
export const createPersons = async(obj) => {
    conec.post('/user',obj)
}

    //CON TYPESCRIPT
    export const createPersonsTypeS = async (obj) => {
    
    };




// READ
export const getItems = async ()  => {
    
}

    //CON TYPESCRIPT
    export const getTasks = async (arg) => {
    
    };



// DELETE
export const deleteItem = async (id) => {
    
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}