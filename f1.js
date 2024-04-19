const fs = require('fs')
const express = require('express');
//const bodyParser = require('body-parser')
const app = express();
//app.use(bodyParser.json())
app.use(express.json());
const PORT = 3005;

app.post('/',(req, res) => {
        const data = req.body;
        res.status(200).send(JSON.stringify(data));
        fs.writeFile('response.json', JSON.stringify(data, null, 8), (err) => {
            if(err){
                throw err;
            }
            console.log("File Successfully written")

            fs.readFile('response.json',(err, data) => {
                if(err){
                    throw err
                }
                const d = JSON.parse(data)
                console.log("Data Reading");
                console.log(d);

            } )
        })
	})
   
app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
       })

