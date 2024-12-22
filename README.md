# Habit Tracker

A full-stack habit tracking application that helps users manage their daily habits, track progress, and view performance charts. Built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## Features

### Frontend
- Responsive UI using React.js and styled-components.
- **Login and Register** pages for user authentication.
- Dashboard to:
  - View habits (title, progress, and status).
  - Mark habits as completed (daily/weekly/monthly).
  - Add, edit, and delete habits.
  - View habit suggestions.
  - Visualize progress using charts (Doughnut charts).

### Backend
- **Node.js** and **Express.js** for API development.
- **MongoDB** for database storage.
- API Endpoints:
  - `POST /api/auth/login` - User login.
  - `POST /api/habits` - Create a new habit.
  - `GET /api/habits` - Fetch habits for the authenticated user.
  - `PUT /api/habits/:id` - Update a habit.
  - `DELETE /api/habits/:id` - Delete a habit.
  - `GET /api/user` - Fetch user profile.
  - `PUT /api/user` - Update user profile.

---

## Technology Stack

### Frontend
- React.js
- styled-components
- react-chartjs-2
- axios
- react-router-dom

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt.js for password hashing
- JSON Web Token (JWT) for authentication

---

## Database Schema

### Collections
1. **Users**:
   - Fields:
     - `name`: User's name
     - `email`: User's email (unique)
     - `password`: Hashed password
   - Example Document:
     ```json
     {
       "name": "User",
       "email": "user@example.com",
       "password": "$2a$10$VFi7asJ/dqQyMQJZEPv3EO8IQEJmrivX5PPxsG/U.TbAlpslBRVoW"
     }
     ```

2. **Habits**:
   - Fields:
     - `user`: Reference to the user's `_id`
     - `habit_title`: Title of the habit
     - `start_date`: Date the habit was created
     - `frequency`: Habit frequency (`daily`, `weekly`, or `monthly`)
     - `status`: Status of the habit (`Active` or `Completed`)
   - Example Document:
     ```json
     {
       "user": "63a4e8c6f4d5a12b34e8f123",
       "habit_title": "Drink Water",
       "start_date": "2023-12-01T00:00:00.000Z",
       "frequency": "daily",
       "status": "Active"
     }
     ```

---

## Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Clone the Repository
```bash
git clone https://github.com/Vikas-hub17/habit-tracker.git
cd habit-tracker
```

## Backend Setup

### Navigate to the backend directory:
```bash
cd backend
```

### Install backend dependencies:
```bash
npm install
```

### Create a .env file in the backend directory with the following variables:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/habit_tracker?retryWrites=true&w=majority
JWT_SECRET=<your_secret_key>
PORT=5000
```

### Start the backend server:
```bash
node server.js
```

## Frontend Setup

### Navigate to the frontend directory:
```bash
cd ../frontend
```

### Install frontend dependencies:
```bash
npm install
```

### Start the frontend server:
```bash
npm start
```





