import { Request,Response } from 'express';
import { Product } from '../../models/Product';
export async function listProduct(req:Request,res:Response){
    try {
        const products=await Product.find();
        res.status(200).json({error:false,products:products});
    } catch (error) {
        res.status(404).json({error:error, message:'error ao buscar as categorias'});
    }

}
