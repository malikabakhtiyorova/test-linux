
const express = require("express");
const PORT =process.argv.PORT || 2021;
const app = express();

app.get("/", (req, res)=> {
    res.send({
        name: "Malika",
        age: 18,
    })
})

app.listen(PORT, console.log('Bismillah'))