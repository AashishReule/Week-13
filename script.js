document.addEventListener('DOMContentLoaded', () => {
    // 1. Simple Alert for Contact Button
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            alert('Thank you for reaching out, Aashish will get back to you soon!');
        });
    }

    // 2. Simple Countdown Timer Logic
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15); // Set target to 15 days from now

    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (countdownElement) {
            countdownElement.innerHTML = `<span>Final Project Due: \${days}d \${hours}h \${minutes}m</span>`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
