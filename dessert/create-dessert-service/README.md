# Create Dessert Service

This is a microservice developed in **Node.js** using **Express.js** for dessert management within the system.

## 📌 Features
- RESTful API with Express.js
- Documentation with Swagger UI
- Middleware for CORS and JSON parsing
- Server running on port **4020**

---
## 📦 Installation
### 🔹 Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔹 Clone the repository
```sh
git clone <REPOSITORY_URL>
cd create-dessert-service
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
By default, the service will run on **http://localhost:4020**.

---
## 🔍 Main Endpoints
### 📌 Service Status
**GET /**
```json
{
  "status": "ok",
  "message": "create-dessert-service Running"
}
```
### 📌 API Routes
| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/api/desserts` | Get the list of desserts |
| POST | `/api/desserts` | Create a new dessert |
| PUT | `/api/desserts/:id` | Update dessert information |
| DELETE | `/api/desserts/:id` | Delete a dessert |

---
## 📖 API Documentation with Swagger
Swagger documentation is available at:
[http://localhost:4020/api-docs](http://localhost:4020/api-docs)

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
http://lb-order-foot-.us-east-24578965551.elb.amazonaws.com
```
If you want to modify the allowed origin, edit the following line in `index.js`:
```js
app.use(cors({
  origin: 'http://lb-order-foot-.us-east-24578965551.elb.amazonaws.com'
}));
```
---
## 🏗 Project Structure
```
📁 create-dessert-service
│-- 📁 routes
│   ├── dessertRoutes.js  # Definition of routes for desserts
│-- 📄 swaggerConfig.js       # Swagger Configuration
│-- 📄 index.js               # Main server file
│-- 📄 package.json           # Project dependencies
```

