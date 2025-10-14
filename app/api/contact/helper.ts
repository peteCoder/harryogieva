
export const structuredHTML = (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9fafb; border-radius: 10px; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>Harry Ogieva </h2>
        </div>
        <div style="background: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; margin-bottom: 10px;">📩 New Contact Form Submission</h2>
          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            <strong>Name:</strong> ${name} <br />
            <strong>Email:</strong> ${email} <br />
            <strong>Phone:</strong> ${phone} <br /><br />
            <strong>Message:</strong><br/>
            <span style="white-space: pre-wrap;">${message}</span>
          </p>
        </div>
        <p style="text-align: center; font-size: 13px; color: #6b7280; margin-top: 20px;">
          This email was automatically sent from your website's contact form.
        </p>
      </div>
    `;
  return htmlContent;
};
