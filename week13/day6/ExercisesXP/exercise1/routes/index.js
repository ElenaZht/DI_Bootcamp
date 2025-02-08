import express from 'express'
import { renderHomePage, renderAboutPage } from '../controllers/controller.js';
const router = express.Router();

//Express matches routes in order!
//"Specific routes before dynamic routes" 
//requests will match the first route that fits the pattern

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);


export default router;