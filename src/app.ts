import "express-async-errors";
import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/books" , booksRouter);

app.use(HandleErrors.execute);