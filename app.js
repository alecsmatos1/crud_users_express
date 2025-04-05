// CRUD API using Express with all routes in app.js (educational/demo style)

const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.json()); // Enable JSON body parsing for incoming requests

// Simulated in-memory database (data will reset when the server restarts)
let users = [];

/**
 * GET /api/users
 * Returns a list of all users
 */
app.get('/api/users', (req, res) => {
  res.json(users);
});

/**
 * GET /api/users/:id
 * Returns a single user by ID
 */
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

/**
 * POST /api/users
 * Creates a new user with name and email
 * Requires: { name: string, email: string } in the request body
 */
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

/**
 * PUT /api/users/:id
 * Updates an existing user by ID
 * Accepts any fields to update (e.g., name, email) in the request body
 */
app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

/**
 * DELETE /api/users/:id
 * Deletes a user by ID
 */
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(index, 1);
  res.json({ message: 'User successfully deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
