document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for the Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
    const testimonialCount = testimonials.length;
    let currentIndex = 0;

    // Function to show a specific testimonial
    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? 'block' : 'none';
        });
    };

    // Show the first testimonial on load
    showTestimonial(currentIndex);

    // Function to go to the next testimonial
    const nextTestimonial = () => {
        currentIndex = (currentIndex + 1) % testimonialCount;
        showTestimonial(currentIndex);
    };

    // Function to go to the previous testimonial
    const prevTestimonial = () => {
        currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        showTestimonial(currentIndex);
    };

    // Auto-slide every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Form elements
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorMessages = [];

        // Basic validation checks
        if (name === '') {
            errorMessages.push('Name is required.');
        }

        if (email === '') {
            errorMessages.push('Email is required.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorMessages.push('Email is invalid.');
        }

        if (message === '') {
            errorMessages.push('Message is required.');
        }

        // Display error messages or submit the form
        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
        } else {
            alert('Your message has been sent successfully!');
            form.reset(); // Clear the form fields
        }
    });
});