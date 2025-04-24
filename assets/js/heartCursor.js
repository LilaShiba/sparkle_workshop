// assets/js/heartCursor.js

document.addEventListener('DOMContentLoaded', () => {
    // Create the heart cursor
    const cursor = document.createElement('div');
    cursor.id = 'heartCursor';
    cursor.className = 'heart-cursor';
    document.body.appendChild(cursor);

    // Follow the mouse and trail sparkles
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    });
});
