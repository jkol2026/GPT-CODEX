# Academic Help Website

A simple full-stack application that lets students submit orders for academic assistance. The backend is built with Node.js and Express while the frontend uses static HTML pages styled with Bootstrap.

## Folder Structure

- `server/` - Node.js + Express backend
- `client/` - Frontend static pages

## Setup

1. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file inside `server/` based on `.env.example` and provide your MongoDB connection string and email credentials.

3. Start the backend with nodemon:
   ```bash
   npm run dev
   ```
   The API runs on the port specified in `.env` (default `5000`).

4. Open the frontend pages in the `client/` folder directly in your browser or serve them using any static file server (for example `npx serve client`).

The site includes pages for Home, About, Services, Order Form, Blog, and Contact. Each page is responsive thanks to Bootstrap and includes a WhatsApp chat button for quick communication.
