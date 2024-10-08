document.getElementById('business-info-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect the form data
    const businessName = document.getElementById('business-name').value;
    const businessType = document.getElementById('business-type').value;
    const location = document.getElementById('location').value;
    const services = document.getElementById('services').value;
    const contactInfo = document.getElementById('contact-info').value;

    // Generate HTML content for the template
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${businessName} - ${businessType}</title>
        <meta name="description" content="${businessType} located in ${location}. Services include ${services}.">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <h1>Welcome to ${businessName}</h1>
            <p>Providing professional ${businessType} services in ${location}</p>
        </header>
        <section id="services">
            <h2>Our Services</h2>
            <p>${services}</p>
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>${contactInfo}</p>
        </section>
    </body>
    </html>`;

    // Create a Blob from the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Show the download link
    const downloadLink = document.getElementById('download-link');
    downloadLink.href = url;
    downloadLink.style.display = 'block';

    document.getElementById('download-section').style.display = 'block';
});
