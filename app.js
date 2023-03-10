let express = require('express')
let app = express();
let fs = require('fs')
let cors = require('cors')
app.use(cors());
let port =process.env.PORT|| 4000;

app.get('/', (req, res) => {
    fs.readFile('readme.md', 'utf-8', (err, result) => {
        res.send(result)
})
})

// =1=======location========
app.get('/location', (req, res) => {
    fs.readFile('location.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////

app.get('/product', (req, res) => {
    fs.readFile('products.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==2=======Grocery=========
app.get('/grocery', (req, res) => {
    fs.readFile('grocery.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//====3====Electronics product=========

app.get('/electronics', (req, res) => {
    fs.readFile('electronics.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===4====Furniture.& more=======
app.get('/furniture', (req, res) => {
    fs.readFile('furniture.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})

//=5==Winter EssentialsWinter Essentials======
app.get('/essentialswinter', (req, res) => {
    fs.readFile('essentialswinter.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==6========weddinggifts=============
app.get('/weddinggifts', (req, res) => {
    fs.readFile('weddinggifts.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==7=======Sports==============
app.get('/sports', (req, res) => {
    fs.readFile('sports.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==8======dress========
app.get('/dress', (req, res) => {
    fs.readFile('dress.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===9=========kitchen============
app.get('/kitchen', (req, res) => {
    fs.readFile('kitchen.json', 'utf-8', (err, result) => {
        res.send(result)
    })
})
app.listen(port, () => {
    console.log('server started')
})
