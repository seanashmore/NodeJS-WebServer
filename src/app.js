const path = require('path')
const express = require('express')
const app = express()

const pubDir = path.join(__dirname,'../public')
app.use(express.static(pubDir))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Centre of the sun',
        location: 'Belfast'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})