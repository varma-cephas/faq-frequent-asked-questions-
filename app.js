const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res)=>{
    res.render('pages/index.ejs')
})

app.listen(port, ()=>{
    console.log(`The app is listening on localhost:${port}`)
})
