import { Request, Response } from 'express';
import { CreateTaskUseCase } from './createTaskUseCase';

class CreateTaskController {

    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    handle (request: Request, response: Response): Response {
        const { id, title, completed } = request.body;

        const task = this.createTaskUseCase.execute({ id, title, completed });

        return response.status(201).json(task);
    }

}

export { CreateTaskController }
