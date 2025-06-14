# Detailed Deployment Guide for UBus Management on Vercel

This guide provides step-by-step instructions for deploying the UBus Management System on Vercel.

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to host your code repository.
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) (you can use your GitHub account to sign up).
3. **Git**: Installed on your local machine.

## Step 1: Prepare Your Repository

1. Open a terminal/command prompt in your project directory (`ubus_local`).
2. Initialize a Git repository:
   ```bash
   git init
   ```
3. Add all files to the repository:
   ```bash
   git add .
   ```
4. Commit your changes:
   ```bash
   git commit -m "Initial commit for UBus Management System"
   ```

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in.
2. Click on the "+" icon in the top-right corner and select "New repository".
3. Name your repository (e.g., "ubus-management").
4. Choose whether to make it public or private.
5. Do not initialize the repository with any files.
6. Click "Create repository".
7. Follow the instructions to push your existing repository:
   ```bash
   git remote add origin https://github.com/yourusername/ubus-management.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy on Vercel

1. Go to [Vercel](https://vercel.com) and log in.
2. Click on "Add New..." and select "Project".
3. Connect your GitHub account if you haven't already.
4. Select your "ubus-management" repository.
5. Configure the project:
   - **Framework Preset**: Select "Other" (or leave as default)
   - **Root Directory**: Leave as `.` (or select the directory containing your code)
   - **Build Command**: Leave empty (no build required for static HTML)
   - **Output Directory**: Leave as `.` (or set to your output directory if different)
   - **Environment Variables**: None required for this project
6. Click "Deploy".

## Step 4: Access Your Deployed Site

1. Vercel will provide you with a URL once deployment is complete (e.g., `ubus-management.vercel.app`).
2. Click on the URL to visit your deployed site.
3. You can also configure a custom domain in the Vercel project settings if desired.

## Step 5: Updating Your Site

Whenever you make changes to your code:

1. Commit your changes locally:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
2. Push to GitHub:
   ```bash
   git push origin main
   ```
3. Vercel will automatically detect the changes and redeploy your site.

## Troubleshooting

- **Deployment Fails**: Check the Vercel deployment logs for specific errors.
- **Missing Assets**: Ensure all file paths are relative and correct.
- **AJAX Requests Not Working**: Remember that AJAX requests to external APIs may be blocked due to CORS policies. For a static site, you may need to modify your code to handle this.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com/en)
- [Git Documentation](https://git-scm.com/doc) 