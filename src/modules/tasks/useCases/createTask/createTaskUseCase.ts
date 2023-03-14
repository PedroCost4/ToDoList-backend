import { ITaskRepository } from "../../repositories/ITaskRepository";

interface IRequest {
    title: string;
    completed: boolean;
}


class CreateTaskUseCase {
    constructor (private taskRepository: ITaskRepository) {

    }

    async execute (request: IRequest) {
        const task = await this.taskRepository.create(request);
        return task;
    }
}

export { CreateTaskUseCase }