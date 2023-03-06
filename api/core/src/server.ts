import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import multer from "multer";
import { AppController, IAppController } from "./Controllers/App.Controller";

// DI
const appController: IAppController = new AppController();

// Express
const app: Express = express();

// Middlewares
const upload = multer();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(upload.single("upfile"));
// app.options("*", cors({ origin: false }));
app.use(cors({ origin: true }));

// Routes
app.post("/fileanalyse", appController.fileanalyse);

// Error Handler Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Error" });
});

// Error Handler
process.on("unhandledRejection", (error: Error | any) => {
  console.error("Unhandled Rejection");
  throw new Error(error);
});

// Server port
if (!module.parent) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`API is ready at port ${PORT}`));
}

export default app;
