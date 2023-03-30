const mongoose = require('mongoose');

const activeItemSchema = new mongoose.Schema(
    {
        text : {
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("activeItem", activeItemSchema);