const mongoose = require('mongoose');

itemSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    packed: {
        type: String,
        isPacked: Boolean,
    },
});

categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    items: {
       type: [itemSchema],
      
    },
});
   

userSchema = mongoose.Schema
({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    suitcase: {
       type: [categorySchema],
    default: 
    [
        {
            name: 'toiletries', 
            items:  [
                {name: 'Toothbrush', packed: false},
                {name: 'Tooth Paste', packed: false},
                {name: 'Body Wash', packed: false},
                {name: 'Shampoo', packed: false},
                {name: 'Deoderant', packed: false},
                {name: 'Hair Brush', packed: false},
                {name: 'Make-up', packed: false},
             ]  
        },
        {
            name: 'essentials', 
            items:    [
                {name: 'Drivers License', packed: false},
                {name: 'Passport', packed: false},
                {name: 'Phone Charger/Cord', packed: false},
                {name: 'Medications', packed: false},
                {name: 'Epio-Pen', packed: false},
                {name: 'Boarding Pass Downloaded', packed: false},
           ]
        },
        {
            name: 'SpecialityClothes', 
            items:    [
                {name: 'Dress', packed: false},
                {name: 'Suit', packed: false},
                {name: '', packed: false},
                {name: '', packed: false},
                {name: '', packed: false},
                {name: '', packed: false},
           ]
        },
        {
            name: 'Jackets', 
            items:    [
                {name: 'Rain Jacket', packed: false},
                {name: 'Light Jacket', packed: false},
                {name: 'Ski Jacket', packed: false},
                {name: 'Hoodie', packed: false},
                {name: 'Sweater', packed: false},
                {name: 'Something', packed: false},
           ]
        },
        {
            name: 'lounge', 
            items:    [
                {name: 'Athetic Shorts', packed: false},
                {name: 'T-Shirts', packed: false},
                {name: 'Pajamas', packed: false},
                {name: '', packed: false},
                {name: '', packed: false},
                {name: '', packed: false},
           ]
        },
    ]
    
}
})


const User = mongoose.model('User', userSchema);
module.exports = User;
