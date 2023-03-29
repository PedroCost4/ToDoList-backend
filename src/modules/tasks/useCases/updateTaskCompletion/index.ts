import { TaskRepository  } from "../../repositories/TaskRepository";
import { UpdateTaskCompletionUseCase } from "./UpdateTaskCompletionUseCase";
import { UpdateTaskCompletionController } from "./UpdateTaskCompletionController";

const taskRepository = new TaskRepository();
const updateTaskCompletionUseCase = new UpdateTaskCompletionUseCase(taskRepository);
const updateTaskCompletionController = new UpdateTaskCompletionController(updateTaskCompletionUseCase);

export { updateTaskCompletionController }
