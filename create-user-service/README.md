# Create User Service

This is a microservice developed in **Node.js** using **Express.js** for user management within the system.

## 📌 Features
- RESTful API with Express.js
- Middleware for JSON parsing
- Server running on a configurable port via **environment variables**

---
## 📦 Installation
### 🔹 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔹 Clone the repository
```sh
git clone <REPOSITORY_URL>
cd create-user-service
```

### 🔹 Install dependencies
```sh
npm install
```

---
## 🚀 Server Execution
To start the server in development mode:
```sh
npm start
```
By default, the service will run on the port specified in the **PORT** environment variable.

---
## 🔍 Main Endpoints
### 📌 API Routes
| Method | Endpoint | Description |
|--------|---------|------------|
| POST | `/api/users` | Create a new user |

---
## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **Body-Parser** (to handle JSON requests)

---
## 🏗 Project Structure
```
📁 create-user-service
│-- 📁 routes
│   ├── createUserRoutes.js  # Definition of routes for user creation
│-- 📄 index.js               # Main server file
│-- 📄 package.json           # Project dependencies
```


