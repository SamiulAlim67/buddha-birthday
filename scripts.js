document.addEventListener('DOMContentLoaded', () => {
    // Change Font Style on Click
    document.getElementById('changeFontBtn').addEventListener('click', () => {
        document.body.style.fontFamily = document.body.style.fontFamily === 'Arial, sans-serif' ? 'Courier New, monospace' : 'Arial, sans-serif';
    });

    // Dynamic Background Color
    setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }, 5000);

    // Interactive Quote Generator
    const quotes = [
        "The mind is everything. What you think you become.",
        "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "You will not be punished for your anger, you will be punished by your anger.",
        "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."
    ];

    document.getElementById('newQuoteBtn').addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteDisplay').innerText = randomQuote;
    });

    // Countdown Timer
    const targetDate = new Date("May 26, 2024 00:00:00").getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('time').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('time').innerText = "The event has started!";
        }
    }, 1000);

    // Modal Popup
    const modal = document.getElementById('infoModal');
    const btn = document.getElementById('moreInfoBtn');
    const span = document.getElementById('closeModal');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('prevSlideBtn').addEventListener('click', () => {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
        showSlide(slideIndex);
    });

    document.getElementById('nextSlideBtn').addEventListener('click', () => {
        slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
        showSlide(slideIndex);
    });

    showSlide(slideIndex); // Show the first slide
});
