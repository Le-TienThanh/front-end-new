import express from 'express';
const newsRouter = express.Router();
import courseController from '../app/controllers/CourseController.js';

newsRouter.get('/create', courseController.create);
newsRouter.post('/store', courseController.store);
newsRouter.get('/:slug', courseController.show);

export default newsRouter;
