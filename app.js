// CRUD API utilizando Express com todas as rotas no app.js (modo didático)

const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.json());

// Simulando banco de dados em memória
let users = [];

// GET /api/users - Listar todos os usuários
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Buscar usuário por ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
});

// POST /api/users - Criar novo usuário
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Nome e email são obrigatórios' });

  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id - Atualizar usuário existente
app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Usuário não encontrado' });

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE /api/users/:id - Remover usuário
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Usuário não encontrado' });

  users.splice(index, 1);
  res.json({ message: 'Usuário removido com sucesso' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});