const express = require('express');
const app = express();

//Exercise1
app.get('/Didier',(request, response)=>{
    response.send('Didier created a server here')
});

//Exercise2
app.post('/post',(request, response)=>{
    response.send('Didier got a POST request!!!')
});

//Exercise3
app.use(express.static('public'));

app.listen(8000, () =>{
    console.log("Server is running...")
});