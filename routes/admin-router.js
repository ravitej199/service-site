import express from 'express';
import details from '../controllers/admin-controllers.js';
import authMiddleware from '../middlewares/auth-middleware.js';
const admin_router = express.Router();

admin_router.route('/users').get(details.getAllUsers);
admin_router.route('/contacts').get(authMiddleware,details.getAllContacts);

export default admin_router;