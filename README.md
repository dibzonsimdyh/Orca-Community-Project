# Orca Community Platform

A community-based platform with CRUD functionality built using React 19, TypeScript, Express.js, and MongoDB.

## Features

- Create, read, update, and delete posts
- Responsive UI with Tailwind CSS
- Smooth animations with Framer Motion
- Routing with React Router
- Type-safe code with TypeScript
- Component library with ShadCN

## Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- ShadCN UI components
- Axios for API requests

### Backend
- Express.js
- MongoDB (via Mongoose)
- CORS
- Dotenv for environment variables

## Project Structure

```
orca/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx
│   └── package.json
├── server/                 # Express backend
│   ├── server.js          # Main server file
│   └── package.json
└── package.json           # Root package.json for monorepo
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd orca
```

2. Install dependencies for both client and server:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..

# Install server dependencies
cd server
npm install
cd ..
```

3. Set up environment variables:
Create a `.env` file in the `server/` directory:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/orca-community?retryWrites=true&w=majority
PORT=5000
```

4. Run the application:
```bash
# Development mode (requires concurrently)
npm run dev

# Or run separately:
# Terminal 1:
cd server
npm run dev

# Terminal 2:
cd client
npm run dev
```

## API Endpoints

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

## Available Scripts

In the project root:
- `npm run dev` - Run both client and server in development mode
- `npm run server` - Run only the server in development mode
- `npm run client` - Run only the client in development mode

In the client directory:
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Lint the code

In the server directory:
- `npm run dev` - Start the development server with nodemon
- `npm run start` - Start the production server