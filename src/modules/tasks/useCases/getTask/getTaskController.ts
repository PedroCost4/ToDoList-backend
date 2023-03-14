import { Request, Response } from 'express';
import { GetTaskUseCase } from './getTaskUseCase';

class GetTaskController {
    constructor(private getTaskUseCase: GetTaskUseCase) { }

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const idx = Number(id);

        const task = await this.getTaskUseCase.execute(idx);

        return response.status(201).json(task);
    }
}

export { GetTaskController }