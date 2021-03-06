const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookeParser = require('cookie-parser')
const dotenv = require('dotenv')
const expressFileUploader = require('express-fileupload')
const path = require('path')


//app setup
const app = express()

//bodyParser parse application/json
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 
const midleware = [
    morgan('dev'),
    cors(),
    cookeParser('SECRET')
]

app.use(midleware)

// static file
app.use(express.static("public"))

if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: 'server/config/.env' })
}


// import routers
const userRoute = require('./routers/user.router')
const foodRoute = require('./routers/food.router')
const orderRoute = require('./routers/order.router')
const reviewRouter = require('./routers/review.router')


// use routers
app.use('/api/user', userRoute)
app.use('/api/food', foodRoute)
app.use('/api/order', orderRoute)
app.use('/api/review', reviewRouter)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
    })
}

module.exports = app