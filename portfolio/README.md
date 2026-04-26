# Full-Stack Personal Portfolio

A modern, responsive, and fully-featured personal portfolio website built from scratch.

## Tech Stack
* **Frontend**: React.js (Vite), Tailwind CSS, Framer Motion, React Router
* **Backend**: Node.js, Express.js
* **Database**: MySQL, Sequelize ORM
* **Deployment**: Vercel (Frontend), Railway/Render (Backend)

---

## 🚀 Running the Project Locally

### Prerequisites
1. **Node.js** installed (v18+ recommended)
2. **MySQL Server** installed and running locally

### 1. Database Setup
1. Open your MySQL client/terminal.
2. Create the database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```

### 2. Backend Setup
1. Open a terminal and navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update your MySQL credentials:
   ```bash
   cp .env.example .env
   ```
   *Edit `.env` and set your `DB_USER` and `DB_PASS`.*
4. Run the seeder to generate the database tables and mock data:
   ```bash
   npm run seed
   ```
5. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server will run on `http://localhost:5000`.*

### 3. Frontend Setup
1. Open a new terminal and navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   *It defaults to `VITE_API_URL=http://localhost:5000/api`, which matches the local server.*
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser to `http://localhost:5173`.

---

## 🌍 Deployment Guide

### Deploying the Backend (Railway/Render)
1. Push this repository to GitHub.
2. Go to [Railway](https://railway.app/) or [Render](https://render.com/).
3. **Add a Database**: Provision a MySQL database on the platform.
4. **Deploy Web Service**: Connect your GitHub repository and point the root directory to `/server`.
5. **Environment Variables**:
   * Add the `DATABASE_URL` provided by the platform.
   * Set `NODE_ENV=production`.
   * (Once frontend is deployed) set `CORS_ORIGIN=https://your-frontend-url.vercel.app`.
6. The platform will automatically run `npm install` and `npm start` (defined in `server/package.json`).

### Deploying the Frontend (Vercel)
1. Go to [Vercel](https://vercel.com/) and import your GitHub repository.
2. Set the **Root Directory** to `client`.
3. The framework preset should automatically detect Vite.
4. **Environment Variables**: Add `VITE_API_URL` and set it to your deployed backend URL (e.g., `https://your-backend.up.railway.app/api`).
5. Click **Deploy**. The `vercel.json` file in the root ensures React Router handles the SPA routing correctly.
