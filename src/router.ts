import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/Categories/listCategory';
import { createCategories } from './app/useCases/Categories/createCategory';

import { listProduct } from './app/useCases/Products/listProduct';
import { createProducts } from './app/useCases/Products/createProduct';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});

//Listar Produto
router.get('/products', listProduct);

//Criar Produto
router.post('/products', upload.single('image'), createProducts);

// Listar Categoria
router.get('/categories', listCategories);

//Criar Categoria
router.post('/categories', createCategories);

// Buscar produto por categoria
router.get('/categories/:categoryId/produtcs', (req, res) => {
    res.send('OK');
});
// Listar Pedido
router.get('/orders', (req, res) => {
    res.send('OK');
});
// Criar Pedido
router.post('/orders', (req, res) => {
    res.send('OK');
});
//Escolher pedido por estado
router.patch('/orders/:orderId', (req, res) => {
    res.send('OK');
});
// Deletar ou Cancelar Pedido
router.delete('/orders/:orderId', (req, res) => {
    res.send('OK');
});
