# Create Restaurant Service

This is a microservice developed in **Node.js** using **Express.js** for restaurant management within the system.

## 📌 Features
- RESTful API with Express.js
- Documentation with Swagger UI
- Middleware for CORS and JSON parsing
- Server running on port **4013**

---
## 📦 Installation
### 🔹 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔹 Clone the repository
```sh
git clone <REPOSITORY_URL>
cd create-restaurant-service
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
By default, the service will run on **http://localhost:4013**.

---
## 🔍 Main Endpoints
### 📌 Service Status
**GET /**
```json
{
  "status": "ok",
  "message": "create-restaurant-service Running"
}
```
### 📌 API Routes
| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/` | Check if the service is running |

---
## 📖 API Documentation with Swagger
Swagger documentation is available at:
[http://localhost:4013/api-docs](http://localhost:4013/api-docs)

---
## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **Swagger UI** (for API documentation)
- **CORS** (to allow requests from different domains)
- **Body-Parser** (to handle JSON requests)

---
## 🛠 CORS Configuration
Currently, the service is configured with **CORS**.
If you want to modify the allowed origin, edit the following line in `index.js`:
```js
app.use(cors());
```
---
## 🏗 Project Structure
```
📁 create-restaurant-service
│-- 📁 routes
│   ├── restaurantRoutes.js  # Definition of routes for restaurants
│-- 📄 swaggerConfig.js       # Swagger Configuration
│-- 📄 index.js               # Main server file
│-- 📄 package.json           # Project dependencies
```



