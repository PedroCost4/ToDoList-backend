import { ITaskRepository } from '../../repositories/ITaskRepository';

class DeleteTaskUseCase {
    constructor (private taskRepository: ITaskRepository) {

    }

    async execute (id: number) {
        const task = await this.taskRepository.delete(id);
        return task;
    }
}

export { DeleteTaskUseCase }