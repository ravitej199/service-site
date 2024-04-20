import express from 'express';
const contact_router = express.Router();
import contactForm from '../controllers/contact-controllers.js';


contact_router.route('/contact').post(contactForm);

export default contact_router;