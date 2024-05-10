import { db, collection, addDoc, getDocs, query, doc, deleteDoc } from "./api";
import { Task, Id } from "../common/types/task"
import { PersonalData } from "../common/types/personalData"


const collectionName:string = 'Persons';

// CREATE
export const createPersons = async(obj:string) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

    //CON TYPESCRIPT
    export const createPersonsTypeS = async (obj:PersonalData[]) => {
    const colRef = collection(db,collectionName);
    const data:Id = await addDoc(colRef, obj);
    return data.id;
    };




// READ
export const getItems = async ()  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

    //CON TYPESCRIPT
    export const getTasks = async (arg:string):Promise<Task[]> => {
    const colRef = collection(db, arg);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
    };



// DELETE
export const deleteItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}