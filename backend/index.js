const express = require('express')
const app = express()
const PORT = 5000
const run = require("./db")

run().catch(console.dir);

app.get('/' , (req , res) =>{
    res.send("Hello world")
})
app.listen(PORT , () =>{
    console.log(`app listening at port ${PORT}`)
})
