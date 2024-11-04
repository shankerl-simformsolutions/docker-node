const router = require("express").Router();
const pool = require("../db")

router.get('/getUser', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM users')
        res.status(200).send({ meesage: 'User fetched successfully.', data: data.rows })
    } catch (error) {
        console.log(error)
        res.send('Error adding user')
    }
})

router.post('/addUser', async (req, res) => {
    try {
        const { name, email } = req.body
        await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
        res.status(200).send({ meesage: 'User created successfully.' })
    } catch (error) {
        console.log(error)
        if (error.code === '23505') {
            res.json({ meesage: 'Error: Duplicate email, the email already exists.' })
        } else {
            res.json({ meesage : error })
        }
        
    }
})

router.get('/setup', async (req, res) => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await pool.query(createTableQuery)
        res.status(200).send({ meesage: 'User table created successfully.' })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

module.exports = router;