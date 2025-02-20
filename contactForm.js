import API_BASE_URL from './config.js';

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
      from_name: document.getElementById('name').value,
      phone_number: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  });
