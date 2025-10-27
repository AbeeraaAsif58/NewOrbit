import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_ernn92d';
const EMAILJS_TEMPLATE_ID = 'template_7gifpnn';
const EMAILJS_PUBLIC_KEY = 'aROe-B77ImZpVf7kk';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key_here') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send contact form email to info@orbitwalls.com
 * @param {FormData} formData - Form data from the contact form
 * @returns {Promise<Object>} Result object with success status and message
 */
export const sendContactEmail = async (formData) => {
  // Check if EmailJS is configured
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'your_public_key_here') {
    console.warn('EmailJS not configured. Please set up your EmailJS credentials.');
    return {
      success: false,
      message: 'Email service not configured. Please contact us directly at info@orbitwalls.com',
    };
  }

  try {
    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Template parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      subject: subject,
      message: message,
      to_email: 'info@orbitwalls.com',
      reply_to: email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return {
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.',
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly at info@orbitwalls.com',
    };
  }
};
