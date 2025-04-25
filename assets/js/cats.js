const step = document.getElementById('cats');

step.addEventListener('toggle', () => {
    if (step.open) {
        document.body.classList.add('sparkle-cursor');
    } else {
        document.body.classList.remove('sparkle-cursor');
    }
});
