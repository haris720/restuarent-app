# Start MongoDB with local database folder
Write-Host "🚀 Starting MongoDB with local database..." -ForegroundColor Cyan

# Create database folder if it doesn't exist
if (!(Test-Path ".\database")) {
    New-Item -ItemType Directory -Path ".\database" | Out-Null
}

# Start MongoDB with the local database path
Write-Host "📂 Database folder: $PWD\database" -ForegroundColor Green
Write-Host "🔗 MongoDB will run on: mongodb://localhost:27017" -ForegroundColor Green
Write-Host "" 
Write-Host "⚠️  Keep this window open while using the application!" -ForegroundColor Yellow
Write-Host ""

mongod --dbpath .\database --bind_ip 127.0.0.1
