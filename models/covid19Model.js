const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

      const Covid19 = new Schema({
          date:{
              type: Date,
              required: false,
              default: Date.now
          },
          country: {
              type: String,
              required: true
          },
          state:{
              type: String,
              required: true
          },
          cases: {
              type: Number,
              required: true
          },
          deaths: {
              type: Number,
              required: false,
              default: 0
          }
      });

      module.exports = mongoose.model('Covid19', Covid19);