# 🚀 QUICK START GUIDE

## Running the Restaurant Website

### ✅ **EASIEST METHOD - Follow These 3 Steps:**

#### **Step 1: Start MongoDB (Terminal 1)**
1. Open PowerShell
2. Run:
```powershell
cd C:\Users\Dell\Documents\resturent-website\backend
.\start-mongodb.ps1
```
3. **Keep this window open!** MongoDB needs to stay running.

---

#### **Step 2: Start Backend (Terminal 2)**
1. Open a **NEW** PowerShell window
2. Run:
```powershell
cd C:\Users\Dell\Documents\resturent-website\backend
.\start.ps1
```
3. When asked to seed database, type `y` (first time only)
4. Backend runs on `http://localhost:5000`

---

#### **Step 3: Start Frontend (Terminal 3)**
1. Open a **NEW** PowerShell window
2. Run:
```powershell
cd C:\Users\Dell\Documents\resturent-website\front
.\start-frontend.ps1
```
3. Browser opens automatically at `http://localhost:3000` 🎉

---

## 📋 **Prerequisites**

You need **MongoDB** installed on your computer:

### **Option 1: Install MongoDB Community Server (Recommended)**
1. Download from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will be available as `mongod` command

### **Option 2: Use MongoDB Atlas (Cloud - No Installation)**
If you don't want to install MongoDB locally:
1. Sign up at: https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `backend/.env` file with your Atlas connection string

---

## 🗂️ **Database Folder**

The project uses a **local database folder** at:
```
backend/database/
```

- MongoDB stores all data in this folder
- No need to install MongoDB as a Windows service
- Easy to backup/reset - just delete the folder!
- Already added to `.gitignore` so it won't be committed to git

---

## 📝 **Manual Commands** (If scripts don't work)

### Start MongoDB with local database:
```powershell
cd backend
mongod --dbpath .\database --bind_ip 127.0.0.1
```

### Seed the database (first time):
```powershell
cd backend
node seedData.js
```

### Start Backend:
```powershell
cd backend
npm run dev
```

### Start Frontend:
```powershell
cd front
npm start
```

---

## ✅ **Verify Everything is Working**

1. **MongoDB**: Terminal 1 shows "waiting for connections"
2. **Backend**: Terminal 2 shows "✅ MongoDB connected successfully" and "🚀 Server running on port 5000"
3. **Frontend**: Terminal 3 opens browser at http://localhost:3000

---

## 🛑 **Troubleshooting**

### "mongod is not recognized"
- MongoDB is not installed or not in PATH
- Download and install from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud option)

### "Port 5000 is already in use"
- Close any other apps using port 5000
- Or change port in `backend/.env`

### "Cannot connect to MongoDB"
- Make sure MongoDB is running (Terminal 1)
- Check if `mongod` process is running: `Get-Process mongod`

### Database is empty / No food items
- Run the seed script: `node seedData.js` from backend folder
- Only need to run this once

---

## 🎯 **What You Get**

- ✅ Beautiful landing page
- ✅ User registration and login
- ✅ Browse 15 delicious food items
- ✅ Add items to cart
- ✅ Place orders
- ✅ Track your orders
- ✅ Manage your profile

---

## 📧 **Default Test Account**

After seeding, you can register a new account or create a test account by registering with:
- Name: Your Name
- Email: test@example.com
- Password: password123

---

**Need help?** Check the detailed README files in `backend/` and `front/` folders!
