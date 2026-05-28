# 🍔 Food Delivery Platform - Backend Server

Backend server for the Food Delivery Platform.

This server handles all core functionalities of the platform including authentication, restaurant management, food ordering, payments, delivery flow, real-time updates, and admin operations.

The project is built with Node.js, Express, and MongoDB following scalable backend architecture practices.

---

# 🚀 Features

## 🔐 Authentication & Authorization

* JWT Authentication
* Role-Based Access Control (RBAC)
* Secure password hashing using bcrypt
* Protected routes & middleware

---

## 👤 User Management

* Customer registration/login
* Restaurant owner accounts
* Delivery partner accounts
* Admin accounts

---

## 🍔 Restaurant System

* Create/manage restaurants
* Add/edit/delete menu items
* Restaurant availability management
* Restaurant analytics

---

## 🛒 Order Management

* Add to cart
* Place orders
* Order lifecycle handling
* Order status updates

---

## 🛵 Delivery System

* Delivery partner assignment
* Delivery status tracking
* Live order updates
* Rider availability handling

---

## 💳 Payment Integration

* Razorpay / Stripe integration
* Payment verification
* Transaction management

---

## ⚡ Real-Time Features

* Socket.io integration
* Live order tracking
* Real-time notifications

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## Real-Time

* Socket.io

## Cloud Services

* Cloudinary

---

# 📂 Project Structure

```bash id="0l2j7v"
server/
│
├── src/
│   │
│   ├── config/          # DB & environment configs
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth & error middleware
│   ├── models/          # Database schemas
│   ├── routes/          # Express routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   ├── sockets/         # Socket.io events
│   ├── validations/     # Request validation
│   └── app.js
│
├── uploads/
├── .env
├── package.json
└── server.js
```

---

# 🔐 Roles in System

The backend supports multiple roles:

```txt id="c80iqn"
CUSTOMER
RESTAURANT_OWNER
DELIVERY_PARTNER
ADMIN
```

Role-based middleware is used to protect routes.

Example:

```js id="t9y4v0"
router.post(
   "/create-food",
   auth,
   authorize("RESTAURANT_OWNER"),
   createFood
)
```

---

# ⚙️ API Modules

## Auth APIs

```txt id="v0mkx7"
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

---

## Restaurant APIs

```txt id="4cpt0z"
POST   /api/restaurants
GET    /api/restaurants
PUT    /api/restaurants/:id
DELETE /api/restaurants/:id
```

---

## Food APIs

```txt id="ztbf0l"
POST   /api/foods
GET    /api/foods
PUT    /api/foods/:id
DELETE /api/foods/:id
```

---

## Order APIs

```txt id="hlw7it"
POST   /api/orders
GET    /api/orders
PUT    /api/orders/:id/status
```

---

# 🧠 Main Concepts Implemented

* REST API Architecture
* MVC Pattern
* Authentication & Authorization
* Middleware Handling
* File Uploads
* Error Handling
* Real-Time Communication
* Database Relationships
* Secure API Design

---

# 📦 Order Flow

```txt id="jolp88"
Customer places order
        ↓
Restaurant receives order
        ↓
Restaurant accepts order
        ↓
Delivery partner assigned
        ↓
Order delivered
```

---

# ⚙️ Installation

## Clone Repository

```bash id="3stx6r"
git clone <repo-link>
```

---

## Install Dependencies

```bash id="u3m59u"
npm install
```

---

## Setup Environment Variables

Create `.env` file:

```env id="rl7v5s"
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
```

---

## Start Development Server

```bash id="1a9h2n"
npm run dev
```

---

# 🔮 Future Improvements

* Microservices architecture
* Kafka/RabbitMQ event system
* Redis caching
* AI-based delivery optimization
* Docker & Kubernetes deployment
* Advanced analytics
* Fraud detection system

---

# 🧪 Learning Outcome

This project helped me understand how large-scale delivery platforms work internally and improved my understanding of:

* scalable backend systems
* real-time architecture
* API development
* authentication systems
* database schema design
* production-level backend engineering

---

# 🙌 Final Note

This backend is still under active development and more production-grade features will be added gradually 🚀
