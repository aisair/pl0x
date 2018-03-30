@echo off
color c9
node app
SETLOCAL
cd /d %~dp0
SET "sourcedir=%cd%\done"
FOR /r "%sourcedir%" %%a IN (*.png) DO (
 optipng -o7 "%%a"
)
color a9
cls
echo Conversion and Compression complete!
echo Conversion and Compression complete!
echo Conversion and Compression complete!
echo Conversion and Compression complete!
pause
exit