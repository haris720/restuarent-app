# MongoDB Installation Script
# Run this as Administrator

Write-Host "Installing MongoDB Community Server..." -ForegroundColor Cyan

# Using Chocolatey (if available)
if (Get-Command choco -ErrorAction SilentlyContinue) {
    choco install mongodb -y
    Write-Host "✅ MongoDB installed via Chocolatey!" -ForegroundColor Green
} else {
    Write-Host "❌ Chocolatey not found." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install MongoDB manually:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://www.mongodb.com/try/download/community" -ForegroundColor White
    Write-Host "2. Run the installer" -ForegroundColor White
    Write-Host "3. Use default settings" -ForegroundColor White
    Write-Host "4. After installation, run: refreshenv" -ForegroundColor White
    Write-Host ""
    
    # Open download page
    $response = Read-Host "Open download page in browser? (y/n)"
    if ($response -eq "y") {
        Start-Process "https://www.mongodb.com/try/download/community"
    }
}
