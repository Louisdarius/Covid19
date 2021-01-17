const express    = require('express'),
      OS         = require('os'),
      Util       =require('util'),
      Covid19    = require('../models/covid19Model'),
      Router     = express.Router();


      // Find all Covid records
      Router.get('/read', (req, res) => {

        Covid19.find({}, (err, covid19Records)=>{
            if(err){
                console.log(err);
            } else{
              res.json(covid19Records);   
              
            }
        }).sort({$natural: -1}) ;
        
      });


      // Get a specific record
      Router.get('/covid/:id', (req, res) => {
        const covid = req.params.id;
        Covid19.findById(covid, (err, foundCovid) => {
          if(err){
            console.log(err);
          } else {
            res.json(foundCovid);
          }
        }); 
      });


      // Receive an object from the front-end and creates a covid record
      Router.post('/create', (req, res) => {
        
        // Create a covid record using data received from the front-end
        const covid = req.body;

        Covid19.create(covid, (err, createdCovid) => {
          if(err){
            console.log(err);
          }else{
            res.json(createdCovid);
          }
        });  
       });

       // Updating a record
       Router.put('/update/:id', (req, res) => {
         const id = req.params.id;
         const covid = req.body;
         Covid19.findByIdAndUpdate(id, covid, (err, updatedCovid) => {
           if(err){
             console.log(err);
           } else{
             res.json(covid);
           }
         });
       });

      // Delete a Covid record
       Router.delete('/delete/:id', (req, res) => {
         const covid = req.params.id;
         Covid19.findByIdAndRemove(covid, (err, deletedRecord) => {
           if(err){
             console.log(err);
           } else{
             res.json(deletedRecord);
           }
         });

       });

       Router.get('/computerInfo', (req, res) => {

        const computerInfo = {
          computerName: OS.hostname(),
          system: OS.platform(),
          release: OS.release(),
          upTime: ` ${(OS.uptime())/3600} Hours`,
          userInfo: Util.inspect(OS.userInfo()),
          memory: ` ${OS.totalmem()/1000000000} Giga byte `,
          freeMemory: ` ${OS.freemem()/1000000000 } Giga byte`,
          cpu: Util.inspect(OS.cpus()),
          network: Util.inspect(OS.networkInterfaces())
        };
        res.json(computerInfo);
       });

       // Count the total number of documents in the collection
       Router.get('/totalRecords', (req, res) =>{
          Covid19.find({}, (err, allRecords) =>{
            if(err){
              console.log(err)
            } else{
              res.json(allRecords);
            }
          }).count();
       });

       // Display first 20 documents from the covid data base for a given date and state.
       Router.post('/dateRecords', (req, res) =>{
         const dateRequested = req.body.date;
         const stateRequested = req.body.state;

         Covid19.find ( { $and: [ { state: { $eq: stateRequested } }, { date: { $eq: dateRequested } } ] }, (err, dateRecords) =>{
           if(err){
             console.log(err);
           } else{
             res.json(dateRequested);
           }
         }).limit(20);
     });




      // 
    //   Router.get('/dateRecords', (req, res) =>{
    //     const countryRequested = req.body.country;
    //     const stateRequested = req.body.state;

    //     // db.users.aggregate({
    //     //   $match: {age: {$gte:18}  }},
    //     //   $group: {_id:{username:$username, age:$ge}, 'count':{$sum:1} }        
    //     // })

    //   const data = db.Covid19.aggregate(
    //       [ 
    //         { $match : { country: countryRequested , state: stateRequested} },
    //         { $group: { _id: {cases: $cases, deaths: $deaths }, 'count': { $sum: 1 } } }
    //        ]
    //   );
    
    // });


       
      module.exports  = Router;