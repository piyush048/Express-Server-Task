const express = require('express');
const router = express.Router();
const pool = require('../config/db');


router.get('/users', async (req, res)=> {
    try{
        const result = await pool.query('select now()');
        res.json({time: result.rows[0].now});
    } catch (err){
        console.err(err.stack);
        res.status(500).send('Server error');
    }
});

module.exports = router;