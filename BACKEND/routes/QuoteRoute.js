import express from "express";
import { createquote } from "../Controller/QuoteController.js";

const router = express.Router();
router.post("/", createquote);
export default router;