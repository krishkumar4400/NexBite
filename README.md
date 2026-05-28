# 🍔 Food Delivery Platform

A full-stack food delivery platform inspired by apps like Zomato and Swiggy.

This project is built to understand how real-world delivery systems work behind the scenes — including restaurant management, order flow, delivery tracking, authentication, payments, and real-time updates.

The goal of this project is not just to make a clone, but to learn and implement production-level software engineering concepts like scalable backend architecture, role-based access control, API design, database relationships, and real-time systems.

---

# 🚀 Features

## 👤 Customer Features

* User authentication (JWT)
* Browse restaurants and food items
* Search and filter food
* Add to cart
* Place orders
* Online payments
* Live order tracking
* Order history
* Ratings and reviews

---

## 🍔 Restaurant Features

* Restaurant dashboard
* Add/edit/delete menu items
* Accept/reject orders
* Update order status
* View earnings and analytics

---

## 🛵 Delivery Partner Features

* Delivery login system
* Accept delivery requests
* Live navigation
* Update delivery status
* Earnings dashboard

---

## 🧠 Admin Features

* Manage users/restaurants/riders
* Monitor all orders
* Platform analytics
* Manage commissions
* Handle reports and disputes

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* Redux Toolkit

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT Authentication
* bcrypt

## Real-Time

* Socket.io

## Payments

* Razorpay / Stripe

## Cloud & Deployment

* Cloudinary
* Render / AWS / Vercel

---

# 📂 Project Structure

```bash
food-delivery-platform/
│
├── client/              # Customer frontend
├── admin/               # Admin dashboard
├── restaurant-panel/    # Restaurant dashboard
├── delivery-app/        # Rider application
├── server/              # Backend APIs
│
├── docs/
├── README.md
└── package.json
```

---

# 🔐 Roles in System

The platform contains multiple user roles:

* Customer
* Restaurant Owner
* Delivery Partner
* Admin

Each role has separate permissions and dashboards using Role-Based Access Control (RBAC).

---

# ⚙️ Main Functionalities Implemented

* Authentication & Authorization
* REST APIs
* File Uploads
* Real-time Order Updates
* Payment Gateway Integration
* Location & Maps API
* Role-Based Access Control
* Order Lifecycle Management

---

# 📦 Order Flow

```text
Customer places order
        ↓
Restaurant accepts order
        ↓
Delivery partner assigned
        ↓
Food picked up
        ↓
Delivered to customer
```

---

# 🧠 What I Learned From This Project

While building this project, I learned:

* Backend architecture
* API design
* Authentication systems
* Real-time communication using sockets
* Database schema design
* State management
* Handling complex workflows
* Building scalable applications

This project helped me understand how real-world platforms like Zomato actually work internally.

---

# 🔮 Future Improvements

* AI-based food recommendations
* Smart delivery assignment
* Demand prediction system
* Microservices architecture
* Docker & Kubernetes deployment
* Push notifications
* Multi-vendor support

---

# 🧪 Installation

```bash
git clone <repo-link>

cd project

npm install

npm run dev
```

---

# 📸 Screenshots

(Add screenshots here later)

---

# 🙌 Final Note

This project was built as a learning + engineering project to explore real-world full-stack system design and scalable application development.

Still improving and adding more features 🚀
