const express = require('express')
const app = express()
app.use(express.json());
const port = 3003

// app.get('/', (req, res) => {
//     const {name} = req.query
//   res.send(`Hello ${name}!`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.post('/', (req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(json_data));
})
 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 })

