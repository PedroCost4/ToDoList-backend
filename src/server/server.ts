import express from 'express';
import bodyParser from 'body-parser';
import { taskRoutes } from '../routes/tasks.routes';

require("dotenv").config();

const app = express();

//app.use(bodyParser.json());
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});