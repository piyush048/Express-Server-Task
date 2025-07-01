const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CREATE a new user
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.stack);
    res.status(400).json({ error: 'Error creating user', details: err.message });
  }
});

// READ all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// READ a single user by ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Error fetching user' });
  }
});

// UPDATE a user by ID
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await User.update(id, name, email);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error(err.stack);
    res.status(400).json({ error: 'Error updating user', details: err.message });
  }
});

// DELETE a user by ID
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.delete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted', user: deletedUser });
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = router;