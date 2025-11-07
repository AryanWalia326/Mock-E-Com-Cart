 🔧 Troubleshooting Guide - Vibe Commerce

Common issues and their solutions.

## MongoDB Issues

### Error: connect ECONNREFUSED 127.0.0.1:27017

**Problem**: MongoDB is not running

**Solutions**:

**Windows**:
```powershell
# Option 1: Start as service
net start MongoDB

# Option 2: Start manually
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="C:\data\db"

# Option 3: Install as service if not already
"C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --install
```

**Mac**:
```bash
# Start MongoDB
brew services start mongodb-community

# Check if running
brew services list
```

**Linux**:
```bash
# Start MongoDB
sudo systemctl start mongod

# Check status
sudo systemctl status mongod

# Enable on boot
sudo systemctl enable mongod
```

### Error: Data directory not found

**Solution**:
```powershell
# Windows - Create data directory
New-Item -ItemType Directory -Path "C:\data\db" -Force

# Mac/Linux
sudo mkdir -p /data/db
sudo chown -R $USER /data/db
```

## Port Issues

### Error: Port 5000 is already in use

**Windows PowerShell**:
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

**Mac/Linux**:
```bash
# Find and kill process
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001
```

### Error: Port 3000 is already in use

**Solution**: React will ask if you want to use another port. Type `Y` and press Enter.

Or set a different port:
```powershell
# Windows
$env:PORT=3001; npm start

# Mac/Linux
PORT=3001 npm start
```

## Node/NPM Issues

### Error: Cannot find module 'express'

**Solution**:
```powershell
# Delete node_modules and reinstall
cd backend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Do same for frontend
cd ../frontend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Error: npm ERR! ENOENT: no such file or directory

**Solution**:
```powershell
# Make sure you're in correct directory
cd C:\Users\aryan\OneDrive\Desktop\Assignment\backend
npm install

cd ..\frontend
npm install
```

### Error: Permission denied

**Windows**: Run PowerShell as Administrator

**Mac/Linux**:
```bash
sudo npm install
# Or fix permissions
sudo chown -R $USER ~/.npm
```

## CORS Issues

### Error: CORS policy blocked

**Problem**: Backend CORS not configured properly

**Solution**: Check `backend/server.js` has:
```javascript
const cors = require('cors');
app.use(cors());
```

If still issues, specify origin:
```javascript
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

## Frontend Issues

### Blank Page / White Screen

**Solutions**:
1. Check browser console for errors (F12)
2. Verify backend is running on port 5000
3. Check `.env` or proxy in `package.json`
4. Clear browser cache
5. Try incognito/private window

### Images Not Loading

**Problem**: Unsplash URLs may be blocked or slow

**Solution**: Images have fallback in code. If issues persist:
```javascript
// In ProductGrid.js or Cart.js, update onError handler
onError={(e) => {
  e.target.src = 'https://via.placeholder.com/500x500?text=Product';
}}
```

### API Calls Failing

**Check**:
1. Backend server is running
2. Check Network tab in browser DevTools
3. Verify API URL in `frontend/src/services/api.js`
4. Check console for error messages

## Build Issues

### Frontend Build Fails

```powershell
# Clear cache and rebuild
cd frontend
Remove-Item -Recurse -Force node_modules, build
npm install
npm run build
```

### Backend Won't Start

**Check**:
1. MongoDB is running
2. `.env` file exists with correct values
3. All dependencies installed
4. No syntax errors in code

```powershell
# Verify .env file
cd backend
Get-Content .env

# Should show:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/vibe-commerce
# NODE_ENV=development
```

## Database Issues

### Products Not Showing

**Solution**:
```powershell
# Restart backend to re-seed database
cd backend

# Stop server (Ctrl + C)
# Start again
npm start
```

The server automatically seeds products on startup.

### Cart Not Persisting

**Check**:
1. MongoDB is connected (check backend console)
2. No errors in backend logs
3. Browser console for frontend errors

**Reset Database**:
```powershell
# Connect to MongoDB
mongo

# Use database
use vibe-commerce

# Drop collections
db.products.drop()
db.carts.drop()
db.orders.drop()

# Exit and restart backend
exit
```

## Testing Issues

### cURL Commands Not Working

**Windows PowerShell**: Use `Invoke-RestMethod` instead:
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/products"
```

Or install cURL for Windows from https://curl.se/windows/

### Postman Connection Error

**Check**:
1. Backend is running
2. Using correct URL: `http://localhost:5000/api/products`
3. No proxy settings interfering
4. Firewall not blocking local connections

## Performance Issues

### Slow Loading

**Solutions**:
1. Check internet connection (for images)
2. Use local MongoDB (not cloud)
3. Clear browser cache
4. Close other applications

### Memory Issues

```powershell
# Increase Node memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm start
```

## Git Issues

### Large Files Error

**Solution**:
```powershell
# Make sure .gitignore is working
git rm -r --cached node_modules
git commit -m "Remove node_modules"
```

### Merge Conflicts

**Solution**: Never modify the same files. If happens:
```powershell
git status
# Manually resolve conflicts in listed files
git add .
git commit -m "Resolved conflicts"
```

## Environment Issues

### Cannot Find .env File

**Create it manually**:
```powershell
cd backend
New-Item .env -ItemType File

# Add content:
@"
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development
"@ | Set-Content .env
```

### Wrong Node Version

**Check version**:
```powershell
node --version
# Should be v14 or higher
```

**Install correct version**: Download from https://nodejs.org/

## Browser Issues

### Safari/IE Not Working

**Solution**: Use Chrome, Firefox, or Edge (modern browsers)

### React DevTools Not Working

**Solution**: Install React Developer Tools extension for your browser

## Still Having Issues?

1. **Check Backend Logs**: Look at terminal running backend
2. **Check Frontend Console**: Press F12 in browser
3. **Check Network Tab**: See which API calls are failing
4. **Restart Everything**:
   ```powershell
   # Stop all servers (Ctrl + C in terminals)
   # Restart MongoDB
   # Start backend
   # Start frontend
   ```

## Emergency Reset

If all else fails:
```powershell
# 1. Stop all servers
# 2. Delete everything except source code
cd backend
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

cd ../frontend
Remove-Item -Recurse -Force node_modules, build
Remove-Item package-lock.json

# 3. Reinstall
cd ../backend
npm install

cd ../frontend
npm install

# 4. Restart MongoDB
net start MongoDB

# 5. Start backend
cd ../backend
npm start

# 6. In new terminal, start frontend
cd ../frontend
npm start
```

## Need More Help?

- Check the main README.md
- Review SETUP_GUIDE.md
- Check API_TESTING.md for API issues
- Google the specific error message
- Check Stack Overflow
- MongoDB docs: https://docs.mongodb.com/
- React docs: https://react.dev/
- Express docs: https://expressjs.com/

---

**Most issues are solved by restarting servers and MongoDB! 🔄**
