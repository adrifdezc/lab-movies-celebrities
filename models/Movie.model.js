//  Add your code here
const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);