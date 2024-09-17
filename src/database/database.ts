import { IBooks } from "../interfaces/books.interface";

export const booksDatabase : IBooks[] = [];

let id = 0;

export const generateId = () =>{
    id++ ;
    return id;
}

