@echo off
echo Starting English Learning server...
start http://localhost:8080
python -m http.server 8080 -d "%~dp0"
pause
