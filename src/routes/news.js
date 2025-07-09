import express from 'express';
const newsRouter = express.Router();
import NewsController from '../app/controllers/NewsController.js';



newsRouter.get('/', NewsController.index)

export default  newsRouter;