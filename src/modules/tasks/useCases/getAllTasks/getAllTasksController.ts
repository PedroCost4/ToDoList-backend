import { Request, Response } from 'express';
import { GetAllTasksUseCase } from './getAllTasksUseCase';

class GetAllTasksController {
    constructor(private getAllTasksUseCase: GetAllTasksUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.getAllTasksUseCase.execute();

        return response.json(all);
    }
}

export { GetAllTasksController };