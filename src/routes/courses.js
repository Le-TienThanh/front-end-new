import express from 'express';
const newsRouter = express.Router();
import courseController from '../app/controllers/CourseController.js';

newsRouter.get('/create', courseController.create);
newsRouter.post('/store', courseController.store);
newsRouter.put('/:id', courseController.update);
newsRouter.get('/:slug', courseController.show);
newsRouter.get('/:id/edit', courseController.edit);

export default newsRouter;
