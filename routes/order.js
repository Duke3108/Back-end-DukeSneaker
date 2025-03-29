const router = require('express').Router()
const orderController = require('../controllers/ordersController')
const { verifyToken } = require('../middlewares/verifyToken')

router.get('/', verifyToken, orderController.getUserOrders)

module.exports = router