require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cityRoutes = require('./routes/cityRoutes')
const postRoutes = require('./routes/postRoutes')

const port = process.send.PORT || 4000
const app = express()

//middleware ifeiwjefowejofijweiof
app.use(cors());
app.use(express.json())
app.use('/cities', cityRoutes)
app.use('/post', postRoutes)
// app.post('/')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})