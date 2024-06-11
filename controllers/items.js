const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

let tooletries = [
  { name: 'Toothbrush', packed: false },
  { name: 'Tooth Paste', packed: false },
  { name: 'Body Wash', packed: false },
  { name: 'Shampoo', packed: false },
  { name: 'Deoderant', packed: false },
  { name: 'Hair Brush', packed: false },
  { name: 'Make-up', packed: false },
];

let essentials = [
  { name: 'Drives License', packed: false },
  { name: 'Passport', packed: false },
  { name: 'Phone Charger/cord', packed: false },
  { name: 'Medications', packed: false },
  { name: 'Epi-pen', packed: false },
  { name: 'Boarding Pass Downloaded', packed: false },
  { name: 'T-shirts', packed: false },
];

let specialityClothes = [
  { name: 'Dress', packed: false },
  { name: 'Suit', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
];

let jackets = [
  { name: 'Rain Jacket', packed: false },
  { name: 'Light Jacket', packed: false },
  { name: 'Ski Jacket', packed: false },
  { name: 'Hoodie', packed: false },
  { name: 'Sweater', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
];

let lounge = [
  { name: 'Athletic Shorts', packed: false },
  { name: 'T-shirts', packed: false },
  { name: 'Pajamas', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
  { name: '', packed: false },
];


app.get('/suitcase', (req, res) => {
  res.render('items/show.ejs', { items: tooletries, items: essentials, items: specialityClothes, items: jackets, items: lounge});
});



router.get('/show', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      console.log(essentials)
      res.render('items/show.ejs', {
        suitcase: currentUser.suitcase,
        tooletries: tooletries,
        essentials: essentials,
        specialityClothes: specialityClothes,
        jackets: jackets,
        lounge: lounge,
      });
    } catch (error) {

      console.log(error)
      res.render("something!")
    }
  });

  app.post('/edit', (req, res) => {
    const updatedItems = req.body;
    Object.keys(updatedItems).forEach(itemId => {
        const itemIndex = clothesList.findIndex(item => item.id === parseInt(itemId));
        if (itemIndex !== -1) {
            suitcase[itemIndex].packed = true;
        }
    });
    res.redirect('/');
  });


  router.get('/suitcase/:itemsId/edit', async (req, res) => {
    try {
      const currentUser = await User.findById(req.session.user._id);
      const suitcase = currentUser.suitcase;
      res.render('items/edit.ejs', {
        suitcase: suitcase,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/')
    }
  })


router.put('/suitcase/:itemId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const suitcase = currentUser.suitcase.id(req.params.itemId);
    suitcase.set(req.body);
    // console.log(req.body)
    await currentUser.save();
    res.render('items/edit.ejs', {
      items: suitcase,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/')
  }
});
 



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