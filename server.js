const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const cityRoutes = require('./controllers/cityController')
const postRoutes = require('./controllers/postController')

const port = process.env.PORT || 4000
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

///////////// Middleware /////////////
app.use(cors())
app.use(express.json())
app.use('/cities', cityRoutes)
app.use('/post', postRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

