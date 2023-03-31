const mongoose = require("mongoose");
const URL = "mongodb+srv://Pranav:Pranav1234@cluster0.lrt9fqm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, {
    serverSelectionTimeoutMS: 120*1000 
  }).catch(err => {console.log(err.message)})
const db = mongoose.connection;
db.on("open", () => {
    console.log("Database connected")
} );

