const express = require ('express')
const router = express.Router()
const Proposal = require ('../models/Proposal');
const User = require('../models/User');

// console.log(`kevin says hi`)

router.get('/', (req, res, next) => {

  Event.find()
  
  .then( events => {
      console.log(proposals);
      return res.status(200).json(events);
    })
    .catch(err => {
      return res.status(500).json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {

    Proposal.findById(req.params.id)
    // .populate('attendees') <-add in once like system in place

    .then( proposal => {
      console.log(proposal)
      if ( !proposal ) {
        console.log('no project');
        return res.status(404).json(proposal);
      } else {
        return res.status(200).json(proposal);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    })
});

// create a project
router.post('/', (req, res) => {
  
  const {    
    title,
    date,
    owner,
    startTime,
    endTime,
    description,
    image,
    maxCapacity,
    googleLink
  
  } = req.body;

  // if ( title.length < 5 ) {
  //   console.log(`title too short`)
  //   return res
  //     .status(400)
  //     .json({ message: 'lol, your title must be longer' });
  // }

    console.log(req.body, "this is from backend");
  // const owner = req.user._id;

  Proposal.create({
    title,
    description,
  })
    .then(proposals => {
      User.findByIdAndUpdate (owner, {$push:{proposalsCreated:proposals._id}}).then (proposal => {
      console.log(proposal, "this is db")
      return res.status(201).json(proposal);
      });
    })
    .catch(err => {
      return res.status(500).json(err);
    })
})



// update a project
router.put('/:id', (req, res, next) => {
  const { title,date, startTime,endTime, description, image, googleLink, maxCapacity } = req.body;
  Proposal.findByIdAndUpdate(
    req.params.id,
    { title,date, startTime, endTime, description, image, googleLink, maxCapacity },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(event => {
      console.log(event);
      return res.status(200).json(event);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    })
});


router.delete('/:id', (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(event => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;

//For adding a user to a proposal (i.e. liking it)
// router.put('/join/:id', (req, res, next) => {
//   console.log(req.user);
//    Event.findByIdAndUpdate(
//      req.params.id,
//      { $push:{attendees:req.user._id}},
//      // this ensures that we are getting the updated document as a return 
//      { new: true }
//    )
//      .then(proposal => {
//        User.findByIdAndUpdate(
//          req.user._id,
//          { $push:{proposalsAttended:proposal._id}},
//          // this ensures that we are getting the updated document as a return 
//          { new: true }
//        ).then (user=>{
//          console.log(proposal);
//        return res.status(200).json(proposal);
//        })
//      })
//      .catch(err => {
//        console.log(err);
//        return res.status(500).json(err);
//      })
 
//    })