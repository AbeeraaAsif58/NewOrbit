# Email Setup Guide

## Quick Setup for Contact Form

Your contact form is now ready to send emails to `info@orbitwalls.com`! You just need to set up EmailJS (free service).

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account
5. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** `New Contact Form - {{subject}}`

**Body:**
```
From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from OrbitWalls contact form
```

4. Save and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Configuration
1. Open `src/utils/emailService.js`
2. Replace these values with your actual EmailJS credentials:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### Step 6: Test
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check `info@orbitwalls.com` for the email

## What Happens Now

- ✅ Form validates all required fields
- ✅ Shows loading spinner while sending
- ✅ Displays success/error messages
- ✅ Resets form on successful submission
- ✅ Sends email directly to `info@orbitwalls.com`
- ✅ Includes all form data (name, email, phone, subject, message)

## Troubleshooting

**If emails don't arrive:**
- Check spam/junk folder
- Verify EmailJS service is connected properly
- Check browser console for errors

**If you see "Email service not configured":**
- Make sure you've updated the credentials in `emailService.js`
- Restart your development server after making changes

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Perfect for most small business websites

That's it! Your contact form will now send emails directly to `info@orbitwalls.com` 🚀
