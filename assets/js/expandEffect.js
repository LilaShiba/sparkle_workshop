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
        const effect = document.createElement('div');
        effect.className = 'expand-glow-effect';
        target.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 1000); // duration of the effect
    }
});
