import API_BASE_URL from './config.js';

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log('Form sent to backend');

    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...'; // Change button text

    // Collect form data
    const formData = {
      from_name: document.getElementById('name').value,
      phone_number: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    console.log('Form data:', formData);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        console.error('Server error:', errorMessage);
        console.log('Error message:', errorMessage.message);
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
      submitButton.innerHTML = 'Send'; // Change button text
    }
  });
