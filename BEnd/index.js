const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connDb = require("./db/database")
const app = express();
const ContactRoute = require("./routes/contact");
const multer = require('multer');
const path = require("path");

// middlewares:
app.use(cors())
app.use(express.json())

// server first test
app.get("/",(req,res)=>{
    res.send("Hello from server");
})



// Path for image upload with url:
app.use("/upload", express.static(path.join(__dirname, "/upload")));

// Image upload:

const storage = multer.diskStorage({
    destination  :  (req,file,cb) => {
        cb(null, "upload");
    },
    filename  :  (req,file,cb) =>{
        // cb(null, "image.png");
        cb(null, req.body.name);
    }
});
const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json({
        status: "Success",
        message: "Image Uploaded Successfully..!"
    });
})

// for updating image:
app.put("/api/contacts/update", upload.single("file"), (req,res)=>{
    res.status(200).json({
        status: "Success",
        message: "Image Updated Successfully..!"
    });
})
// app.put("/api/upload", upload.single("file"), (req,res)=>{
//     res.status(200).json({
//         status: "Success",
//         message: "Image Updated Successfully..!"
//     });
// })




// routes:
app.use("/api/contacts",ContactRoute)

PORT = process.env.PORT || 9000;
app.listen(PORT , ()=> {
    connDb();
    console.log(`Server is live at port ${PORT}..!`);
})