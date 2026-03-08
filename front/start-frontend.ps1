# Start the Frontend React App
Write-Host "🚀 Starting Restaurant Frontend..." -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (!(Test-Path ".\node_modules")) {
    Write-Host "📦 Installing dependencies first..." -ForegroundColor Yellow
    npm install
}

# Start the React development server
Write-Host "✅ Starting React app on http://localhost:3000" -ForegroundColor Green
Write-Host "🌐 The browser will open automatically!" -ForegroundColor Green
Write-Host ""

npm start
