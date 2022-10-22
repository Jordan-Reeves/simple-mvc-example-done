const mongoose = require('mongoose');

let CatModel = {};

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  bedsOwned: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});
// Create the cat model based on the schema. You provide it with a custom discriminator
// (the name of the object type. Can be anything)
// and the schema to make a model from.
// Look at the model variable definition above for more details.
CatModel = mongoose.model('Cat', CatSchema);

// We only want to export the cat model, so we can overwrite the entire exports object.
module.exports = CatModel;
