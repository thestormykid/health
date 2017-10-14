var mongoose = require('mongoose');

var userSchema = mongoose.schema({

  name: String
});

module.exports = mongoose.model('User', productSchema);
