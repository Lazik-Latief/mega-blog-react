# Mega Blog React

MegaBlog is a beginner-friendly React blog application built using **Vite** as part of my React learning journey.  
This project focuses on understanding **core React concepts** and **real-world app structure** by implementing authentication, routing, and backend integration step by step.

The repository reflects my **daily learning progress**, with incremental updates and consistent GitHub commits.

---

## Tech Stack

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**
- **Appwrite (Backend as a Service)**
- **HTML Forms**
- **Bun / npm (Package Manager)**

---

## Features (Current)

- Project setup using **Vite**
- Authentication system:
  - User **Signup**
  - User **Login**
  - User **Logout**
- Backend integration using **Appwrite**
- Environment variable configuration using `.env`
- Centralized authentication methods in `Auth.js`
- Basic app-level structure and routing setup

---

## What I Learned So Far

- Creating and configuring a React project with Vite
- Installing and managing dependencies

```
"dependencies": {
    "@reduxjs/toolkit"
    "@tinymce/tinymce-react"
    "appwrite"
    "html-parser"
    "html-react-parser"
    "react"
    "react-dom"
    "react-hook-form"
    "react-redux"
    "react-router-dom"
  }
```

**Bun / npm**

- Setting up **Appwrite**:
  - Creating Appwrite account
  - Creating project and database
  - Managing Project ID, Database ID, Collection ID
- Using environment variables securely with `.env`
- Writing reusable authentication methods (login, signup, logout)
- Basic routing using **React Router DOM**
- Structuring a React project for scalability

## Environment Variables

This project uses environment variables for Appwrite configuration.

Example:
VITE_APPWRITE_URL=your_appwrite_url VITE_APPWRITE_PROJECT_ID=your_project_id VITE_APPWRITE_DATABASE_ID=your_database_id VITE_APPWRITE_COLLECTION_ID=your_collection_id

> `.env` file is not pushed to GitHub for security reasons.

---

## Development Approach

- One project → One GitHub repository
- Daily incremental commits
- Focus on **learning + implementation**
- Code clarity over complexity

---

## Learning Journey

This project is part of my “Let’s Code” daily learning routine where I practice JavaScript and React consistently to improve my frontend development skills.

## Daily Updates :
## New Update – Appwrite Service Layer
## “Backend Services"(Day-9)

- Added centralized Appwrite service class.
- Implemented CRUD operations for blog posts.
- Integrated Appwrite Database and Storage services.
- Added file upload, delete, and preview functionality.
- Used async/await with proper error handling.
- Implemented query-based post fetching (active posts).
- Improved code structure using class-based services.
