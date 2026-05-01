# django-fullstack-Blog-application 
A full-stack blog application built with:

Backend: Django + Django REST Framework
Frontend: React
Auth: JWT (SimpleJWT)
Database: PostgreSQL (Render)
Deployment: Render (backend) + Vercel (frontend)

# 🚀 Live Architecture
Frontend (React - Vercel)
        ↓ API calls
Backend (Django REST - Render)
        ↓
Database (PostgreSQL - Render)

# 🧩 Features

🔐 Authentication

Register / Login
JWT access & refresh tokens

 📝 Blog System

Create blog posts
Read all posts
View single post
Update/Delete post

# 🏗 Backend Setup (Django)

#📦 Install dependencies

pip install -r requirements.txt

# 📁 Project structure

django-fullstack-Blog-application /
│
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│
├── blog/
├── users/
├── media/

🌍 CORS Setup
CORS_ALLOW_ALL_ORIGINS = True

🎨 Frontend Setup (React)

📦 Create project
npm create vite@latest frontend -- --template react
cd frontend
npm install axios


# 🌐 Vercel Deployment (Frontend)
npm run build

Then:
Push to GitHub
Import repo in Vercel
Deploy

# 🔐 Authentication Flow
User Login → JWT Token Generated → Stored in LocalStorage → Sent in API Headers

# 🧪 API Endpoints

Auth
POST /api/token/        → Login
POST /api/token/refresh → Refresh token
Blog
GET    /api/posts/      → List posts
POST   /api/posts/      → Create post
GET    /api/posts/:id/  → Detail view
