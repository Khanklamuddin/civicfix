# 🏙️ CivicFix

> A modern civic complaint management platform that helps citizens report local problems and track their resolution status.

CivicFix is a full-stack web application designed to connect citizens with civic authorities. Users can report problems such as garbage, potholes, street lights, water issues and electricity problems, while administrators can review complaints and update their status.

---

## ✨ Features

### 👤 User Features

* User registration and login
* Secure password hashing using bcrypt
* JWT-based authentication
* Protected user dashboard
* User profile management
* Report civic complaints
* Select complaint category
* Add problem description and location
* View personal complaints
* Track complaint status
* Logout functionality

### 👨‍💼 Admin Features

* Admin-only protected panel
* View all citizen complaints
* View complaint details
* View citizen information
* Dashboard statistics
* Update complaint status
* Track Pending, In Progress and Resolved complaints

---

## 🔐 Authentication & Security

CivicFix implements authentication using:

* **JWT (JSON Web Token)** for user authentication
* **bcryptjs** for secure password hashing
* Protected API routes using authentication middleware
* Role-based access control for admin functionality
* Environment variables for sensitive configuration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* dotenv

---

## 📂 Project Structure

```text
CivicFix/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── AdminProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ReportProblem.jsx
│   │   │   ├── MyComplaints.jsx
│   │   │   └── AdminComplaints.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## 🔄 How CivicFix Works

```text
Citizen
   │
   ▼
Register / Login
   │
   ▼
Dashboard
   │
   ▼
Report Civic Problem
   │
   ▼
Complaint Saved in MongoDB
   │
   ▼
Admin Reviews Complaint
   │
   ▼
Admin Updates Status
   │
   ├── Pending
   ├── In Progress
   └── Resolved
   │
   ▼
Citizen Tracks Updated Status
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Khanklamuddin/civicfix.git
```

Move into the project directory:

```bash
cd civicfix
```

---

### 2. Setup Backend

Open the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

### 3. Setup Frontend

Open another terminal and move to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 📡 API Overview

### Authentication

| Method | Endpoint              | Description                    |
| ------ | --------------------- | ------------------------------ |
| POST   | `/api/users/register` | Register a new user            |
| POST   | `/api/users/login`    | Login user                     |
| GET    | `/api/users/profile`  | Get authenticated user profile |

### Complaints

| Method | Endpoint                     | Description                     |
| ------ | ---------------------------- | ------------------------------- |
| POST   | `/api/complaints`            | Create a complaint              |
| GET    | `/api/complaints/my`         | Get user's complaints           |
| GET    | `/api/complaints/all`        | Get all complaints - Admin      |
| PUT    | `/api/complaints/:id/status` | Update complaint status - Admin |

---

## 🧑‍💻 User Roles

CivicFix supports role-based access:

```text
User
 ├── Dashboard
 ├── Profile
 ├── Report Complaint
 └── My Complaints

Admin
 ├── Dashboard
 ├── Profile
 ├── Report Complaint
 ├── My Complaints
 └── Admin Panel
```

---

## 📊 Complaint Status

Each complaint can have one of three statuses:

| Status         | Meaning                                               |
| -------------- | ----------------------------------------------------- |
| 🟡 Pending     | Complaint has been reported and is waiting for action |
| 🔵 In Progress | Complaint is currently being worked on                |
| 🟢 Resolved    | Complaint has been successfully resolved              |

---

## 🎯 Project Goals

CivicFix was built to demonstrate how a real-world full-stack application can solve a practical problem.

The project focuses on:

* REST API development
* Authentication and authorization
* CRUD-based application design
* MongoDB database integration
* Role-based access control
* React component architecture
* API integration using Axios
* Responsive UI design
* Real-world problem solving

---

## 🔮 Future Improvements

Possible future enhancements include:

* 📍 Google Maps integration
* 📸 Image upload for complaints
* 🔔 Real-time complaint notifications
* 💬 Citizen-authority communication
* 📊 Advanced admin analytics
* 🤖 AI-based complaint categorization
* 📱 Mobile application
* ☁️ Cloud deployment
* 📧 Email notifications

---

## 📸 Application Highlights

CivicFix provides a clean and responsive interface for:

* Landing page
* User authentication
* User dashboard
* Complaint reporting
* Complaint tracking
* User profile
* Admin complaint management

---

## 👨‍💻 Developer

**Klamuddin Khan**

BCA Graduate | MERN Stack Developer

* GitHub: https://github.com/Khanklamuddin
* LinkedIn: https://www.linkedin.com/in/klamuddin-khan-18681521/

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for educational and portfolio purposes.
