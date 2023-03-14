import { prisma } from "../../../controllers/prismaClient";
import { ITaskRepository, ITaskDTO } from "./ITaskRepository";


class TaskRepository implements ITaskRepository {
    
    async create({title, completed}: ITaskDTO): Promise<void> {
        try{
            await prisma.task.create({
                data: {
                    title,
                    completed
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    async update(id: number ,{title, completed}: ITaskDTO): Promise<void> {
        try{
            await prisma.task.update({
                where: {
                    id
                },
                data: {
                    title,
                    completed
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    async delete(id: number): Promise<void> {
        try{
            await prisma.task.delete({
                where: {
                    id
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    async get(id: number): Promise<ITaskDTO> {
        try{
            const task = await prisma.task.findUnique({
                where: {
                    id: id
                }
            })
            return task;
        }
        catch(err){
            console.log(err)
        }
    }

    async getAll(): Promise<Array<ITaskDTO>> {
        try{
            const tasks = await prisma.task.findMany();
            return tasks;
        }
        catch(err){
            console.log(err)
        }
    }

    async getCompleted(): Promise<Array<ITaskDTO>> {
        try{
            const tasks = await prisma.task.findMany({
                where: {
                    completed: true
                }
            })
            return tasks;
        }
        catch(err){
            console.log(err)
        }
    }

    async getUncompleted(): Promise<Array<ITaskDTO>> {
        try{
            const tasks = await prisma.task.findMany({
                where: {
                    completed: false
                }
            })
            return tasks;
        }
        catch(err){
            console.log(err)
        }
    }

}

export { TaskRepository }