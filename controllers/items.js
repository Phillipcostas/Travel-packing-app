const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

router.get('/show', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('items/show.ejs', {
        pantry: currentUser.pantry,
      });
    } catch (error) {

      console.log(error)
      res.render("something!")
    }
  });


//   router.get('/new', async (req, res) => {
//     res.render('items/show.ejs')
// });

module.exports = router; 