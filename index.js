const express = require('express');
const app = express();
const fs = require('fs');
app.listen(3000, () => {console.log('listening at port 3000')});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'})); //protecting server with a lot of data

const allData = [];

app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body
    allData.push(data);
    response.json({
        status: 'Success',
        data: data
    });
    console.log(data);
    
})

//save latitude and longitude in an array save that data in a text file using fs