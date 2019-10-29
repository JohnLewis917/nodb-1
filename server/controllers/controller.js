const players = []
let id = 0

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    addPlayers: (req, res) => {
        // const image = `https://robohash.org/${req.body.id}.png`
        const newPlayer = {...req.body, id, image}
        players.push(newPlayer)
        id++
        res.status(200).send(players)
        
        
    },
    updatePlayers: (req, res) => {
        const {id} = req.params
        const {firstname, age, gender, city, state, number} = req.body
        console.log(req.body)
        const index = players.findIndex(el => el.id === +id)
        players[index] ={id, ...req.body}

        res.status(200).send(players)
    },
    deletePlayers: (req, res) => {
        const {id} = req.params 
        const index = players.findIndex(el => el.id === +id)
        players.splice(index,1)
        res.status(200).send(players)

    }

}