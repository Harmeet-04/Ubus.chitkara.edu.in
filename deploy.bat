@echo off
echo UBus Management System - Vercel Deployment Helper
echo ================================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    pause
    exit /b
)

echo Step 1: Initializing Git repository...
if not exist .git (
    git init
    echo Git repository initialized.
) else (
    echo Git repository already exists.
)

echo.
echo Step 2: Adding files to Git...
git add .
echo Files added to Git.

echo.
echo Step 3: Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg="Update UBus Management System"
git commit -m "%commit_msg%"
echo Changes committed.

echo.
echo Step 4: Checking remote repository...
git remote -v | findstr origin >nul
if %errorlevel% neq 0 (
    echo No remote repository found.
    echo.
    echo Please set up a GitHub repository and add it as a remote.
    echo Example:
    echo git remote add origin https://github.com/yourusername/ubus-management.git
    echo.
    set /p remote_url="Enter your GitHub repository URL: "
    if not "%remote_url%"=="" (
        git remote add origin %remote_url%
        echo Remote repository added.
    ) else (
        echo No remote URL provided. Skipping this step.
    )
) else (
    echo Remote repository already configured.
)

echo.
echo Step 5: Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo Failed to push to GitHub. You might need to:
    echo 1. Create the repository on GitHub first
    echo 2. Ensure you have the correct permissions
    echo 3. Check your internet connection
) else (
    echo Successfully pushed to GitHub.
    echo.
    echo Next steps:
    echo 1. Go to https://vercel.com
    echo 2. Create a new project and import your GitHub repository
    echo 3. Configure deployment settings (see DEPLOYMENT_GUIDE.md)
    echo 4. Click Deploy
)

echo.
echo Deployment preparation complete!
pause 