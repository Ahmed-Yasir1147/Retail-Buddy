import express from 'express';
import { deleteProduct, getProducts, insertProduct, updateProduct } from '../controllers/products_controller.js';

export const productsRouter = express.Router();

productsRouter.post("/", insertProduct);

productsRouter.get("/", getProducts);

productsRouter.delete("/:id", deleteProduct);

productsRouter.put("/:id", updateProduct);