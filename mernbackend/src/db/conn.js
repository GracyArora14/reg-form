const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gr4059:Jaishiv@14@cluster0.ji2qdsj.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})