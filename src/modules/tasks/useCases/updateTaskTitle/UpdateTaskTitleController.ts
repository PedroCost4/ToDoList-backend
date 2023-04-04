import { Request, Response } from 'express';
import { UpdateTaskTitleUseCase } from './UpdateTaskTitleUseCase';

class UpdateTaskTitleController {
    constructor(private updateTaskTitleUseCase: UpdateTaskTitleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { title } = request.body;

        await this.updateTaskTitleUseCase.execute(Number(id), title);

        return response.status(204).send();
    }

}

export { UpdateTaskTitleController }