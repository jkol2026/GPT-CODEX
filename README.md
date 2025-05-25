# Academic Help Website

This is a sample full-stack application for managing academic help orders.

## Folder Structure

- `server/` - Node.js + Express backend
- `client/` - Frontend static pages

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. Create a `.env` file inside `server/` based on `.env.example` and provide your configuration (MongoDB connection, email credentials, etc.).

3. Start the development server with nodemon:

```bash
npm run dev
```

The server will start on the port defined in your `.env` file (default 5000).

Frontend files are static HTML located in the `client/` directory. You can open them directly in the browser or serve them using any static file server.
