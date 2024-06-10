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



  router.get('/suitcase/:itemsId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      // console.log(currentUser)
      const suitcase = currentUser.suitcase.id(req.params.itemsId);
      res.render('items/edit.ejs', {
        items: suitcase,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/')
    }
  })


router.get('/suitcase/itemsId/edit', async (req, res) => {
  items: [
    category, String,
  ]
});
 


//   router.post('/', async (req, res) => {
//     try {
//       console.log(req.body)
//         const currentUser = await User.findById(req.session.user._id); 
//         currentUser.suitcase.push(req.body);
//         await currentUser.save()
//         res.redirect(`/users/${currentUser._Id}/items`);
//     } catch (error) {
//         console.log(error);
//         res.redirect('/');
//     }
// })

module.exports = router; 