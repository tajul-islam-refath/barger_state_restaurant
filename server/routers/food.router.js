const router = require('express').Router()



const {
    createNewFoodController,
    getAllFoodsController
} = require('../controllers/food.controller')


const { isAuthenticate, isAdmin } = require('../midewares/authentication.midleware')
const { foodValidator } = require('../midewares/validator.midleware')
const upload = require('../midewares/upload.midleware')

router.post('/new-food', isAuthenticate, isAdmin('admin'), upload.single('food-image'), foodValidator, createNewFoodController)
router.get('/all', getAllFoodsController)

module.exports = router