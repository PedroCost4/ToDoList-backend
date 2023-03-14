import { Task } from '../model/Task';

interface ITaskDTO {

    title: string;
    completed: boolean;

}

interface ITaskRepository {
    create(task: ITaskDTO): Promise<void>;
    update(id: number, task: ITaskDTO):  Promise<void>;
    delete(id: number):  Promise<void>;
    get(id: number): Promise<ITaskDTO>;
    getAll(): Promise<Array<Task>>;
    getCompleted(): Promise<Array<Task>>;
    getUncompleted(): Promise<Array<Task>>;
}


export { ITaskRepository, ITaskDTO };