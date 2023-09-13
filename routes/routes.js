const express = require('express');

const {MongoClient} = require ('mongodb');
require('dotenv').config();

const router = express.Router();

const base = process.env.DDBB255;
const nombreBase = "hamburgueseria";

router.get('/gg',async (req,res)=>{
    try {
        res.json("estoy bien")
    } catch (error) {
        res.json("estoy mal")
    }
})

router.get('/endpoint1', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const ingredientes = await collection.find({ stock:{ $lt:400} }).toArray();
        res.json(ingredientes);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "ingredientes no existen"});
    }
});
router.get('/endpoint2', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const Categoryvegetariana = await collection.find({ categoria: "Vegetariana" }).toArray();
        res.json(Categoryvegetariana);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "ingredientes no existen"});
    }
});
router.get('/endpoint3', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const EspecialidadCarnes = await collection.find({ especialidad: "Carnes" }).toArray();
        res.json(EspecialidadCarnes);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "ingredientes no existen"});
    }
});
router.get('/endpoint4', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const AumentPrice = await collection.updateMany({}, ({$inc: {precio: 1.5} }));
        res.json(AumentPrice);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "ingredientes no existen"});
    }
});
router.get('/endpoint5', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const HamburforChefB = await collection.find ({chef: "ChefB" }).toArray();
        res.json(HamburforChefB);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "hamburguesa no existe"});
    }
});
router.get('/endpoint6', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("categorias");
        const nameydescriptionCategory = await collection.find().toArray();
        res.json(nameydescriptionCategory);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "hamburguesa no existe"});
    }
});
router.delete('/endpoint7', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const nameydescriptionCategory = await collection.deleteOne({stock :0}).toArray();
        res.json(nameydescriptionCategory);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "hamburguesa no existe"});
    }
});
router.post('/endpoint8', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const nameydescriptionCategory = await collection.update({"categoria":"Clásica"},{$addToSet:{"ingredientes":{$each:[{"7":"salsa de tomate"}]}} } )
        res.json(nameydescriptionCategory);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo actualizar"});
    }
});

module.exports = router;