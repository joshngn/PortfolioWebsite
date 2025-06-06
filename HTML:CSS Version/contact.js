document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs.send("service_bsldgd8", "template_s9rb1dk", {
        name: name,
        email: email,
        message: message,

    })
        .then(() => {
            alert("Message sent successfully! Please wait 2 - 3 Business days. Thank you");
            document.getElementById("contactForm").reset(); // Reset form
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        });
});