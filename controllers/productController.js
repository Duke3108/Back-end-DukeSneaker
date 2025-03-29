const Product = require('../models/Product');

module.exports = {
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body)
        try {
            await newProduct.save()
            res.status(200).json({ message: "product created", newProduct })
        } catch (error) {
            res.status(500).json("failed to create product")
        }
    },

    updateProduct: async (req, res) => {
        const pid = req.params.pid
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                pid,
                req.body,
                { new: true }
            );

            res.status(200).json({ message: "product updated", updatedProduct })
        } catch (error) {
            res.status(500).json("failed to update product")
        }
    },

    deleteProduct: async (req, res) => {
        const newProduct = new Product(req.body)
        try {
            await newProduct.save()
            res.status(200).json({ message: "product created", newProduct })
        } catch (error) {
            res.status(500).json("failed to create product")
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 }).select("-__v -createdAt -updatedAt")
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json("failed to get products")
        }
    },

    getProduct: async (req, res) => {
        const productId = req.params.id
        try {
            const product = await Product.findById(productId)
            const { __v, createdAt, updatedAt, ...productData } = product._doc
            res.status(200).json(productData)
        } catch (error) {
            res.status(500).json("failed to get product")
        }
    },

    searchProduct: async (req, res) => {
        try {
            const results = await Product.aggregate(
                [
                    {
                        $search: {
                            index: "shoes",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            )
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json("failed to search product")
        }
    }
}