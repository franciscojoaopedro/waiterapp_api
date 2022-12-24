import { Request,Response } from 'express';
import { Category } from '../../models/Category';
export async function createCategories(req:Request,res:Response){
    try {
        const {name,icon}= req.body;
        const category= await Category.create({name,icon});
        res.status(201).json({error:false,category});
    } catch (error) {
        res.status(404).json({error:error, message:'error ao buscar os produtos'});
    }

}
