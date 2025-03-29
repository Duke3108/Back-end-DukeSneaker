const express = require('express')
const app = express()
const cors = require("cors");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRoute = require('./routes/product')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("db connected")).catch((err) => console.log(err))

app.use(cors());
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/api/', authRoute)
app.use('/api/product', productRoute)
app.use('/api/order', orderRoute)
app.use('/api/cart', cartRoute)
app.use('/api/user', userRoute)


app.listen(process.env.PORT || port, "0.0.0.0", () => console.log(`Example app listening on port ${process.env.PORT}!`))