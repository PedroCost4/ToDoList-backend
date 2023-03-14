import { Router } from 'express';
import { createTaskController } from '../modules/tasks/useCases/createTask';
import { getTaskController } from '../modules/tasks/useCases/getTask';

const taskRoutes = Router();

taskRoutes.post('/', (req, res) => {
    return createTaskController.handle(req, res);
});

taskRoutes.get('/:id', (req, res) => { 
    return getTaskController.handle(req, res);
});

export { taskRoutes };