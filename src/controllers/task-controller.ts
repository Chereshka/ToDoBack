import express, { Request, Response } from "express";
import TaskModel from "../db/models/TaskModel";

import { AuthMiddleware } from "../middleware";


export class TaskController {
  public readonly router = express.Router();


  constructor() {
    const auth = new AuthMiddleware();

    this.router.get("/", auth.use(), this.select);
    this.router.post("/create", auth.use(), this.create);
    this.router.post("/update", auth.use(), this.update);
    this.router.post("/delete", auth.use(), this.delete);

  }

  private async select(req: Request, res: Response): Promise<void> {
    const { deviceId } = req.body;

    try {
      const result = await TaskModel.find({ deviceId });
      res.send({ success: [...result] });
    } catch (e) {
      res.status(500).send({ error: "External error" });
    }

  }


  private async create(req: Request, res: Response): Promise<void> {


    try {
      const task = await new TaskModel(req.body).save()

      task ?
        res.json({ success: task })
        : res.json({ error: "Cannot create task" });

    } catch (error) {
      console.log({ error })
      res.json({ error });
    }

  }

  private async update(req: Request, res: Response): Promise<void> {
    const { deviceId, _id } = req.body;


    try {
      const task = await TaskModel.updateOne({ _id, deviceId }, req.body);

      task ?
        res.json({ success: task })
        : res.json({ error: "Cannot create court" });

    } catch (error) {
      console.log({ error })
      res.json({ error });
    }

  }

  private async delete(req: Request, res: Response): Promise<void> {
    const { deviceId, taskId } = req.body;

console.log({ deviceId, taskId })

    try {
      await TaskModel.deleteOne({ _id: taskId, deviceId });
      res.json(taskId);

    } catch (error) {
      console.log({ error })
      res.json({ error });
    }

  }
}