import express from "express";
import productsController from "../controllers/products.controller";

export const productsRoute = express.Router();
productsRoute.get('/', productsController)