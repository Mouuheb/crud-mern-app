// test server

// import express from "express";

// const app = express();

// app.listen(5000, () =>{
//     console.log("dldld");
// })

// ----- first methode

// import express from "express";

// const app = express();

// app.get("/", (req,res) => {
//     res.send("server")
// });

// app.listen(5000, () =>{
//     console.log("");
// })

// 

import express from "express";
import dotenv from "dotenv";

dotenv.config(); //to read the .env
const app = express();

app.get("/", (req,res) => {
    res.send("server")
});

console.log(process.env.MONGO_URI);

app.listen(5000, () =>{
    console.log("");
})