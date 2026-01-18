# Notion API Setup Guide - High Tide Tours Booking System

## Overview
This guide explains how to set up the Notion API integration for automatic booking submissions from the High Tide Tours website.

---

## Step 1: Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"+ New integration"**
3. Fill in the details:
   - **Name:** High Tide Tours Booking API
   - **Associated workspace:** Select your workspace
   - **Type:** Internal integration
4. Click **"Submit"**
5. **Copy the Internal Integration Token** (starts with `secret_...`)
   - You'll need this for your `.env` file
   - Keep it secret! Never commit it to GitHub

---

## Step 2: Share Database with Integration

1. Open your booking database in Notion:
   - [📋 HIGH TIDE TOURS - BOOKINGS DATABASE](https://www.notion.so/c372aea0cdb9402288f7771dd32c8447)
2. Click the **"⋯"** menu (top right of database)
3. Select **"Connect to"**
4. Search for **"High Tide Tours Booking API"**
5. Click to connect
6. The integration now has access to create entries!

---

## Step 3: Configure Environment Variables

### For Local Development:

1. Create a `.env` file in the project root:
   ```bash
   touch .env
   ```

2. Add your Notion API key:
   ```env
   VITE_NOTION_API_KEY=secret_your_integration_token_here
   ```

3. **Never commit `.env` to Git!** (already in `.gitignore`)

### For Production (GitHub Pages):

Since GitHub Pages is a static host, you have two options:

#### Option A: Use Netlify/Vercel Instead (Recommended)
1. Deploy to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
2. Add environment variable in dashboard:
   - **Key:** `VITE_NOTION_API_KEY`
   - **Value:** `secret_your_token_here`
3. These platforms support serverless functions and environment variables

#### Option B: Client-Side API (Less Secure)
- Your Notion token will be exposed in browser
- **Only use if database contains non-sensitive data**
- Add token to `.env` and Vite will bundle it
- Users can see the token in DevTools (not ideal)

#### Option C: Build a Backend API (Most Secure)
1. Create a simple Express.js backend:
   ```javascript
   // server.js
   import express from 'express';
   import fetch from 'node-fetch';
   
   const app = express();
   app.use(express.json());
   
   app.post('/api/bookings', async (req, res) => {
     const response = await fetch('https://api.notion.com/v1/pages', {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
         'Content-Type': 'application/json',
         'Notion-Version': '2022-06-28'
       },
       body: JSON.stringify(req.body)
     });
     
     const data = await response.json();
     res.json(data);
   });
   
   app.listen(3000);
   ```

2. Deploy backend to Railway/Render/Heroku
3. Update `src/utils/notionApi.js` to call your backend instead

---

## Step 4: Test the Integration

1. Start development server:
   ```bash
   npm run dev
   ```

2. Navigate to any tour package
3. Click "Book" button
4. Fill out the booking form
5. Submit the form
6. Check your Notion database for the new entry!

### What Gets Created:
- **Booking ID:** Auto-generated (e.g., `SAR-123456`)
- **Customer Name:** From form
- **Email & Phone:** From form
- **Package:** Selected tour package
- **Tour Date:** Parsed from date input
- **Guests:** Number of people
- **Price:** Package price
- **Payment Status:** 💳 Pending (default)
- **Booking Status:** 🆕 New (default)
- **Source:** Website Form
- **Gift Tier:** Auto-calculated (Bronze/Silver/Gold)
- **Group Discount:** Auto-calculated based on guest count

---

## Database Structure

### Properties in Notion Database:

| Property | Type | Description |
|----------|------|-------------|
| Booking ID | Title | Unique identifier |
| Customer Name | Text | Guest's full name |
| Email | Email | Contact email |
| Phone | Phone | WhatsApp number |
| Package | Select | Tour package booked |
| Tour Date | Date | Scheduled tour date |
| Guests | Number | Number of people |
| Price | Number (ZAR) | Package price |
| Payment Status | Select | 💳 Pending, ✅ Paid, ⏳ Deposit, ❌ Cancelled |
| Booking Status | Select | 🆕 New, ✅ Confirmed, 📅 Scheduled, 🎉 Completed |
| Source | Select | Website Form, WhatsApp, Instagram, etc. |
| Special Requests | Text | Customer notes |
| Gift Tier | Select | 🥉 Bronze, 🥈 Silver, 🏆 Gold |
| Group Discount | Select | Auto-calculated discount |
| Photographer Assigned | Checkbox | Operations tracking |
| Transport Arranged | Checkbox | Operations tracking |
| Cannabis Products Prepared | Checkbox | Operations tracking |
| Follow-up Date | Date | Reminder system |
| Notes | Text | Internal notes |

---

## Troubleshooting

### Error: "object not found"
**Solution:** Database not shared with integration
- Go to database → ⋯ menu → Connect to integration

### Error: "unauthorized"
**Solution:** Invalid or missing API key
- Check `.env` file has correct token
- Verify token starts with `secret_`
- Restart dev server after adding `.env`

### Error: "validation_error"
**Solution:** Data format mismatch
- Check date formats (ISO-8601: YYYY-MM-DD)
- Verify select options match database exactly
- Check number fields are actual numbers

### Booking not appearing in Notion
**Solution:** Check console for errors
- Open browser DevTools → Console tab
- Look for red error messages
- Check Network tab for failed API calls

---

## Notion API Reference

- **API Docs:** https://developers.notion.com/
- **Database ID:** `c372aea0cdb9402288f7771dd32c8447`
- **Data Source:** `512f53ff-3ab2-41ff-b1aa-1ac90e195f01`
- **API Version:** `2022-06-28`

---

## Security Best Practices

1. **Never expose API keys in frontend code**
   - Use environment variables
   - Add `.env` to `.gitignore`
   - Use backend API for production

2. **Validate all user inputs**
   - Already implemented in `BookingForm.jsx`
   - Form validation prevents bad data

3. **Rate limiting**
   - Consider adding rate limits to prevent spam
   - Notion has 3 requests/second limit

4. **Error handling**
   - Already implemented with try/catch
   - Graceful fallback to WhatsApp if API fails

---

## Next Steps

1. ✅ Set up Notion integration (you're here)
2. ✅ Share database with integration
3. ✅ Add API key to `.env`
4. ✅ Test booking submission
5. 🔲 Deploy to Netlify/Vercel with environment variables
6. 🔲 Set up email notifications (Zapier/Make)
7. 🔲 Create Notion dashboard views (Calendar, Revenue, Status)
8. 🔲 Add automated follow-up reminders

---

## Questions?

Contact Lily: +27 64 220 5618 (WhatsApp)
