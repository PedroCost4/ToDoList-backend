import { TaskRepository } from "../../repositories/TaskRepository";
import { GetAllTasksUseCase } from "./getAllTasksUseCase";
import { GetAllTasksController } from "./getAllTasksController";

const taskRepository = new TaskRepository();
const getAllTasksUseCase = new GetAllTasksUseCase(taskRepository);
const getAllTasksController = new GetAllTasksController(getAllTasksUseCase);

export { getAllTasksController };