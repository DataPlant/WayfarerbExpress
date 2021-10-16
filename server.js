require('dotenv').config()
const cors = require('cors')
const express = require('express')
const cityRoutes = require('./controllers/cityController')
const postRoutes = require('./controllers/postController')
const app = express()

const port = process.env.PORT || 4000


///////////// Middleware /////////////
app.use(cors())
app.use(express.json())
app.use('/cities', cityRoutes)
app.use('/post', postRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})