export interface ContactFormData {
  name: string;
  email: string;
  interest: string;
  message: string;
  type?: 'Contact Forms';
}

export interface NewsletterFormData {
  email: string;
  type: 'Newsletter';
}

type FormData = ContactFormData | NewsletterFormData;

export async function submitToGoogleSheets(
  data: FormData
): Promise<{ success: boolean; message: string }> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

  if (!url) {
    console.error('Google Sheets URL not configured');
    return {
      success: false,
      message: 'Form submission is not configured. Please try again later.',
    };
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Note: With 'no-cors', we can't read the response
    // We assume success if no error was thrown
    return {
      success: true,
      message: 'Form submitted successfully!',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
    };
  }
}
