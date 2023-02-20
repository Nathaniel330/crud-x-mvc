const express = require('express')
const app = express()
const connectDB = require('./config/database')
const PORT = 3000
const rootRoutes = require('./routes/root')
const level1Routes = require('./routes/level1')


connectDB() //cluster - cluster0; db - test; collections - tests / objects

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes
app.use('/', rootRoutes)
app.use('/level1', level1Routes)

app.listen(process.env.PORT || PORT, () => {
    console.log(`connected to port ${PORT}`)
})