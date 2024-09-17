const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => { 
    return res.sendFile(path.join(__dirname,'views', 'home.html'))
});

app.listen(PORT, () => console.log("Server running in http://localhost:" + PORT));
