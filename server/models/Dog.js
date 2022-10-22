const mongoose = require('mongoose');

// cat blueprint/schema
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // cut out white space
    required: true,
    unique: true,
  },
  breed: {
    type: String,
    trim: true, // cut out white space
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now, // will run function when data created
  },
});

// takes a name and scheme
// checks for existing cat model if not it will make one
const DogModel = mongoose.model('Dog', DogSchema);
module.exports = DogModel;
