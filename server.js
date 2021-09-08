require('dotenv').config()
const cors = require('cors')
const express = require('express')
const cityRoutes = require('./controllers/cityController')
const postRoutes = require('./controllers/postController')

const port = process.send.PORT || 4000
const app = express()

///////////// Middleware /////////////
app.use(cors())
app.use(express.json())
app.use('/cities', cityRoutes)
app.use('/post', postRoutes)
// app.post('/')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})