import API_BASE_URL from './config.js';

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const submitButton = document.getElementById('submit');

  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
      alert('Enter a valid name.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Enter a valid phone number.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Enter a valid email address.');
      return;
    }

    if (message.length < 4) {
      alert('Message must be more than 10 letters.');
      return;
    }

    // Disable button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';

    // Collect form data
    const formData = new FormData();
    formData.append('from_name', document.getElementById('name').value);
    formData.append('phone_number', document.getElementById('phone').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('message', document.getElementById('message').value);

    // Append file if selected
    const fileInput = document.getElementById('file');
    if (fileInput.files.length > 0) {
      formData.append('file', fileInput.files[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        body: formData, // Send form data
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        console.error('Server error:', errorMessage);
        alert(errorMessage.message); // rate limit message
        return;
      }

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send'; // Reset submit button
    }
  });
});
