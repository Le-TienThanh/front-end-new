import express from 'express';
const newsRouter = express.Router();
import meController from '../app/controllers/MeController.js';

newsRouter.get('/stored/courses', meController.storedCourses);

export default newsRouter;
