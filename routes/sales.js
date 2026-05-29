import express from 'express';
import {  getSales, getTodaySales, getYears, insertSale } from '../controllers/sales_controller.js';

export const salesRouter = express.Router();

salesRouter.post("/", insertSale);

salesRouter.get("/", getSales);

salesRouter.get("/years", getYears);

