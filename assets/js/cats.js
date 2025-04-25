const step = document.getElementById('cats');
step.addEventListener('toggle', () => {
    if (step.open) {
        for (let i = 0; i < 6; i++) {
            const cat = document.createElement('div');
            cat.classList.add('cat');
            cat.textContent = '🐈';
            cat.style.left = Math.random() * 80 + 10 + '%';
            cat.style.top = '0';
            document.querySelector('.step').appendChild(cat);
            setTimeout(() => cat.remove(), 2000);
        }
    }
});