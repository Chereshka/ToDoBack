import express from "express";
import cors from "cors";
import { TaskController } from "./controllers/task-controller";

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

const mainRouter = express.Router();
app.use("/api", mainRouter);
mainRouter.use("/task", new TaskController().router);

export default app;