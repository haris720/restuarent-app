# Quick Start Script for Restaurant Website Backend

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  Restaurant Website - Backend  " -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check MongoDB
Write-Host "Step 1: Checking MongoDB..." -ForegroundColor Yellow
$mongoRunning = $false

try {
    $null = Get-Process mongod -ErrorAction Stop
    $mongoRunning = $true
    Write-Host "✅ MongoDB is already running!" -ForegroundColor Green
} catch {
    Write-Host "❌ MongoDB is not running" -ForegroundColor Red
    Write-Host ""
    Write-Host "To start MongoDB, open a NEW PowerShell window and run:" -ForegroundColor Yellow
    Write-Host "  cd C:\Users\Dell\Documents\resturent-website\backend" -ForegroundColor White
    Write-Host "  .\start-mongodb.ps1" -ForegroundColor White
    Write-Host ""
    
    $response = Read-Host "Do you want to continue anyway? (y/n)"
    if ($response -ne "y") {
        exit
    }
}

Write-Host ""

# Step 2: Install dependencies
Write-Host "Step 2: Installing dependencies..." -ForegroundColor Yellow
if (!(Test-Path ".\node_modules")) {
    npm install
    Write-Host "✅ Dependencies installed!" -ForegroundColor Green
} else {
    Write-Host "✅ Dependencies already installed!" -ForegroundColor Green
}

Write-Host ""

# Step 3: Seed database
Write-Host "Step 3: Seeding database with sample food items..." -ForegroundColor Yellow
$seedResponse = Read-Host "Do you want to seed the database? (y/n)"
if ($seedResponse -eq "y") {
    node seedData.js
}

Write-Host ""

# Step 4: Start server
Write-Host "Step 4: Starting backend server..." -ForegroundColor Yellow
Write-Host "✅ Server will run on http://localhost:5000" -ForegroundColor Green
Write-Host ""

npm run dev
