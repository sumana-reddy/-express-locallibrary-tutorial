const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true},
  family_name: { type: String, required: true},
  date_of_birth: { type: Date }
});

module.exports = mongoose.model('Author', AuthorSchema);