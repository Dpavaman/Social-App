const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000


app.get('/', (req, res)=>{
    res.status(200).send("Hello World!")
})

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username : 'pavamandabeer',
        followers : '100',
        follows : '400',
        date : Date.now()
    };

    res.status(200).json(instaSocial)
})

app.get("/api/v1/facebook", (req, res)=>{
    const instaSocial = {
        username : 'pavamandabeer',
        followers : '70',
        follows : '150',
        date : Date.now()
    };

    res.status(200).json(instaSocial)
})

app.get("/api/v1/linkedin", (req, res)=>{
    const instaSocial = {
        username : 'pavamandabeer',
        followers : '150',
        follows : '30',
        date : Date.now()
    };

    res.status(200).json(instaSocial)
})

app.listen(PORT, ()=>{
    console.log(`Server is Up and running at port ${PORT}`)
})