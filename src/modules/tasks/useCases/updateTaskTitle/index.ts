import { TaskRepository  } from "../../repositories/TaskRepository";
import { UpdateTaskTitleUseCase } from "./UpdateTaskTitleUseCase";
import { UpdateTaskTitleController } from "./UpdateTaskTitleController";

const taskRepository = new TaskRepository();
const updateTaskTitleUseCase = new UpdateTaskTitleUseCase(taskRepository);
const updateTaskTitleController = new UpdateTaskTitleController(updateTaskTitleUseCase);

export { updateTaskTitleController }