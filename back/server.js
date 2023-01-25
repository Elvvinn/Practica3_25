const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());



const { Schema } = mongoose;

const newSchema = Schema({
    name: { type: String, },
    title: { type: String, },
    iconUrl: { type: String, }

})

const Users = mongoose.model("users", newSchema)


// Get All User

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
});


// Get User By Id

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }
            else {
                res.status(404).json({ message: err })
            }
        }
    })
});


// Delete User By Id 

app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send({ message: "Succesfully deleted" })
        }
    })
});

// Post Add User 

app.post("/users", (req, res) => {

    let newusers = Users({
        name: req.body.name,
        title: req.body.title,
        iconUrl: req.body.iconUrl
    })
    newusers.save();
    res.send({ message: "Users succesfully added" })
})



app.get("/", (req, res) => {
    res.send("<h1>Alik Neyledi ? ??  Buza bele soyledi sende ?  ?</h1>")
})




const PORT = process.env.PORT
const url = process.env.connection_url.replace(
    "<password>",
    process.env.PASSWORD
)
mongoose.set('strictQuery', true)
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("Db is connected")

        app.listen(PORT, () => {
            console.log("Server is running")
        })
    }
})

