document.addEventListener('DOMContentLoaded', () => {
    const firstDetails = document.querySelector('details');
    let effectAlreadyPlayed = false;

    if (firstDetails) {
        firstDetails.addEventListener('toggle', () => {
            if (firstDetails.open && !effectAlreadyPlayed) {
                triggerExpandEffect(firstDetails);
                effectAlreadyPlayed = true;
            }
        });
    }

    function triggerExpandEffect(target) {
        // Glow effect
        // const glow = document.createElement('div');
        // glow.className = 'expand-glow-effect';
        // target.appendChild(glow);
        // setTimeout(() => glow.remove(), 2000);

        // Particle burst
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'burst-heart';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random()}s`;
            target.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }

        // Add shimmer class to summary
        const summary = target.querySelector('summary');
        if (summary) {
            summary.classList.add('shimmer-text');
            setTimeout(() => summary.classList.remove('shimmer-text'), 1500);
        }

        // Trigger slide+fade on content
        const content = target.querySelector(':scope > *:not(summary)');
        if (content) {
            content.classList.add('slide-fade-in');
            setTimeout(() => content.classList.remove('slide-fade-in'), 1000);
        }
    }
});
