import express from "express"
import { DataTypes, Sequelize } from 'sequelize'
import cors from "cors"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:5173" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

async function initDB() {
    const models = {}

    await db.authenticate()

    models.Employee = db.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        project: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            // Kan dnne være null? Skal det være en liste med prossjekter? 
        }
    })
    
    models.Area = db.define('area', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    models.Project = db.define('project', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        }, 
        shortDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        supervisor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        areas: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        featured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })



    // models.Employee.hasMany(models.Project)
    // models.Project.belongsTo(models.Employee)
    // models.Project.belongsToMany(models.Area)
    // models.Area.belongsToMany(models.Project)



    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/', (req, res) => {
        res.send("Welcome to our Api")
    }) 

    app.get('/employees', async(req, res) => {
        const data = await models.Employee.findAll();
        res.status(200).json(data)
    })

    app.get('/employees/:id', async(req, res) => {
        const data = await models.Employee.findOne({
            where: {
                id: req.params.id
            }
        })
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects', async(req, res) => {
        const data = await models.Project.findAll();
        res.status(200).json(data)
    })

    app.get('/projects/supervisor=:employeeId', async(req, res) => {
        const supervisorId = req.params.employeeId
        const data = await models.Project.findAll({
            where: {
                supervisor: supervisorId
            }
        }); 
        res.status(200).json(data)
    })

    app.get('/areas', async(req, res) => {
        const data = await models.Area.findAll();
        res.status(200).json(data)
    })

    app.get('/areasId', async(req, res) => { 
        const data = await models.Area.findAll(); 
        const result = {}
        let counter = 0 
        data.forEach(item => {
            result[counter] = item.id;
            counter = counter + 1; 
        });
        res.status(200).json(result)
    })

    app.get('/areas/:id', async(req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id 
            }
        })
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    // app.get('/dogs', async (req, res) => {
    //     const data = await models.Dog.findAll();

    //     res.status(200).json(data)
    // })

    // app.get('/dogs/:id', async (req, res) => {
    //     const data = await models.Dog.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [
    //             {
    //                 model: models.Location
    //             }
    //         ]
    //     })

    //     if (data) {
    //         res.status(200).json(data)
    //     }
    //     else {
    //         res.sendStatus(404)
    //     }
    // })

    // app.get('/locations', async (req, res) => {
    //     const data = await models.Location.findAll();

    //     res.status(200).json(data)
    // })

    // app.get('/locations/:id', async (req, res) => {
    //     const data = await models.Location.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //         include: [
    //             {
    //                 model: models.Dog
    //             }
    //         ]
    //     })

    //     if (data) {
    //         res.status(200).json(data)
    //     }
    //     else {
    //         res.sendStatus(404)
    //     }
    // })

    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();