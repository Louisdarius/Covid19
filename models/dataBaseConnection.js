require("dotenv").config();
const mongoose = require("mongoose");
module.exports = mongoose
  .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DATABASE CONNECTION OPENED!!!");
  })
  .catch((err) => {
    console.log(" OH OH THERE WAS AN ERROR CONNECTING TO THE DATABASE !!!!");
    console.log(err);
  });

//     const mongoose = require ("mongoose"),
//   env = require ("./ configEnv");
// module.exports = mongoose.connect (env.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: true,
// });
