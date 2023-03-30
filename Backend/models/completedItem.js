const mongoose = require('mongoose');

const completedItemSchema = new mongoose.Schema(
    {
        text : {
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("completedItem", completedItemSchema);