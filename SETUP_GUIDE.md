# Setup Guide

## Prerequisites

- Node.js (v14+)
- npm (v6+)
- MongoDB

## Steps

### 1. Start MongoDB

**Windows:**
```powershell
net start MongoDB
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### 2. Backend Setup

```powershell
cd backend
npm install

# Create .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development

npm start
```

### 3. Frontend Setup

```powershell
cd frontend
npm install
npm start
```

Browser opens at `http://localhost:3000`

## Application URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Troubleshooting

### MongoDB Connection Error
Make sure MongoDB is running

### Port Already in Use
Change PORT in `.env` or kill the process:

**Windows:**
```powershell
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

### Module Not Found
Run `npm install` in both backend and frontend folders
