const express=require('express');
const cors=require('cors');
const mongodb=require('mongodb');
const bodyparser=require('body-parser');
const app=express();
const connection="mongodb+srv://admin:admin@cluster0.hz6xa.mongodb.net/RJS-06?retryWrites.true&w=majority";
app.use(cors());
app.use(bodyparser.json());

let ashokIt=mongodb.MongoClient;
app.get("/products", (req, res) => {
    ashokIt.connect(connection, (err, con) => {
        if (err) throw err;
        else {
            let db = con.db("US-06");
            db.collection("products").find().toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});