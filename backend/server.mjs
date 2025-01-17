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

// test model

// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.mjs";


// dotenv.config(); //to read the .env
// const app = express();

// app.get("/", (req,res) => {
//     res.send("server")
// });

// console.log(process.env.MONGO_URI);

// app.listen(5000, () =>{
//     connectDB();
//     console.log("");
// })

//
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.mjs";
import Product from "./models/product.mjs";


dotenv.config(); //to read the .env
const app = express();
app.use(express.json());

app.post("/", async (req,res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please sala7"});
    }
    const newproduct = new Product(product)

    try {
        await newproduct.save();
        res.status(201).json({success:true, data: newproduct})
    } catch (error) {
        console.log("error ",error)
        res.status(500).json({success:false, message:"error"})
    }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () =>{
    connectDB();
    console.log("");
})