import { TaskRepository } from "../../repositories/TaskRepository";
import { GetTaskUseCase } from "./getTaskUseCase";
import { GetTaskController } from "./getTaskController";

const taskRepository = new TaskRepository();
const getTaskUseCase = new GetTaskUseCase(taskRepository);
const getTaskController = new GetTaskController(getTaskUseCase);

export { getTaskController };
