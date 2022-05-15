import { Request, Response, NextFunction } from 'express';

const productsController = async (req: Request, res: Response, next: NextFunction) => {
    res.send('products');
}

export default productsController;