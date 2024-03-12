const express = require("express")
const app =  express()
const { join } = require('node:path');
const PORT = 3000;

app.get("/" , (req : any , res : any) => {
    // res.send("App is up and running")
    res.sendFile(join(__dirname, '../index.html'));
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}` );
})