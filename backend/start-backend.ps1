# Start the Backend Server
Write-Host "🚀 Starting Restaurant Backend Server..." -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (!(Test-Path ".\node_modules")) {
    Write-Host "📦 Installing dependencies first..." -ForegroundColor Yellow
    npm install
}

# Check if MongoDB is running
Write-Host "🔍 Checking MongoDB connection..." -ForegroundColor Cyan

# Start the server
Write-Host "✅ Starting server on http://localhost:5000" -ForegroundColor Green
Write-Host ""

npm run dev
