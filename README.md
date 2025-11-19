# Full-Stack Task Manager

This is a full-stack task management application built, which includes a Next.js frontend and a Node.js + Express backend with MongoDB Atlas.  
A dark-themed premium UI is used across all pages.

---

## Features

### Authentication
- Register new users
- Login using JWT
- Logout
- Password hashing (bcrypt)
- Protected routes

### Task Management
- Create tasks with title, description, and status
- View all tasks
- Delete tasks
- Search tasks
- Filter by status (todo, in-progress, done)
- Quick Stats section (to-do, in-progress, done)

### Frontend
- Next.js (React)
- TailwindCSS
- Dark theme UI
- Glass-style cards
- Reusable UI components
- Smooth animations

### Backend
- Node.js + Express
- MongoDB Atlas
- JWT authentication
- bcrypt password hashing
- Clean routing structure

---

## Tech Stack

Frontend:
- Next.js  
- React  
- TailwindCSS  

Backend:
- Node.js  
- Express.js  
- Mongoose  
- JWT  
- bcryptjs  
- MongoDB Atlas  

---

## Folder Structure

```
frontend-backend-app/
 ├── backend/
 │    ├── routes/
 │    ├── models/
 │    ├── middleware/
 │    ├── index.js
 │    └── .env
 ├── frontend/
 │    ├── pages/
 │    ├── components/
 │    ├── styles/
 │    └── package.json
 ├── README.md
```

---

## Setup Instructions

### 1. Clone the project

```
git clone https://github.com/KevinJustees/Task-Manager.git
cd Task-Manager
```

---

## Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=supersecretkey
```

Run the backend:

```
npm run dev
```

Backend runs on:
http://localhost:5000

---

## Frontend Setup

```
cd ../frontend
npm install
npm run dev
```

Frontend runs on:
http://localhost:3000

---

## API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  

### User  
GET /api/user/me  

### Tasks  
GET /api/tasks  
POST /api/tasks  
DELETE /api/tasks/:id  

---

## Scaling Notes

Backend:
- Add rate limiting  
- Use Redis caching  
- Load balancing for high traffic  
- DB indexing and clustering  

Frontend:
- Request caching  
- Code splitting  
- CDN for static assets  

Deployment:
- Backend: Render, Railway, or AWS  
- Frontend: Vercel  
- Database: MongoDB Atlas  

---

## Screenshots


<img width="1146" height="859" alt="image" src="https://github.com/user-attachments/assets/81fe4032-10c9-49ba-8fca-71dc3d41e681" />
<img width="1124" height="858" alt="image" src="https://github.com/user-attachments/assets/78d00833-fd13-48e2-bd1a-398632a01cf8" />
<img width="1919" height="809" alt="image" src="https://github.com/user-attachments/assets/bca03a21-5657-4763-b7d4-87e690e0dd39" />




## Summary

This project includes:
- Full authentication  
- CRUD operations  
- Task dashboard  
- MongoDB integration  
- Premium dark UI  
- Clean and scalable code  

