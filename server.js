require('dotenv').config()
const cors = require('cors')
const session = require('express-session')
const express = require('express')
const cityRoutes = require('./controllers/cityController')
const postRoutes = require('./controllers/postController')

const port = process.send.PORT || 4000
const app = express()

///////////// Middleware /////////////
app.use(cors())
app.use(session({ secret: process.env.SESSION_SECRET }))
app.use(express.json())
app.use('/cities', cityRoutes)
app.use('/post', postRoutes)
// app.post('/')

/////////////////////////Routes/////////////////////////
// Signup Route - Shows a Signup Form
app.get('/signup', (req, res) => {
    res.render('signup.ejs');
  });
  
  
  
  app.post('/signup', (req, res) => {
    console.log(req.body);
    db.User.create(req.body, (err, createdUser) => {
      if (err) console.log(err);
  
      console.log(createdUser);
      res.redirect('/');
    });
  })
  
  
  app.get('/', (req,res) => {
      console.log(req.session)
      res.render('login.ejs')
  })
  
  
  app.post('/', (req, res) => {
    console.log(req.body);
    db.User.findOne({ userName: req.body.userName }, (err, foundUser) => {
  
      if (err) return console.log(err);
      if (!foundUser) {
        return res.redirect('/');
      }
      if (req.body.password !== foundUser.password) {
        return res.redirect('/');
      }
      req.session.currentUser = foundUser;
  
      console.log(req.session);
      res.redirect(`/user/${req.session.currentUser._id}`);
    })
  })
  
  ///Logout Route
  app.get('/logout', (req, res) => {
    req.session.destroy();
    console.log("you're logged out")
    res.redirect('/');
  })
    

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})