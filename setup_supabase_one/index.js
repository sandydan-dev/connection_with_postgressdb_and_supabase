require('dotenv').config() // 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


// middelwares
app.use(express.json())
app.use(cors())



// users
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com ' },
]


function getAllUsers() {
    return users
}

app.get('/api/users', (req, res) => {
    let result = getAllUsers()
    res.status(200).json(result)
})



// users with given id
function getUserById(id) {
    return users.find(user => user.id === id)
}
app.get('/api/users/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let result = getUserById(id)
    if (result) {
        res.status(200).json(result)
    }
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

})