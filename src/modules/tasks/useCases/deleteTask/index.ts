import { TaskRepository } from "../../repositories/TaskRepository";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";
import { DeleteTaskController } from "./DeleteTaskController";

const taskRepository = new TaskRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskController };