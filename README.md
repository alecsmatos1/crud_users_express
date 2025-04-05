# CRUD API with Node.js and Express

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a simple RESTful API that implements CRUD operations (Create, Read, Update, Delete) for managing users in memory. Built using Node.js and Express, it's designed for educational purposes and can serve as a starting point for more complex back-end applications.

## 🔧 Technologies Used

* **Node.js** – JavaScript runtime
* **Express.js** – Minimal and flexible web framework for Node.js
* **UUID** – To generate unique IDs for users

## 🚀 Getting Started

Follow these steps to run the API locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/alecsmatos1/crud_users_express
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd crud-api
    ```

3.  **Install dependencies:**
    ```bash
    npm install express uuid
    ```

4.  **Start the server:**
    ```bash
    node app.js
    ```
    *(Ensure your main application file is named `app.js`. If it's different, adjust the command accordingly)*

The server will run at: [http://localhost:3000](http://localhost:3000)

## 📘 API Endpoints

### `GET /api/users`

Returns a list of all registered users.

**Response Example:**

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### `GET /api/users/:id`
Returns a single user by ID.

Success Response (HTTP 200):

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "John Doe",
  "email": "john@example.com"
}
```
User Not Found Response (HTTP 404):

```json
{
  "message": "User not found"
}
```
### `POST /api/users`
Creates a new user.

Request Body (JSON):


```json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```
Response (HTTP 201):

```json
{
  "id": "generated-uuid",
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```
### `PUT /api/users/:id`
### Updates an existing user.

Request Body (JSON):

```json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```
Response (HTTP 200):

```json

{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```
### `DELETE /api/users/:id`
Deletes a user by ID.

Response (HTTP 200):

```json

{
  "message": "User successfully deleted"
}
```
## ⚠️ Notes

* Data is stored in-memory, so it will reset every time the server restarts.
* This project is for educational/demonstration purposes only.
* It can be easily extended to use a real database like MongoDB, PostgreSQL, etc.

## 👥 Authors

* Geovane Fernandes Barbosa de Lima
* Alecsander Matos
* **Mentorship:** Sabre Software (CRUD API Project)
