import express from 'express';
const router = express.Router();
import asyncWrap from '../utils/asyncWrap.js';
import { sendEmails } from '../controllers/contactControllers.js';

// ROUTES
router.post("/contact", asyncWrap(sendEmails));

export default router;