// assets/js/heartCursor.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Create the heart cursor
//     const cursor = document.createElement('div');
//     cursor.id = 'heartCursor';
//     cursor.className = 'heart-cursor';
//     document.body.appendChild(cursor);

//     // Follow the mouse and trail sparkles
//     document.addEventListener('mousemove', (e) => {
//         cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

//         const sparkle = document.createElement('div');
//         sparkle.className = 'sparkle';
//         sparkle.style.left = e.pageX + 'px';
//         sparkle.style.top = e.pageY + 'px';
//         document.body.appendChild(sparkle);

//         setTimeout(() => sparkle.remove(), 1000);
//     });
// });
const cursor = document.querySelector('.emoji-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});


const neonColors = [
    '#ff00ff', '#00ffff', '#39ff14', '#ff073a', '#f5ff00',
    '#ff6ec7', '#0ff0fc', '#ffa500', '#7df9ff', '#ff1493'
];

function randomNeon() {
    return neonColors[Math.floor(Math.random() * neonColors.length)];
}

document.querySelectorAll('.step').forEach(el => {
    el.classList.add('glow-hover');
    el.addEventListener('mouseenter', () => {
        el.style.setProperty('--glow-color', randomNeon());
        el.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        el.classList.remove('hovered');
    });
});
