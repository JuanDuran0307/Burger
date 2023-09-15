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
        const result = await collection.find().sort({ precio: 1 }).toArray();
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
router.delete('/endpoin29', async(req,res)=>{
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
router.get('/endpoin30', async(req,res)=>{
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
router.get('/endpoin31', async(req,res)=>{
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
router.get('/endpoin32', async(req,res)=>{
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
router.get('/endpoin33', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $group: {
                    _id: "$chefC",
                    numHamburguesas: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    numHamburguesas: 1
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
router.get('/endpoin34', async(req,res)=>{
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
router.get('/endpoin35', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
              $lookup: {
                from: "Chefs",
                localField: "chef",
                foreignField: "nombre",
                as: "xdxd",
              },
            },
            {
              $lookup: {
                from: "Ingredientes",
                localField: "ingredientes",
                foreignField: "nombre",
                as: "xdxd",
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
router.get('/endpoin36', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
              $lookup: {
                from: "Hamburguesas",
                localField: "nombre",
                foreignField: "ingredientes",
                as: "hamburguesas_con_estos_ingredientes",
              },
            },
            {
              $match: {
                hamburguesas_con_este_ingrediente: { $size: 0 },
              },
            },
            {
                $project: {
                    "_id": 0,
                    "nombre": 1
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
router.get('/endpoin37', async(req,res)=>{
    try {
        const client = new MongoClient(base);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection("hamburguesas");
        const result = await collection.aggregate([
            {
                $lookup: {
                  from: "Categorias",
                  localField: "categoria",
                  foreignField: "nombre",
                  as: "xd"
                }
            },
            {
                $unwind: "$xd"
            },
            {
                $project: {
                  "xd._id": 0,
                  "xd.nombre": 0,
                  "_id": 0,
                  "ingredientes": 0,
                  "chef": 0,
                  "__v": 0,
                  "precio": 0,
                  "nombre": 0
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
router.get('/endpoin38', async(req,res)=>{
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
            },
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    totalIngredientes: 1
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
router.get('/endpoin39', async(req,res)=>{
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
            },
            {
                $project: {
                    _id: 0,
                    categoria: "$_id",
                    precioPromedio: 1
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
router.get('/endpoin40', async(req,res)=>{
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
            {
                $project: {
                    _id: 0,
                    chef: "$_id",
                    hamburguesaMasCara: 1
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


module.exports = router;