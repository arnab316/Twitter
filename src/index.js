import express from 'express'
import {connect} from './config/database.js'
import bodyParser from 'body-parser'
import apiRoutes from './routes/index.js' 
import passport from 'passport'
import {passportAuth} from './config/jwt-middleware.js'
const app = express()
const port = 4015
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', apiRoutes);
app.use(passport.initialize());
passportAuth(passport);



app.listen(port, async() => {
    console.log(`listening on ${port}`);
    await connect().then(() => console.log('mongo db connect'))
    .catch(() => console.log(' cant connect database'));
      

   
})


