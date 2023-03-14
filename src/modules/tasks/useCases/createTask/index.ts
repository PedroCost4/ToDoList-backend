import { TaskRepository } from "../../repositories/TaskRepository";
import { CreateTaskUseCase } from "./createTaskUseCase";
import { CreateTaskController } from "./createTaskController";

const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };