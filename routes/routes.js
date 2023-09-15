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
        res.send({error: "no se pudo hacer la consulta"});
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
        res.send({error: "no se pudo hacer la consulta"});
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
        res.send({error: "no se pudo hacer la consulta"});
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
        res.send({error: "no se pudo hacer la consulta"});
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
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint6', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("categorias");
        const result = await collection.find().toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.delete('/endpoint7', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const result = await collection.deleteOne({stock :0}).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.put('/endpoint8', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { nombre: "clasica" };
        const result = await collection.updateOne(query, { $push: { ingredientes: nuevoIngrediente }})
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint9', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { ingredientes: "Pan integral" };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.put('/endpoint10', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const query = { nombre: "ChefC" };
        const result = await collection.updateOne(query, { $set: { especialidad: "Italiana" } })
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint11', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const result = await collection.findOne({}, { sort: { precio: -1 } });
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint12', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { ingredientes: { $ne: "Queso cheddar" } };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint13', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const query = { nombre: "Pan" };
        const result = await collection.updateOne(query, { $inc: { stock: 100 } });
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint14', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const query = { descripcion: { $regex: /clásico/i } };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint15', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { precio: { $lte: 9 } };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint16', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const result = await collection.countDocuments();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint17', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("categorias");
        const query = { descripcion: { $regex: /gourmet/i } }
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.delete('/endpoint18', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { $expr: { $lt: [{ $size: "$ingredientes" }, 5]}};
        const result = await collection.deleteMany(query);
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.post('/endpoint19', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const query = {nombre: "ChefD", especialidad: "Cocina Vegetariana"};
        const result = await collection.deleteMany(query);
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint20', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.find().sort({ precio: -1 }).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint21', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const query = { precio: { $lt: 5, $gt: 2 } };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint22', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const query = { nombre: "Pan" };
        const result = await collection.updateOne(query, { $set: { descripcion: "Pan Bimbo" } });
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint23', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { ingredientes: { $in: ["Tomate", "Cebolla"]}};
        const result = await collection.find(query).toArray();;
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint24', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const query = {nombre: {$ne:"ChefA"}};
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.put('/endpoint25', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { categoria: /gourmet/i };
        const result = await collection.updateOne(query, { $inc: { precio: 2 } });
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint26', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const result = await collection.find().sort({ nombre: 1 }).toArray()
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint27', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.find().sort({ precio: -1 }).limit(1).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.post('/endpoint28', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { nombre: /Clásica/i };
        const result = await collection.updateMany(query, { $push: { ingredientes: "Pechuga" }});
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.delete('/endpoint29', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("chefs");
        const query = {especialidad: /Cocina Vegetariana/i};
        const result = await collection.deleteMany(query);
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint30', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { ingredientes: { $size: 7 } };
        const result = await collection.find(query).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint31', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const query = { categoria: /gourmet/i };
        const result = await collection.find(query).sort({ precio: -1 }).limit(1).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint32', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas")
        const result = await collection.aggregate([
            {
                $unwind: "$ingredientes"
            },
            {
                $group: {
                    _id: "$ingredientes",
                    numHamburguesas: { $sum: 1 }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint33', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $group: {
                    _id: "$chef",
                    Hamburguesas: { $max: {nombre:"$nombre",numHamburguesas: {$sum:1}
                }} }
                    
            }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint34', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    numCategoria: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    categoria: "$_id",
                    numCategoria: 1
                }
            },
            {
                $sort: { numCategoria: -1 }
            }
        ]).limit(1).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint35', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
              $lookup: {
                from: "chefs",
                localField: "chef",
                foreignField: "nombre",
                as: "xdxdxd",
              },
            },
            {
              $lookup: {
                from: "ingredientes",
                localField: "ingredientes",
                foreignField: "nombre",
                as: "xdxdxdxd",
              },
            },
            {
              $unwind: "$xdxdxd"
            },
            {
              $unwind: "$xdxdxdxd"
            },
            {
              $group: {
                _id: "$xdxdxd.nombre",
                Total: { $sum: "$xdxdxdxd.precio" },
              },
            }
          ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint36', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("ingredientes");
        const result = await collection.aggregate([
            {
              $lookup: {
                from: "hamburguesas",
                localField: "nombre",
                foreignField: "ingredientes",
                as: "hamburguesas_ingrediente",
              }
            },
            {
              $match: {
                hamburguesas_ingrediente: { $size: 0 }
              }
            },
            {
                $project: {
                    "_id": 0,
                    "nombre": 1
                }
            }
          ]).toArray();
        res.json({msg:"xd",result});
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
        console.log(error);
    }
});
router.get('/endpoint37', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([

            {
                $lookup:{
                    from:"categorias",
                    localField: "categoria",
                    foreignField: "nombre",
                    as: "descripcion_categoria"
                }
            },
            {
                $unwind: "$descripcion_categoria"
            },         
            {
                $group: {
                    _id: "$nombre",
                    hamburguesa: { $min: {nombre:"$nombre",categoria:"$categoria", descripcion: "$descripcion_categoria.descripcion"}  }
                }
            }

        ]).toArray();   
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint38', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $unwind: "$ingredientes"
            },
            {
                $group: {
                    _id: "$chef",
                    totalIngredientes: { $sum: 1 }
                }
            },
            {
                $sort: { totalIngredientes: -1 }
            },
            {
                $limit: 1
            }
        ]).toArray();   
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint39', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $group: {
                    _id: "$categoria",
                    precioPromedio: { $avg: "$precio" }
                }
            }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});
router.get('/endpoint40', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $group: {
                    _id: "$chef", 
                    hamburguesaMasCara: { $max: { nombre: "$nombre", precio: "$precio" } } 
                }
            },
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        
        res.status(404);
        res.send({error: "no se pudo hacer la consulta"});
    }
});


module.exports = router;