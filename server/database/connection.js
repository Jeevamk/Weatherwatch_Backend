const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jeevamk100:jeeva8839@cluster0.pbixvru.mongodb.net/weatherwatch?retryWrites=true&w=majority')
.then(() =>{
    console.log(`connect`);
})
.catch((err) => {
    console.log(err);
})