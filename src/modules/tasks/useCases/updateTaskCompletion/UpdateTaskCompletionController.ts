import { Request, Response } from 'express';
import { UpdateTaskCompletionUseCase } from './UpdateTaskCompletionUseCase';

class UpdateTaskCompletionController {
    constructor(private updateTaskCompletionUseCase: UpdateTaskCompletionUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { completed } = request.body;

        await this.updateTaskCompletionUseCase.execute(Number(id), completed);

        return response.status(204).send();
    }

}

export { UpdateTaskCompletionController }