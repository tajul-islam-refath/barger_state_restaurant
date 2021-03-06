import { combineReducers } from 'redux'

import {
    userReducer
} from './User/user.reducers'

import {
    foodReducers,
    singleFoodReducer
} from './Food/food.reducers'

import {
    cartReducer
} from './Cart/cart.reducers'

import {
    orderReducer,
    userOrdersReducers
} from './Order/order.reducers'


import {
    userReviewReducer,
    userReviewStatusReducer,
    reviewsReducer
} from './Review/review.reducers'

import {
    adminReducer,
    adminDashbordStatusReducer
} from './Admin/admin.reducers'

const rootReducers = combineReducers({
    auth: userReducer,
    foods: foodReducers,
    singleFood: singleFoodReducer,
    cart: cartReducer,
    order: orderReducer,
    reviews: reviewsReducer,
    myOrders: userOrdersReducers,
    myReview: userReviewReducer,
    myReviewStatus: userReviewStatusReducer,
    admin: adminReducer,
    adminStatus: adminDashbordStatusReducer
})

export default rootReducers