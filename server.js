const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();

//const items = require('./routes/api/items');
const getTestSeriesApi = require('./routes/api/testseries/GETApi');
const postTestSeriesApi = require('./routes/api/testseries/POSTApi');

//const postAuth = require('./routes/api/auth/POSTApi');
//const getAuth = require('./routes/api/auth/GETApi');

const app = express();

app.use(cors({
        credentials: true,
        origin: [
            'http://localhost:3000'            
        ]
    }));

app.use(bodyParser.json());




//DB config
const URI= process.env.mongoURI;

mongoose
	.connect(URI, {useNewUrlParser:true, useUnifiedTopology:true})
	.then(()=> console.log('Mongo DB connected...:)'))
	.catch((err) => console.log("Here is the Error with Mongo"+ err));

//using middleware to authenticate correct calling user application
/*app.use(function(req, res, next){
	if(req.body.apikey == )
});
*/

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');  
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Methods', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


//use Routes
app.use('/testseries/get/', getTestSeriesApi);
app.use('/testseries/post/', postTestSeriesApi);

app.use('/auth/get/', require('./routes/api/auth/GETApi'));
app.use('/auth/post/', require('./routes/api/auth/POSTApi'));




//page not found with 404
app.use((req, res, next)=>{
	var err = new Error('Page not Found');
	err.status = 404;
	next(err)
});

//handling errors
app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.send(err.message);
})

const port = process.env.PORT || process.env.APP_PORT;

app.listen(port, ()=>console.log('server stared at port ' + port ));