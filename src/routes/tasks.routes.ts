import { Router } from 'express';
import { createTaskController } from '../modules/tasks/useCases/createTask';
import { getTaskController } from '../modules/tasks/useCases/getTask';
import { deleteTaskController } from '../modules/tasks/useCases/deleteTask';

const taskRoutes = Router();

taskRoutes
.post('/', (req, res) => {
    return createTaskController.handle(req, res);
})
.get('/:id', (req, res) => { 
    return getTaskController.handle(req, res);
})
.delete('/:id', (req, res) => {
    return deleteTaskController.handle(req, res);
});

export { taskRoutes };