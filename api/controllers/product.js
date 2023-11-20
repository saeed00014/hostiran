import Product from '../models/product.js'

export const getProducts = async (req, res) => {
  const product = await Product.find()
  res.status(200).json(product)  
}

export const getProduct = async (req, res) => {
  const product = await Product.find()
  const founded = product.find((product) => product.id == req.params.id)
  res.status(200).json(founded)  
}

export const postProduct = async (req, res) => {
  const {id, img, title, isAvailable, remaining, rate, price, discountPrecent, quantity} = req.body

  const products = await Product.find()

  products.find((product) => product.id == id) 
    ? await Product.findOneAndUpdate({id: id}, {
      ...req.body
    })
    : await Product.create({id, img, title, isAvailable, remaining, rate, price, discountPrecent, quantity})

}

export const deleteCard = async (req, res) => {
  const { id } = req.params
  
  id == 'all' 
    ? await Product.deleteMany({})
    : await Product.findOneAndDelete({id: id})
    
  res.status(200).json(id)
}

export const patchCard = async (req, res) => {
  const { id } = req.params

  const product = await Product.findOneAndUpdate({id: id}, {
    ...req.body
  })

  res.status(200).json(product)
}
