import { Request,Response } from 'express';
import { Category } from '../../models/Category';
export async function listCategories(req:Request,res:Response){
    try {
        const categories=await Category.find();
        res.status(200).json({error:false,categories:categories});
    } catch (error) {
        res.status(404).json({error:error, message:'error ao buscar as categorias'});
    }

}
