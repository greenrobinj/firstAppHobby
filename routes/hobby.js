var express = require('express');
var router = express.Router();

var hobby = [
  { id: 1, title: 'Soccer' },
  { id: 2, title: 'Movies' },
  { id: 3, title: 'EATTING' }
]

/* GET movie listings. */
router.get('/', function(req, res) {
  Hobby.all()
    .then( function(req, res){
      return res.render('hobby',{hobby: hobby})
    })
});

// POST add movie listing
router.post('/', function(req, res){
  var title = req.body.title;
  Hobby.create({ title: title})
  .then( function(){
    res.redirect('/hobby');
  })
})


module.exports = router;