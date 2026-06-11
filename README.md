# 🚖 RideMate - Real-Time Ride Hailing Platform

RideMate is a full-stack ride-hailing application inspired by modern ride-booking platforms. It enables seamless interaction between Riders and Captains through real-time communication, live ride updates, secure authentication, and location-based ride matching.

## 🌐 Live Demo

**Frontend:** https://ride-mate-sigma.vercel.app

**Backend:** https://ridemate-backend-2g96.onrender.com

---

## ✨ Features

### Rider Features

* User Registration & Login
* Secure JWT Authentication
* Pickup & Destination Search
* Location Autocomplete using Geoapify
* Dynamic Fare Estimation
* Ride Booking
* Real-Time Ride Status Updates
* OTP-Based Ride Verification

### Captain Features

* Captain Registration & Login
* Real-Time Ride Requests
* Ride Acceptance Workflow
* Live Location Updates
* OTP Verification
* Start Ride
* End Ride

### Real-Time Events

* `new-ride`
* `ride-confirmed`
* `ride-started`
* `ride-ended`

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Socket.IO Client
* Axios
* Google Maps API

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* Express Validator

### Database

* MongoDB Atlas
* Mongoose

### Maps & Routing

* Geoapify Places API
* OSRM Routing API
* Google Maps

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

---

## 🏗️ System Architecture

```text
Rider
   │
   ▼
React Frontend (Vercel)
   │
   ▼
Express Backend (Render)
   │
 ┌─┴───────────────┐
 ▼                 ▼
MongoDB Atlas   Socket.IO Server
                     │
                     ▼
                 Captain App
```

## 🚀 Ride Flow

```text
User Creates Ride
        │
        ▼
Nearby Captains Notified
        │
        ▼
Captain Accepts Ride
        │
        ▼
OTP Generated
        │
        ▼
Captain Verifies OTP
        │
        ▼
Ride Started
        │
        ▼
Ride Completed
```

## 📂 Project Structure

```text
RideMate/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middlewares/
│   ├── socket.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── assets/
│   └── public/
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEOAPIFY_API_KEY=your_geoapify_key
FRONTEND_URL=http://localhost:5173
PORT=3001
NODE_ENV=development
```

### Frontend (.env)

```env
VITE_BASE_URL=http://localhost:3001
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## 🔧 Installation

### Clone Repository

```bash
git clone https://github.com/neevvvv/RideMate.git
cd RideMate
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📡 API Highlights

### Authentication

* POST `/users/register`
* POST `/users/login`
* POST `/captains/register`
* POST `/captains/login`

### Maps

* GET `/maps/get-suggestions`

### Rides

* GET `/rides/get-fare`
* POST `/rides/create`
* POST `/rides/confirm`
* POST `/rides/start-ride`
* POST `/rides/end-ride`

---

## 🔒 Security Features

* JWT Authentication
* Protected Routes
* Secure HTTP-Only Cookies
* CORS Protection
* Input Validation using Express Validator
* Environment Variable Validation
* Global Error Handling

---

## 📈 Highlights

* Full-stack MERN Architecture
* 15+ REST APIs
* 4 Real-Time Socket.IO Workflows
* Production Deployment on Vercel & Render
* Location-Based Captain Matching
* OTP-Based Ride Verification
* End-to-End Ride Lifecycle Management

---

## 👨‍💻 Author

**Neev Sahu**

* LinkedIn: https://linkedin.com/in/neevsahu
* GitHub: https://github.com/neevvvv

---

⭐ If you found this project interesting, consider giving it a star!
