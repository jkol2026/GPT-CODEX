# Academic Help Website

This is a sample full-stack application for managing academic help orders.

## Folder Structure

- `server/` - Node.js + Express backend
- `client/` - Frontend static pages

## Setup

### Backend

1. Install backend dependencies:

```bash
cd server
npm install
```

2. Create a `.env` file inside `server/` based on `.env.example` and provide your configuration (MongoDB connection, email credentials, etc.).

3. Start the backend development server with nodemon:

```bash
npm run dev
```

The server will start on the port defined in your `.env` file (default `5000`).

### Frontend

The frontend consists of simple HTML/CSS/JS files. You can open them directly in the browser or run a small dev server:

```bash
cd ../client
npm install
npm run dev
```

This uses `lite-server` to serve the files at `http://localhost:3000`.
