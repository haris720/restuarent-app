# Find and Start MongoDB Script

Write-Host "🔍 Searching for MongoDB installation..." -ForegroundColor Cyan
Write-Host ""

# Common MongoDB installation paths
$possiblePaths = @(
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe",
    "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe",
    "$env:USERPROFILE\AppData\Local\Programs\mongod\mongod.exe"
)

$mongodPath = $null

foreach ($path in $possiblePaths) {
    if (Test-Path $path) {
        $mongodPath = $path
        Write-Host "✅ Found MongoDB at: $mongodPath" -ForegroundColor Green
        break
    }
}

if (-not $mongodPath) {
    # Search entire C drive (slower but thorough)
    Write-Host "Searching entire system (this may take a moment)..." -ForegroundColor Yellow
    $found = Get-ChildItem "C:\Program Files" -Recurse -Filter "mongod.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($found) {
        $mongodPath = $found.FullName
        Write-Host "✅ Found MongoDB at: $mongodPath" -ForegroundColor Green
    }
}

if ($mongodPath) {
    Write-Host ""
    Write-Host "🚀 Starting MongoDB with local database folder..." -ForegroundColor Cyan
    Write-Host "📂 Database: $PSScriptRoot\database" -ForegroundColor Green
    Write-Host "🔗 MongoDB URI: mongodb://localhost:27017" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  KEEP THIS WINDOW OPEN while using the application!" -ForegroundColor Yellow
    Write-Host ""
    
    # Create database folder if it doesn't exist
    $dbPath = Join-Path $PSScriptRoot "database"
    if (!(Test-Path $dbPath)) {
        New-Item -ItemType Directory -Path $dbPath | Out-Null
    }
    
    # Start MongoDB
    & $mongodPath --dbpath $dbPath --bind_ip 127.0.0.1
    
} else {
    Write-Host ""
    Write-Host "❌ Could not find MongoDB installation" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please do one of the following:" -ForegroundColor Yellow
    Write-Host "1. Manually locate mongod.exe on your system" -ForegroundColor White
    Write-Host "2. Add MongoDB to your system PATH" -ForegroundColor White
    Write-Host "3. Reinstall MongoDB from: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host ""
    Write-Host "If you know where MongoDB is installed, you can start it with:" -ForegroundColor Yellow
    Write-Host "  mongod.exe --dbpath .\database --bind_ip 127.0.0.1" -ForegroundColor White
    Write-Host ""
    
    # Try to open MongoDB download page
    $download = Read-Host "Would you like to open the MongoDB download page? (y/n)"
    if ($download -eq "y") {
        Start-Process "https://www.mongodb.com/try/download/community"
    }
}
