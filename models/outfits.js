// uses same object as prev requires, doesnt exec the file again
const mongoose = require('mongoose');
// Schema maps to a a collection and defines shape of the documents inside it
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    img: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})

// Models are constructors compiled from a schema, documents are instances of models.
// Models create and read documents from mongodb database.
// model() = Mongoose compiles a model from a schema
//  First argument = singular name of the collection your model is for (Mongoose automatically looks for the plural, lowercased version of your model name and I have a outfits collection in my trendy db)
const Outfits = mongoose.model('Outfits', outfitSchema);

// exports is a property inside module object and you assign something to it (to export it and use it in other files)
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports = Outfits;