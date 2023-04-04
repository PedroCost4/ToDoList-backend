import { ITaskRepository } from "../../repositories/ITaskRepository";

class UpdateTaskTitleUseCase {
    
        constructor (private taskRepository: ITaskRepository) {
    
        }
    
        async execute (id : number, title: string) {
            const task = await this.taskRepository.get(id);
            if (!task) {
                throw new Error("Task not found");
            }
            task.title = title;
            await this.taskRepository.update(id, task);
        }
    
}

export { UpdateTaskTitleUseCase }