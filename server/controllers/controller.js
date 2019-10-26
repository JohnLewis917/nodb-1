const players = []
let id = 0

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },
    addPlayers: (req, res) => {
        const image = `https://robohash.org/${req.body.name}.png`
        const newPlayer = {...req.body, id, image}
        players.push(newPlayer)
        id++
        res.status(200).send(players)
    },
    updatePlayers: (req, res) => {
        const {id} = req.params
        const {firstname, age, city, state, phone} = req.body
        const index = players.findIndex(el => el.id === +id)
        if (firstname) {players[index].firstname = firstname }
        else if (lastname) {players[index].lastname = lastname}
        else if (age) {players[index].age = age }
        else if (gender) {players[index].gender = gender}
        else if (city) {players[index].city = city}
        else if (state) {players[index].state = state}
        else if(number) {players[index].number = number}
        res.status(200).send(players)
    },
    deletePlayers: (req, res) => {
        const {id} = req.params 
        const index = players.findIndex(el => el.id === +id)
        players.splice(index,1)
        res.status(200).send(players)

    }

}