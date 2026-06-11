# 🚗 RideMate - MERN Stack

A full-featured **RideMate(Uber Clone)** application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), featuring real-time booking, location tracking, and user/driver authentication.

---

## ✨ Features

- 🔐 **Authentication**
  - Separate login/register for **Users** and **Drivers**
  - JWT-based authentication
  - Passwords hashed using bcrypt

- 📍 **Map & Location**
  - Integrated Google Maps API / Mapbox for live location
  - User selects pickup & drop location
  - Real-time driver tracking

- 🚘 **Booking System**
  - Users can request rides
  - Drivers get notified of nearby bookings
  - OTP verification for ride confirmation

- 📡 **Real-Time Features**
  - Live tracking of driver's location
  - Booking status updates (Pending → Confirmed → Completed)

- 📊 **Admin Dashboard** (Optional)
  - Manage users and drivers
  - Monitor ongoing and completed rides

---

## ⚙️ Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Frontend    | React.js, Axios, Leaflet/Google Maps API |
| Backend     | Node.js, Express.js         |
| Database    | MongoDB + Mongoose          |
| Auth        | JWT, bcrypt                 |
| Real-time   | Socket.IO (Optional)        |
| APIs        | Google Maps / Mapbox API    |

---



