const pool = require('../config/db');

const User = {
  // Create a new user
  create: async (name, email) => {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },

  // Read all users
  findAll: async () => {
    const query = 'SELECT * FROM users';
    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (err) {
      throw err;
    }
  },

  // Read a user by ID
  findById: async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },

  // Update a user by ID
  update: async (id, name, email) => {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [name, email, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },

  // Delete a user by ID
  delete: async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  },
};

module.exports = User;