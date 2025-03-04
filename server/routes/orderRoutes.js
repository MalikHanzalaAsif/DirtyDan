import express from "express";
const router = express.Router({ mergeParams: true });
import asyncWrap from "../utils/asyncWrap.js";
import { verifyPayment } from "../controllers/orderControllers.js";

router.post("/verify-payment", asyncWrap(verifyPayment));

export default router;