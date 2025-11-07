# 🚀 Quick Setup Guide - Vibe Commerce

Follow these steps to get the application running in under 5 minutes!

## Prerequisites Check

Make sure you have these installed:
- [ ] Node.js (v14+) - Check with: `node --version`
- [ ] npm (v6+) - Check with: `npm --version`
- [ ] MongoDB - Check with: `mongod --version`

## Step-by-Step Setup

### 1️⃣ Start MongoDB

**Windows:**
```powershell
# Start MongoDB service
net start MongoDB

# OR if using MongoDB Community Edition:
"C:\Program Files\MongoDB\Server\[version]\bin\mongod.exe" --dbpath="C:\data\db"
```

**Mac:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### 2️⃣ Setup Backend

Open Terminal/PowerShell:

```powershell
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (copy-paste this)
@"
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development
"@ | Out-File -FilePath .env -Encoding utf8

# Start backend server
npm start
```

✅ You should see:
```
✅ Connected to MongoDB
Mock products inserted successfully
🚀 Server running on port 5000
```

### 3️⃣ Setup Frontend

Open a **NEW** Terminal/PowerShell window:

```powershell
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React app
npm start
```

✅ Browser should automatically open to `http://localhost:3000`

## 🎉 That's It!

Your application is now running:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🧪 Quick Test

1. Browse products on the home page
2. Click "Add to Cart" on any product
3. View cart by clicking cart icon in header
4. Update quantities with +/- buttons
5. Click "Proceed to Checkout"
6. Fill in name and email
7. Complete order and see receipt

## ❗ Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running (see Step 1)

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution**: Change PORT in `.env` file or kill the process using port 5000

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
```
Error: Cannot find module 'express'
```
**Solution**: Make sure you ran `npm install` in both backend and frontend folders

## 📱 Testing on Mobile

1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)

2. On your mobile browser, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

## 🛑 Stopping the Application

1. Press `Ctrl + C` in both terminal windows
2. Stop MongoDB (optional):
   - Windows: `net stop MongoDB`
   - Mac: `brew services stop mongodb-community`
   - Linux: `sudo systemctl stop mongod`

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review API endpoints in backend/README.md
- Component documentation in frontend/README.md

---

**Happy Coding! 🎊**
