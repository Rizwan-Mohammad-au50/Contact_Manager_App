const express = require('express');
const Contact = require("../modules/contact")
const route = express.Router();


// Get all Contacts:
route.get("/",async(req,res)=>{
    try {
        const allContacts = await Contact.find();
        res.status(200).json({
            status: "Success",
            allContacts
        });
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
})


// Create new Contact:
route.post("/create", async (req,res)=>{
    try {
        const newContact = await Contact.create(req.body);
        res.status(200).json({
            status: "Success",
            newContact
        });
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
})

// Get single Contact:
route.get("/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const singleContact = await Contact.findById(id);
        res.status(200).json({
            status: "Success",
            singleContact
        });
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
})

// update Contact:
route.put("/update/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const updateContact = await Contact.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: "Success",
            updateContact
        });
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
})

// delete Contact:
route.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const deleteContact = await Contact.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "Success",
            deleteContact
        });
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            error
        })
    }
})

module.exports = route;