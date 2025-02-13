# Delete Desserts Microservice

This is a microservice developed in **Node.js** using **Express.js** for managing the deletion of desserts within the system.

## 📌 Features
- RESTful API with Express.js
- API documentation with Swagger UI
- Middleware for CORS and JSON parsing
- Server running on port **4016**

---
## 📦 Installation
### 🔹 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔹 Clone the repository
```sh
git clone <REPOSITORY_URL>
cd delete-desserts-service
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
By default, the service will run on **http://localhost:4016**.

---
## 🔍 Main Endpoints
### 📌 Service Status
**GET /**
```json
{
  "status": "ok",
  "message": "Microservice Running"
}
```
### 📌 API Routes
| Method | Endpoint | Description |
|--------|---------|------------|
| DELETE | `/api/desserts/:id` | Delete a dessert by ID |

---
## 📖 API Documentation with Swagger
Swagger documentation is available at:
[http://localhost:4016/api-docs](http://localhost:4016/api-docs)

---
## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **Swagger UI** (for API documentation)
- **CORS** (to allow requests from different domains)
- **Body-Parser** (to handle JSON requests)

---
## 🛠 CORS Configuration
Currently, the service is configured with **CORS** to allow requests from:
```
add url load balancer
```
If you want to modify the allowed origin, edit the following line in `index.js`:
```js
app.use(cors({
  origin: 'add url load balancer'
}));
```
---
## 🏗 Project Structure
```
📁 delete-desserts-service
│-- 📁 routes
│   ├── dessertsRoutes.js  # Definition of routes for desserts deletion
│-- 📄 swaggerConfig.js       # Swagger Configuration
│-- 📄 index.js               # Main server file
│-- 📄 package.json           # Project dependencies
```

