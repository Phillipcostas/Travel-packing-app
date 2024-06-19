const express = require('express');
const router = express.Router();

const User = require('../models/user.js')



router.get('/showCategories', async (req, res) => {
  try {
    const user = await User.find({_id:req.session.user._id});
    const suitcase = user[0].suitcase;
    console.log(user)
    res.render('items/showCategories.ejs', {suitcase:suitcase, user:user[0]});
  } catch (error) {
    console.log(error)
    }
})

router.get("/edit", async (req, res) => {
  const user = await User.find({_id:req.session.user._id});
  const foundItem = await User.findById(req.params.itemsId);
  res.render("items/edit.ejs", {user:user}, {
    item: foundItem
});
});



router.put("/:itemsId/edit", async (req, res) => {
  console.log(req)
  if (req.body.isPacked === "on") {
    req.body.isPacked = true;
  } else {
    req.body.isPacked = false;
  }
  await suitcase.findByIdAndUpdate(req.params.itemsId, req.body);
  res.redirect(`items/showCategories.ejs`);
});












module.exports = router; 


// router.get('/suitcase/:category', async (req, res) => {
//   const currentUser = await User.findById(req.session.user._id)

//   const suitcase = currentUser.suitcase

//     // if (req.body.isPacked === 'on') {
//     //   req.body.isPacked = true;
//     // } else {
//     //   req.body.isPacked = false;
//     // }

//     console.log(currentUser)
//     console.log(suitcase)

//   res.render('items/category.ejs', {
//     category: suitcase,
//   });
// })

// router.get('/suitcase/:itemsId/edit', async (req, res) => {
//   try {
//     const currentUser = await User.findById(category);
  
//     const suitcase = currentUser.suitcase;
//     res.render('items/edit.ejs', {
//       suitcase: suitcase,
//     });
//   } catch (error) {
//     console.log(error);
//     res.redirect('/')
//   }
// })
// router.delete('/suitcase/:itemsId', async (req, res) => {
  //   try {
  //   const currentUser = await User.findById(req.session.user._id);
  //   currentUser.pantry.id(req.params.foodId).deleteOne();
  //   await currentUser.save();
  //   res.redirect(`/users/${currentUser._id}/items`)
  //   } catch (error) {
  //     console.log(error);
  //     res.redirect('/');
  //   }
  // })
  
  
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
  
  
// router.put('/suitcase/:itemsId', async (req, res) => {
//   try {
//     const currentUser = await User.findById(req.session.user._id);
//     const items = currentUser.items.id(req.params.itemsId);
//     console.log(req.body, 5566)
//     items.set(req.body);
//     console.log(items)
//     await currentUser.save();
//     res.redirect(
//       `/users/${currentUser._id}/showCategories/${req.params.itemsId}`
//     );
//   } catch (error) {
//     console.log(error);
//     res.redirect('/')
//   }
// });


// 

  