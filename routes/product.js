const router = require('express').Router()
const productController = require('../controllers/productController')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProduct)
router.get('/search/:key', productController.searchProduct)
router.post('/', productController.createProduct)
router.put('/:pid', productController.updateProduct)

module.exports = router