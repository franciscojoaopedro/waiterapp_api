import { Request,Response } from 'express';

import { Product } from '../../models/Product';
export async function createProducts(req:Request,res:Response){
    try {
        const imagePath=req.file?.filename;
        const {name,description,price,category,ingredients}=req.body;
        const product=await Product.create({
            name,
            description,
            price:Number(price),
            category,
            ingredients:JSON.parse(ingredients),
            imagePath
        });
        res.status(201).json({error:false,product:product});
    } catch (error) {
        res.status(404).json({error:error, message:'error ao buscar os produtos'});
    }

}
