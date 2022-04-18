import express, { Request, Response } from "express";
import categoriesRouter from "./src/Categories/routes";
import tagsRouter from "./src/Tags/routes";
import questionsRouter from "./src/Questions/routes";
import subjectsRouter from "./src/Subjects/routes";
import choicesRouter from "./src/Choices/routes";

require("dotenv").config();
const app = express();

app.get("/health", (req: Request, res: Response) => res.send("Healthy!"));

app.use("/categories", categoriesRouter);
app.use("/tags", tagsRouter);
app.use("/subjects", subjectsRouter);
app.use("/choices", choicesRouter);
app.use("/questions", questionsRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
