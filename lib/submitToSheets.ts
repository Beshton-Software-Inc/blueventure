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
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return {
      success: result.success,
      message: result.message,
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again.',
    };
  }
}
