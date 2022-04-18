import express, { Request, Response } from "express";
import categoriesRouter from "./src/Categories/routes";
import tagsRouter from "./src/Tags/routes";

require("dotenv").config();
const app = express();

app.get("/health", (req: Request, res: Response) => res.send("Healthy!"));

app.get("/categories", categoriesRouter);
app.get("/tags", tagsRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
