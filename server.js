const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const bodyParser = require('body-parser') 
const mongoose = require('mongoose') 
const path = require('path')

const app = express() 

// Middlewere 
app.use(cors()) 
app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 


// Routers 
app.use('/api/admin', require('./Routes/adminRoutes')) 
app.use('/api/users', require('./Routes/userRoutes')) 
app.use('/api/tutorials', require('./Routes/tutorialRoutes')) 
app.use('/api/posts', require('./Routes/postRoutes')) 


// production environment 
if(process.env.NODE_ENV) { 
    app.use(express.static('client/build')) 
    app.get('*', (req, res) => { 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) 
    }) 
} 


// Port Number
const PORT = process.env.PORT || 4000 

app.listen(PORT, () => { 
    console.log('App is on fire'); 
    mongoose.connect(`mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@dietcluster-qkrmh.mongodb.net/test?retryWrites=true&w=majority`, 
    {useNewUrlParser: true}, 
    () => { 
        console.log('Database Running'); 
    }); 
}) 

