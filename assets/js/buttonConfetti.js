document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('sparkle-booking');

    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            // Launch email after slight delay
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    }
});
