const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//Middleware
app.use((req,res,next)=>{
    console.log("Logged")
    next()
})

//Middleware 2
app.use((req,res,next)=>{
    console.log("Logged")
    next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})