import express from "express"
import { deleteCard, getProduct, getProducts, patchCard, postProduct } from "../controllers/product.js"

const router = express.Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', postProduct)

router.delete('/:id', deleteCard)

router.patch('/:id', patchCard)

export default router