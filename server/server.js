require('dotenv').config()
const express = require('express')
const {SERVER_PORT} =process.env
const ctrl = require('./controllers/controller')

const app = express()


app.use(express.json())

app.post('/api/playerinfo', ctrl.addPlayers)
app.get('/api/home', ctrl.getPlayers)
app.put('/api/home/:id', ctrl.updatePlayers)
app.delete('api/home/:id', ctrl.deletePlayers)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} A Space Odessey`))