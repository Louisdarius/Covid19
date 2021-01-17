require('dotenv').config();

const express              = require('express'),
      bodyParser           = require('body-parser'),
      mongoose             = require('mongoose'),
      Cors                 = require('cors'),
      DatabaseConnection   = require('./models/dataBaseConnection'),
      Covid19              = require('./models/covid19Model'),
      CovidRouter          = require('./routes/covidRoutes'),
      App                  = express();



      // Utilities
      App.use(bodyParser.urlencoded({extended: true}));
      App.use(bodyParser.json())
      App.use(Cors());
      App.use('/', CovidRouter);


      App.listen(process.env.PORT, () => {
          console.log('COVID19 APP STARTED ON PORT 5000')
      }
      );










