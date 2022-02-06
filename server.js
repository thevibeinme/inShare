require('dotenv').config() ;
const express = require('express') ;
const app = express() ;




const PORT  = process.env.PORT||3000 ;

// DATABASE CONFIGURATION

const mongoose =  require('mongoose') ;

const dbUrl = process.env.MONGO_CONNECTION_URL;
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
  
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
}); 




app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)

})