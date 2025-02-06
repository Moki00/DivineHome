// Email form
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    // init("USER_ID");
    emailjs.init("k_mqvfpXwVIJ2nuSw");

    // Collect form data
    const formData = {
      name: this.querySelector("[name='from_name']").value,
      email: this.querySelector("[name='email']").value,
      phone: this.querySelector("[name='phone_number']").value,
      message: this.querySelector("[name='message']").value,
    };

    // emailjs:SERVICE_ID-TEMPLATE_ID-formData
    emailjs
      .send("service_owu350n", "template_vna2gyi", formData)
      .then(() => {
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error sending your message. Please try again later.");
      });
  });
