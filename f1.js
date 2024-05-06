const fs = require('fs')
const express = require('express');
//const bodyParser = require('body-parser')
const app = express();
//app.use(bodyParser.json())
app.use(express.json());
const PORT = 3005;

app.post('/',(req, res) => {
        const data = req.body;
        fs.writeFile('response.json', JSON.stringify(data, null, 8), (err) => {
            if(err){
                throw err;
            }
            console.log("File Successfully written")
        })
        res.status(200).send(JSON.stringify(data));
	})

    app.get('/', (req,res) => {
        const data = req.body;
        fs.readFile('response.json', (err,data) =>{
            if(err) {
                throw err
            }
          res.send((data))
        })
    })
   
app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
       })

