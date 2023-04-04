import express from 'express';
import bodyParser from 'body-parser';
import { taskRoutes } from '../routes/tasks.routes';
import { userRoutes } from '../routes/user.routes';

require("dotenv").config();

const app = express();

//app.use(bodyParser.json());
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});