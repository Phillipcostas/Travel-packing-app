const express = require('express');
const router = express.Router();

const User = require('../models/user.js')


// const categories = await User.find()[0].suitcase;


router.get('/suitcase', (req, res) => {
  res.render('items/showCategories.ejs', )})


router.get('/showCategories', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      res.render('items/showCategories.ejs', {
    
      });
    } catch (error) {

      console.log(error)
      res.render("something!")
    }
  });


  router.get('/suitcase/:itemsId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(category);
      const suitcase = currentUser.suitcase;
      res.render('items/edit.ejs', {
        suitcase: suitcase,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/')
    }
  })

 router.get('/suitcase/:category', async (req, res) => {
    const currentUser = await User.findById(req.session.user._id)

    const suitcase = currentUser.suitcase

      // if (req.body.isPacked === 'on') {
      //   req.body.isPacked = true;
      // } else {
      //   req.body.isPacked = false;
      // }

      console.log(currentUser)
      console.log(suitcase)

    res.render('items/category.ejs', {
      category: suitcase,
    });
  })

  // app.put('/items/suitcase/:category', async (req, res) => {
  //      await User.find(User._id).suitcase.categoryId(itemId) = {

  //     if (req.body.isPacked === 'on') {
  //       req.body.isPacked = true;
  //     } else {
  //       req.body.isPacked = false;
  //     }
  //      })
  //      res.render('/items/category')



router.delete('/suitcase/:itemsId', async (req, res) => {
  try {
  const currentUser = await User.findById(req.session.user._id);
  currentUser.pantry.id(req.params.foodId).deleteOne();
  await currentUser.save();
  res.redirect(`/users/${currentUser._id}/items`)
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
})


  router.post('/', async (req, res) => {
    try {
      console.log(req.body)
        const currentUser = await User.findById(req.session.user._id); 
        currentUser.suitcase.push(req.body);
        await currentUser.save()
        res.redirect(`/users/${currentUser._Id}/items`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
})




module.exports = router; 
