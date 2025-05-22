import express from 'express';
const newsRouter = express.Router();
import NewsController from '../app/controllers/NewsController.js';


newsRouter.use('/', NewsController.index)

export default  newsRouter;