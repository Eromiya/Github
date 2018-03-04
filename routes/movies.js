var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb').MongoClient;
var db1;
console.log("mongoClient = " + mongoClient);
mongoClient.connect("mongodb://test:test@ds155278.mlab.com:55278/projector_st",function(err,connection){
    console.log("connection= "+connection);    
    console.log(err)
db1=connection.db("projector_st");

})
router.get('/all', function(req, res, next) {
    var moviesCollection=db.collecton("movies")
    moviesCollection.find().toArray(function(err,data){
        res.json(data);

})
});
router.get('/:moviename', function(req, res, next) {
    console.log(req.params.moviename);
    res.json({
        "name":req.params.moviename
    })
  });
  
 // router.get('/interstellar', function(req, res, next) {
  //  res.send('interstellar displayed');
    //}); 
  
    //router.get('/black_panther', function(req, res, next) {
      //  res.send('black panther displayed');
        //});   ++**
        router.post('/addmovie',function(req,res,next){
            console.log(req.body);
            res.json({
                isSuccess: true
            })
        });

module.exports = router;
