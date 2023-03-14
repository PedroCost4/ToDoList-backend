import { ITaskRepository } from "../../repositories/ITaskRepository";

class GetTaskUseCase {
    constructor (private taskRepository: ITaskRepository) {

    }

    async execute (id: number) {
        const task = await this.taskRepository.get(id);
        return task;
    }
}

export { GetTaskUseCase }