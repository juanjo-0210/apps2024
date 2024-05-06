import Task from "../pages/Task";
import { collection, getDocs, query, where, addDoc, db, deleteDoc, doc} from "./firebaseApi"



const collectionName = "users"

export const access = async (name) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;

}

// READ

export const getTasksByUserId = async (userId) => {
    const colRef = collection(db, 'users', userId, 'tasks');
    const result = await getDocs(colRef);
    return getArrayFromCollection(result);
}


// CREATE
export const createTaskById = async(idUser,obj) => {
    const colRef = collection(db, 'users', idUser, 'tasks');
    const data = await addDoc(colRef, obj);
    return data.id;
}


const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}


// DELETE
export const deleteItem = async (idUser,idTask) => {
    console.log('111111111111111',idUser, idTask)
    const docRef = doc(db, 'users', idUser, "t    asks", idTask);
    await deleteDoc(docRef);
}