import { Request , Response } from "express";
import { IBooks } from "../interfaces/books.interface";
import { generateId , booksDatabase} from "../database/database";

export class BooksControllers{
    createBooks(req: Request, res: Response): Response{
        const newBook: IBooks = { id: generateId() , name: req.body.name , pages: req.body.pages , category: req.body.category , createdAt: new Date(), updatedAt: new Date() }
       
        booksDatabase.push(newBook);

        return res.status(201).json(newBook);
    };

    getBooks(req: Request, res: Response): Response{
        return res.status(200).json(booksDatabase);
    };

    getOneBook(req:Request, res: Response): Response{
        const findBook = booksDatabase.find(book => book.id === Number(req.params.id));

        return res.status(200).json(findBook);
    }

    patchOneBook (req:Request , res: Response): Response { 
        const index = booksDatabase.findIndex(book => book.id === Number(req.params.id));

        const newBook = {...booksDatabase[index] , ...req.body , updatedAt: new Date()};

        booksDatabase.splice(index, 1 , newBook);

        return res.status(200).json(newBook);

    }

    deleteBooks(req: Request, res: Response): Response{
        const index = booksDatabase.findIndex(book => book.id === Number(req.params.id));

        booksDatabase.splice(index, 1);

        return res.status(204).json();
    }

};