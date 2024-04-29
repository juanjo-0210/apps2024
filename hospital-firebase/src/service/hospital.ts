import { db, collection, addDoc, getDocs, query, doc, deleteDoc } from "./api";
import { Task, Id } from "../common/types/task"
import { DocData, PersonalData } from "../common/types/personalData"
import { getDoc, updateDoc, type QuerySnapshot } from "firebase/firestore";


const collectionName:string = 'patients';

// CREATE
export const createPersons = async(obj:PersonalData[]) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

    //CON TYPESCRIPT
    export const createPersonsTypeS = async (obj:PersonalData) => {
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

    export const getItemById = async (id:string):Promise<Task[]> => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// UPDATE
export const updateItem = async (id:string, obj:PersonalData) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// DELETE
export const deleteItem = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection: QuerySnapshot):DocData[] => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}