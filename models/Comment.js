
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String, 
        required: true
    },
    
   
}, {timestamps: true});




const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;