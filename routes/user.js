const router = require('express').Router()
const userController = require('../controllers/userController')
const { verifyToken } = require('../middlewares/verifyToken')

router.get('/', verifyToken, userController.getUser)
router.delete('/', verifyToken, userController.delete)

module.exports = router