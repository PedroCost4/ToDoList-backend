import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest{
    title: string;
    completed: boolean;
}

class GetAllTasksUseCase {
    constructor (private taskRepository: ITaskRepository) {

    }

    async execute () {
        const task = await this.taskRepository.getAll();
        return task;
    }

}

export { GetAllTasksUseCase };