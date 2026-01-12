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

## Day 11 – Authentication State & App Structure (Redux Setup)

## What was implemented

On Day 11, the project was enhanced by introducing Redux Toolkit for managing authentication state and improving overall app structure.

## 🔹 Redux Store Setup

Created a store folder inside src.
Configured a centralized Redux store using configureStore.
Added an auth slice to manage authentication-related state.

## 🔹 Auth Slice (authSlice.js)

Implemented authentication state using Redux Toolkit’s createSlice.
Managed:
status → tracks whether the user is logged in or not.
userData → stores logged-in user information.

Added reducers:
login → sets auth status to true and saves user data.
logout → clears auth state and user data.

## 🔹 Appwrite Authentication Integration

Connected Appwrite authentication with Redux.
On app load:
Checked current user session using getCurrentUser.
Dispatched login if user session exists.
Dispatched logout if no active session is found.
Added a loading state to ensure the UI renders only after auth check completes.

## 🔹 Component Structure Improvements

Created a components folder for reusable UI parts.
Added separate folders for:
Header
Footer
Centralized component exports using an index.js file for cleaner imports.

## 🔹 App Layout Enhancement

Integrated Header and Footer into the main app layout.
Prepared the layout for future routing using <Outlet />.
Applied basic layout styling for full-screen structure.

## 🔹 Redux Provider Integration

Wrapped the application with Redux <Provider> in main.jsx.
Connected the app to the global Redux store for state access across components.

## ✅ Summary

This update establishes a scalable foundation for the MegaBlog project by:
Introducing global auth state management.
Handling persistent login sessions safely.
Structuring components and layout cleanly.
Preparing the app for routing and future features like posts, protected routes, and role-based access.

## Day 14 – MegaBlog Project Updates

1. Created reusable layout component (Container) for consistent spacing.
2. Designed a responsive Header with authentication-based navigation.
3. Implemented Logout functionality using Appwrite and Redux.
4. Built a structured Footer with multiple navigation sections.
5. Added reusable UI components:

  Button component
  Input component with forwardRef

6. Integrated Redux auth state to show/hide navigation items.
7. Improved overall project structure and scalability.

## Summary:
This update focuses on building a scalable and reusable UI architecture for the MegaBlog project. Core layout components, authentication-aware navigation, and reusable form elements were implemented to improve code organization, maintainability, and prepare the application for future features like protected routes and post management.