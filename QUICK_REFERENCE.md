# 🚀 Quick Reference - Vibe Commerce

## Essential Commands

### Start the Application

```powershell
# Terminal 1: Start MongoDB
net start MongoDB

# Terminal 2: Start Backend
cd backend
npm start

# Terminal 3: Start Frontend
cd frontend
npm start
```

**URLs**:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/api/health

---

## Project Structure

```
Assignment/
├── backend/          # Node.js/Express API
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API endpoints
│   ├── server.js     # Main server file
│   └── seedData.js   # Mock products
│
├── frontend/         # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API client
│   │   ├── App.js       # Main app
│   │   └── App.css      # Styling
│   └── public/
│
└── docs/             # Documentation
```

---

## API Endpoints Quick Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| GET | `/api/cart` | Get cart |
| POST | `/api/cart` | Add to cart |
| PUT | `/api/cart/:id` | Update quantity |
| DELETE | `/api/cart/:id` | Remove item |
| DELETE | `/api/cart` | Clear cart |
| POST | `/api/checkout` | Checkout |
| GET | `/api/health` | Health check |

---

## Key Files

| File | Purpose |
|------|---------|
| `backend/server.js` | Express server & MongoDB connection |
| `backend/routes/cart.js` | Cart API logic |
| `backend/routes/checkout.js` | Checkout & orders |
| `backend/models/Cart.js` | Cart schema |
| `frontend/src/App.js` | Main React component |
| `frontend/src/services/api.js` | API client |
| `frontend/src/components/Cart.js` | Cart UI |
| `README.md` | Main documentation |

---

## Environment Variables

**File**: `backend/.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development
```

---

## NPM Scripts

### Backend
```powershell
npm start       # Start server
npm run dev     # Start with nodemon (auto-reload)
```

### Frontend
```powershell
npm start       # Start dev server
npm run build   # Build for production
```

### Root
```powershell
npm run install-all      # Install all dependencies
npm run start-backend    # Start backend
npm run start-frontend   # Start frontend
```

---

## Common Issues & Quick Fixes

| Issue | Fix |
|-------|-----|
| MongoDB not connecting | `net start MongoDB` |
| Port 5000 in use | Change PORT in .env |
| Module not found | `npm install` |
| Blank page | Check backend is running |
| CORS error | Restart backend |

---

## Testing Flow

1. **Products**: Visit http://localhost:3000
2. **Add to Cart**: Click "Add to Cart" buttons
3. **View Cart**: Click cart icon in header
4. **Update Quantity**: Use +/- buttons
5. **Checkout**: Click "Proceed to Checkout"
6. **Complete**: Fill form and submit
7. **Receipt**: View order confirmation

---

## Features Checklist

- ✅ 10 Mock Products
- ✅ Add to Cart
- ✅ Update Quantities
- ✅ Remove Items
- ✅ Cart Total
- ✅ Checkout Form
- ✅ Order Receipt
- ✅ MongoDB Persistence
- ✅ Error Handling
- ✅ Responsive Design

---

## Tech Stack

**Frontend**:
- React 18.2.0
- Axios
- CSS3

**Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## File Sizes (Approx)

- Backend: ~30 files, ~2 MB
- Frontend: ~20 files, ~500 KB
- Total LOC: ~2000+

---

## Performance

- Initial Load: < 2s
- API Response: < 100ms
- Database Query: < 50ms

---

## Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Edge (Latest)
- ✅ Safari (Latest)
- ⚠️ IE11 (Not supported)

---

## Deployment Checklist

- [ ] MongoDB connection string updated
- [ ] Environment variables set
- [ ] Frontend API URL configured
- [ ] Build frontend (`npm run build`)
- [ ] Test production build
- [ ] Update CORS settings

---

## Documentation Files

1. `README.md` - Main documentation
2. `SETUP_GUIDE.md` - Installation steps
3. `API_TESTING.md` - API testing guide
4. `DEMO_GUIDE.md` - Video demo script
5. `TROUBLESHOOTING.md` - Problem solving
6. `FEATURES.md` - Feature documentation
7. `SUBMISSION_CHECKLIST.md` - Submission guide

---

## Git Commands

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin <YOUR_REPO_URL>
git branch -M main
git push -u origin main
```

---

## Submission

**Deadline**: November 8, 2025

**Required**:
1. GitHub repository link
2. 1-2 minute demo video (Loom/YouTube)
3. README with screenshots

---

## Contact

For questions about this project:
- Check documentation files
- Review troubleshooting guide
- Test API with provided commands

---

**Quick Tip**: Keep this file open while working! 📌
