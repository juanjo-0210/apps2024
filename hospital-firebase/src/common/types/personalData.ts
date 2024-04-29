export interface DocData  {
    id:string;
    [key:string]: unknown;
}

export type PersonalData = DocData & {
    userName: string;
    id:string
    date: string
}

