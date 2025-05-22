import express from 'express';
const siteRouter = express.Router();
import SiteController from '../app/controllers/SiteController.js';

siteRouter.use('/search', SiteController.search);
siteRouter.use('/', SiteController.home);


export default  siteRouter;