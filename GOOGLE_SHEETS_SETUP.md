# Google Sheets Integration Setup

This guide will help you connect your forms to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Blue Venture Hacks - Form Submissions"
3. Create two sheets (tabs):
   - **Contact Forms** - for contact form submissions
   - **Newsletter** - for newsletter signups

### Contact Forms Sheet Setup

Add these column headers in row 1:
- A1: `Timestamp`
- B1: `Name`
- C1: `Email`
- D1: `Interest`
- E1: `Message`

### Newsletter Sheet Setup

Add these column headers in row 1:
- A1: `Timestamp`
- B1: `Email`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste the code below:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.type || 'Contact Forms';
    
    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Sheet not found: ' + sheetName
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare row data based on type
    let rowData;
    const timestamp = new Date();
    
    if (sheetName === 'Newsletter') {
      rowData = [
        timestamp,
        data.email
      ];
    } else {
      // Contact Forms
      rowData = [
        timestamp,
        data.name,
        data.email,
        data.interest,
        data.message
      ];
    }
    
    // Append the row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Apps Script is working!'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click the **Save** icon (💾)
5. Name your project: "Blue Venture Hacks Form Handler"

## Step 3: Deploy the Apps Script

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **Web app**
4. Configure:
   - **Description**: "Form submission handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize access** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" if you see a warning
   - Click "Go to [Project Name] (unsafe)" - this is your own script
   - Click "Allow"
7. **Copy the Web app URL** - it will look like:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## Step 4: Add URL to Environment Variables

1. In your project root, create a file named `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_URL=your_web_app_url_here
```

2. Replace `your_web_app_url_here` with the URL you copied

3. Restart your dev server:
```bash
npm run dev
```

## Step 5: Test the Forms

1. Go to http://localhost:3000/contact
2. Fill out and submit the contact form
3. Check your Google Sheet - you should see a new row!
4. Test the newsletter form on http://localhost:3000/get-involved

## Troubleshooting

### Form submission fails
- Check that the Web app URL is correct in `.env.local`
- Make sure the Apps Script is deployed with "Anyone" access
- Check the Apps Script logs: **Executions** tab in Apps Script

### No data appears in sheet
- Verify sheet names match exactly: "Contact Forms" and "Newsletter"
- Check column headers are in row 1
- Look at Apps Script execution logs for errors

### Authorization issues
- Re-deploy the Apps Script
- Make sure you authorized the script with your Google account
- Check "Who has access" is set to "Anyone"

## Production Deployment

For production (Vercel, Netlify, etc.):

1. Add the environment variable in your hosting platform:
   - Variable name: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
   - Value: Your Apps Script web app URL

2. Redeploy your site

## Security Notes

- The Apps Script URL is public but only accepts POST requests with specific data
- Anyone with the URL can submit forms (which is expected behavior)
- To add spam protection, consider adding reCAPTCHA later
- Never commit `.env.local` to git (already in .gitignore)

## Optional: Add Email Notifications

To get email notifications when forms are submitted, add this to your Apps Script:

```javascript
function sendEmailNotification(data) {
  const recipient = 'your-email@example.com';
  const subject = 'New Form Submission - Blue Venture Hacks';
  
  let body = 'New form submission:\n\n';
  if (data.type === 'Newsletter') {
    body += `Email: ${data.email}`;
  } else {
    body += `Name: ${data.name}\n`;
    body += `Email: ${data.email}\n`;
    body += `Interest: ${data.interest}\n`;
    body += `Message: ${data.message}`;
  }
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in your `doPost` function:
```javascript
// After sheet.appendRow(rowData);
sendEmailNotification(data);
```

---

That's it! Your forms are now connected to Google Sheets. 🎉
