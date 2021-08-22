const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//have node serve the files for our built react app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//handle get requests to /api route
app.get("/api", (req, res)=> {
    res.json({message: "Hello from the server!"});
});

//all other get requests not handled before will return our react app
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, '..client/build', 'index.html'));
})

app.listen(PORT, ()=> {
    console.log('Server listening on ${PORT}');
})