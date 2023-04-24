import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import { loremIpsum } from "lorem-ipsum"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

const app = express()
app.use(express.json())

async function initDB() {
    const models = {}

    await db.authenticate()

    models.Dog = db.define('dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.Location = db.define('location', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    models.Location.hasMany(models.Dog)
    models.Dog.belongsTo(models.Location)

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/dogs', async (req, res) => {
        const data = await models.Dog.findAll();

        res.status(200).json(data)
    })

    app.get('/dogs/:id', async (req, res) => {
        const data = await models.Dog.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Location
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/locations', async (req, res) => {
        const data = await models.Location.findAll();

        res.status(200).json(data)
    })

    app.get('/locations/:id', async (req, res) => {
        const data = await models.Location.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Dog
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();