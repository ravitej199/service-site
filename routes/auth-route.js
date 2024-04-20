import express from 'express';
import controllers from '../controllers/auth-controllers.js';
import validate from '../middlewares/validate-middleware.js';
import validatorSchemas from '../validators/auth-validator.js';
import authMiddleware from '../middlewares/auth-middleware.js';

const auth_router = express.Router();

auth_router.route('/').get(controllers.home);

auth_router.route('/register').post(validate(validatorSchemas.signupschema),controllers.register);

auth_router.route('/login').post(validate(validatorSchemas.loginchema),controllers.login);

auth_router.route('/user').get(authMiddleware,controllers.user)
export default auth_router;