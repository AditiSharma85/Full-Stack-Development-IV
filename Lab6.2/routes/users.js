var express = require('express');
var bodyParser=require('body-parser')
var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/',function(req,res,next){
  let firstname =req.body.firstname;
  let lastname=req.body.lastname;
  console.log(`First name: ${firstname} , LAstname: ${lastname}`);
  res.send('POST Recieved!');
});

module.exports = router;


