const express = require('express');
const { default: mongoose } = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://oakcard:oak@oakcard.3hild.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/my-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

);

mongoose.connection.on('connected', () => {
    console.log('Atlas is connected!');
});

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
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

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

app.listen(PORT, console.log(`Server is starting at ${PORT}`));