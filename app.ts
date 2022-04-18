import express, { Request, Response } from "express";
import router from "./src/Categories/routes";
require("dotenv").config();
const app = express();

app.get("/health", (req: Request, res: Response) => res.send("Healthy!"));

app.get("/categories", router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
