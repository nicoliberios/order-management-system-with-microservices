# Users Microservice

This is a microservice developed in **Node.js** using **Express.js** for managing user-related operations within the system.

## 📌 Features
- RESTful API with Express.js
- API documentation with Swagger UI
- Middleware for CORS and JSON parsing
- Environment variable support with **dotenv**
- Server running on a configurable port via **.env**

---
## 📦 Installation
### 🔹 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔹 Clone the repository
```sh
git clone <REPOSITORY_URL>
cd users-microservice
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
### 📌 Service Status
**GET /**
```json
{
  "status": "ok",
  "message": "Users Microservices Running"
}
```
### 📌 API Routes
| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/api/users` | Retrieve all users |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update user information |
| DELETE | `/api/users/:id` | Delete a user |

---
## 📖 API Documentation with Swagger
Swagger documentation is available at:
[http://localhost:<PORT>/api-docs](http://localhost:<PORT>/api-docs)

---
## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **Swagger UI** (for API documentation)
- **CORS** (to allow requests from different domains)
- **Body-Parser** (to handle JSON requests)
- **Dotenv** (for managing environment variables)

---
## 🛠 CORS Configuration
Currently, the service is configured with **CORS** to allow requests from:
```
load balancer
```
If you want to modify the allowed origin, edit the following line in `index.js`:
```js
app.use(cors({
  origin: 'load balancer'
}));
```
---
## 🏗 Project Structure
```
📁 users-microservice
│-- 📁 routes
│   ├── userRoutes.js  # Definition of routes for user management
│-- 📄 swaggerConfig.js  # Swagger Configuration
│-- 📄 index.js          # Main server file
│-- 📄 package.json      # Project dependencies
│-- 📄 .env              # Environment variables
```

