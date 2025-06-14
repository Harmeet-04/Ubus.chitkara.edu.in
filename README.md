# UBus Management System - Local Copy

This is a local copy of the UBus Management System for Chitkara University's Punjab Campus. The system allows students to manage their university bus transportation services.

## Features

- **Login System**: Secure authentication with reCAPTCHA integration
- **Dashboard**: Overview of all available services
- **Payment Receipt**: View and download payment transaction history
- **Fine Collection**: View and pay non-disciplinary action fines
- **Transport Allotment**: Book bus routes based on city and stoppage
- **Route Cancellation**: Cancel existing bus route bookings

## How to Use

1. Start by opening `login.html` in your web browser
2. Use any username and password to log in (this is a local demo)
3. Navigate through the system using the dashboard links

## File Structure

- `login.html` - Authentication page
- `dashboard.html` - Main navigation hub
- `paymentreceipt.html` - Payment history and receipts
- `finecollection.html` - Fine management
- `newsessionfee.html` - Bus route booking
- `routecallention.html` - Route cancellation

## Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account (you can sign up with your GitHub account)

### Steps to Deploy
1. Push your code to a GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ubus-management.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure your project:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./
6. Click "Deploy"

Your site will be deployed and available at a Vercel URL (e.g., ubus-management.vercel.app)

## Notes

This is a front-end only implementation for demonstration purposes. In a production environment, this would connect to backend services for actual data processing.

## Credits

Original design and concept by Chitkara University. 