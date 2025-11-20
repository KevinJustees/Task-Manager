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

<img width="1146" height="859" alt="Screenshot 2025-11-20 031016" src="https://github.com/user-attachments/assets/ae73d659-d59e-44b2-bdc5-fd88afd6e702" />
<img width="1124" height="858" alt="Screenshot 2025-11-20 031052" src="https://github.com/user-attachments/assets/e677c28b-450b-4e57-b6fb-c04e6ec15ac7" />
<img width="1919" height="812" alt="Screenshot 2025-11-20 031152" src="https://github.com/user-attachments/assets/45e438c0-8147-4534-a123-636da5258893" />




## Summary

This project includes:
- Full authentication  
- CRUD operations  
- Task dashboard  
- MongoDB integration  
- Premium dark UI  
- Clean and scalable code  

