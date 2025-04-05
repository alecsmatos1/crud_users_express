# CRUD API with Node.js and Express

This is a simple RESTful API that implements CRUD operations (Create, Read, Update, Delete) for managing users in memory. Built using Node.js and Express, it's designed for educational purposes and can serve as a starting point for more complex back-end applications.

---

## 🔧 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Minimal and flexible web framework
- **UUID** – To generate unique IDs for users

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/yourusername/crud-api.git
2. Navigate to the project folder
bash
Copiar
Editar
cd crud-api
3. Install dependencies
bash
Copiar
Editar
npm install
4. Start the server
bash
Copiar
Editar
npm start
The server will run at:
http://localhost:3000

📘 API Endpoints
GET /api/users
Returns a list of all registered users.

Response Example:

json
Copiar
Editar
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "John Doe",
    "email": "john@example.com"
  }
]
GET /api/users/:id
Returns a single user by ID.

Success Response:

json
Copiar
Editar
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john@example.com"
}
If user not found:

json
Copiar
Editar
{
  "message": "User not found"
}
POST /api/users
Creates a new user.

Request Body:

json
Copiar
Editar
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
Response:

json
Copiar
Editar
{
  "id": "generated-uuid",
  "name": "Jane Smith",
  "email": "jane@example.com"
}
PUT /api/users/:id
Updates an existing user.

Request Body Example:

json
Copiar
Editar
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
Response:

json
Copiar
Editar
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
DELETE /api/users/:id
Deletes a user by ID.

Response:

json
Copiar
Editar
{
  "message": "User successfully deleted"
}
⚠️ Notes
Data is stored in-memory, so it will reset every time the server restarts.

This project is for educational/demonstration purposes only.

It can be easily extended to use a real database like MongoDB, PostgreSQL, etc.

👥 Authors
Geovane Fernandes Barbosa de Lima
Alecsander Matos
Mentorship: Sabre Software (CRUD API Project)
