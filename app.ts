import express, { Request, Response } from "express";
import categoriesRouter from "./src/Categories/routes";
import tagsRouter from "./src/Tags/routes";
import questionsRouter from "./src/Questions/routes";
import subjectsRouter from "./src/Subjects/routes";
import choicesRouter from "./src/Choices/routes";
import licenceGroupRouter from "./src/LicenceGroup/routes";
import usersRouter from "./src/Users/routes";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import errorHandling from "./src/utils/errorHandling";
import bodyParser from "body-parser";

const app = express();

Sentry.init({
  dsn: "https://766282ec041746a1844a8909743b54c9@o1216096.ingest.sentry.io/6358045",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(bodyParser.urlencoded({ limit: "5mb", extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));

app.get("/api/health", (req: Request, res: Response) => res.send("Healthy!"));

app.use("/api/categories", categoriesRouter);
app.use("/api/tags", tagsRouter);
app.use("/api/subjects", subjectsRouter);
app.use("/api/choices", choicesRouter);
app.use("/api/questions", questionsRouter);
app.use("/api/licence", licenceGroupRouter);
app.use("/api/users", usersRouter);
app.use(errorHandling);

app.get("/api/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.use(Sentry.Handlers.errorHandler());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
