import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

class DeleteTaskController {
    constructor(private deleteTaskUseCase: DeleteTaskUseCase) { }

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const idx = Number(id);

        await this.deleteTaskUseCase.execute(idx);

        return response.status(204).send();
    }
}

export { DeleteTaskController }