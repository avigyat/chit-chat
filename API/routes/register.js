var express = require('express');
var router = express.Router();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

//dotenv setup
const dotenv = require('dotenv');
const { Error } = require('mongoose');
dotenv.config();
const jwtSecret = process.env.JWT_SECRET




/* POST users listing. */
router.post('/', async (req, res) => {
  res.send('respond with a resource');
  const { email, password } = req.body;
  const createdUser = await Users.create({ email, password })
  jwt.sign({ userId: createdUser._id }, jwtSecret, (err, token) => {
    if (err) throw err
    res.cookie('token', token).status('201').json('ok')
  })
});

module.exports = router;
