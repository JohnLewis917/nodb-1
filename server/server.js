require('dotenv').config()
const express = require('express')
const {SERVER_PORT} =process.env
const ctrl = require('./controllers/controller')

const app = express()


app.use(express.json())

app.post('/api/players', ctrl.addPlayers)
app.get('/api/players', ctrl.getPlayers)
app.put('/api/players/:id', ctrl.updatePlayers)
app.delete('/api/players/:id', ctrl.deletePlayers)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} A Space Odessey`))