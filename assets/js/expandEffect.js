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
        // // Particle burst - hearts floating upwards
        // for (let i = 0; i < 130; i++) {
        //     const heart = document.createElement('div');
        //     heart.className = 'burst-heart';
        //     heart.style.left = `${Math.random() * 100}%`;
        //     heart.style.animationDelay = `${Math.random()}s`;
        //     heart.style.animationDuration = `${Math.random() * 2 + 2}s`; // Random floating duration
        //     target.appendChild(heart);
        //     setTimeout(() => heart.remove(), 8000); // Increased duration for floating effect
        // }

        // Add shimmer class to summary
        const summary = target.querySelector('summary');
        if (summary) {
            summary.classList.add('shimmer-text');
            setTimeout(() => summary.classList.remove('shimmer-text'), 3000);
        }

        // Trigger slide+fade on content
        const content = target.querySelector(':scope > *:not(summary)');
        if (content) {
            content.classList.add('slide-fade-in');
            setTimeout(() => content.classList.remove('slide-fade-in'), 2000);
        }
    }
});

function toggleMenu() {
    var nav = document.getElementById("nav-links");
    nav.classList.toggle("show");
}
