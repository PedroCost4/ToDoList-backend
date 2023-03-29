import { ITaskRepository } from "../../repositories/ITaskRepository";


class UpdateTaskCompletionUseCase {
    
        constructor (private taskRepository: ITaskRepository) {
    
        }
    
        async execute (id : number, completed: boolean) {
            const task = await this.taskRepository.get(id);
            if (!task) {
                throw new Error("Task not found");
            }
            task.completed = completed;
            await this.taskRepository.update(id, task);
        }
    
    }

export { UpdateTaskCompletionUseCase }