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
Protected API routes
📝 Blog System
Create blog posts
Read all posts
View single post
(Optional extension: update/delete)
🖼 Media Support
Image uploads for posts
Django media handling
🌐 API
RESTful API using DRF
CORS enabled for frontend connection

# 🏗 Backend Setup (Django)

📦 Install dependencies
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

⚙️ Installed Apps
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'corsheaders',

    'blog',
]

🌍 CORS Setup
CORS_ALLOW_ALL_ORIGINS = True

🔐 JWT Authentication

Installed:

djangorestframework-simplejwt==5.3.1
URLs:
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
]
🗄 Database (PostgreSQL - Render)
import dj_database_url
from decouple import config

DATABASES = {
    'default': dj_database_url.parse(config('DATABASE_URL'))

}

📦 Static files

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

📤 Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

🚀 Production build script (build.sh)
#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput

🌐 Render Deployment (Backend)
Start Command:
gunicorn myproject.wsgi:application
Environment Variables:
DATABASE_URL=postgresql://...
SECRET_KEY=your_secret
DEBUG=False

🎨 Frontend Setup (React)

📦 Create project
npm create vite@latest frontend -- --template react
cd frontend
npm install axios

🔗 API Connection
import axios from "axios";

const API = axios.create({
  baseURL: "https://django-fullstack-blog-application-6.onrender.com/api",
});

export default API;
🔐 Login (JWT)
const res = await API.post("/token/", {
  username,
  password,
});

localStorage.setItem("access", res.data.access);


🌐 Vercel Deployment (Frontend)
npm run build

Then:

Push to GitHub
Import repo in Vercel
Deploy

🔐 Authentication Flow
User Login → JWT Token Generated → Stored in LocalStorage → Sent in API Headers

# 🧪 API Endpoints

Auth
POST /api/token/        → Login
POST /api/token/refresh → Refresh token
Blog
GET    /api/posts/      → List posts
POST   /api/posts/      → Create post
GET    /api/posts/:id/  → Detail view
