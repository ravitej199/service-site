import express from 'express';
import services from '../controllers/service-controllers.js';
const serviceRouter = express.Router();
serviceRouter.route("/service").get(services);

export default serviceRouter;