players = []
id = 0

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    addPlayers: (req, res) => {
        const newPlayer = {...req.body, id}
        players.push(newPlayers)
        id++
        res.status(200).send(players)
    },
    updatePlayers: (req, res) => {
        
    }
}