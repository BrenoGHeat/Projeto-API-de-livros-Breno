import { Request, Response, Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/" , IsBookNameValid.execute, booksControllers.createBooks);

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id" , IsBookIdValid.execute, booksControllers.getOneBook);

booksRouter.patch("/:id" , IsBookIdValid.execute, IsBookNameValid.execute, booksControllers.patchOneBook);

booksRouter.delete("/:id" , IsBookIdValid.execute, booksControllers.deleteBooks);