const express = require('express');
const mongoose= require('mongoose');
//const { default: mongoose } = require('mongoose');
//const MongoClient = require('mongodb').MongoClient
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
//const PORT = process.env.PORT|| 8080;

const routes = require('./routes/api');
const routeULs=require('./routes/user');
const authRoutes = require("./routes/auth");

//const MONGODB_URI = 'mongodb+srv://oakcard:oakcard123@oakcard.3hild.mongodb.net/FoodCards?retryWrites=true&w=majority'mongoose.connect(MONGODB_URI ||'mongodb://localhost/my-app',{
   // useNewUrlParser:true,
   // useUnifiedTopology:true
//}

//);
dotenv.config()


mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"));


/*mongoose.connection.on('connected', ()=>{
    console.log('Atlas is connected!');
});*/

// //Schema
// var foodcardsSchema = new mongoose.Schema({
//     Cardobject:[{
//         Rarity:String,
//         Duration:String,
//         Generation:String,
//         Depletion:String,
//         Card_Name:String,
//         Card_Type:String
//     }],
//     CardBelonging:String
// },{collection:'foodcards'})

// //model
// var foodcards = mongoose.model('foodcards',foodcardsSchema);
//Data parsing
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);
app.use('/app', routeULs)
app.use("/app", authRoutes);

//Routes
// app.get('/api',(req,res)=>{
//    const data={
//        username: 'accimeesterlin',
//        age:5
//    };

// foodcards.find({})
//   .then ( (data) =>{
//        console.log('Data: ',data);
//        res.json(data);
//   })
//   .catch( (error)=>{
//       console.log('Data: ',daerrorta);
//   }

//   );

   
// });

// app.get('/api/name',(req,res) =>{
//     const data ={
//         username: 'peterson',
//         age:5
//     };
//     res.json(data);
// });

app.listen(8080, () => console.log("server is up and running"));