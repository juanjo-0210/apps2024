import { Timestamp } from "firebase/firestore";

export interface DocData  {
    userName: string;
    id:string;
    date: string
    [key:string]: unknown;
}

export type PersonalData =  {
    userName: string;
    date: string
    id:string;
}

export type Personal =  {
    userName: string;
    date: Timestamp;
    id:string;
}
