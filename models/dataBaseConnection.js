const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.MONGO_ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DATABASE CONNECTION OPENED!!!")
    })
    .catch(err => {
        console.log(" OH OH THERE WAS AN ERROR CONNECTING TO THE DATABASE !!!!")
        console.log(err)
    });
