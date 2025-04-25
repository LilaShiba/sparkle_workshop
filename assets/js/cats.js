<script>
document.addEventListener('DOMContentLoaded', () => {
  // The dot that follows the cursor
  const sparkleCursor = document.createElement('div');
    sparkleCursor.className = 'sparkle-cursor';
    document.body.appendChild(sparkleCursor);

  document.addEventListener('mousemove', (e) => {
        // Move the sparkleCursor with the mouse
        sparkleCursor.style.left = `${e.pageX}px`;
    sparkleCursor.style.top = `${e.pageY}px`;

    // Create a trailing sparkle
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    // Randomize sparkle size and rotation
    const scale = Math.random() * 0.8 + 0.3; // Between 0.3 and 1.1
    const rotation = Math.random() * 360;
    sparkle.style.transform = `scale(${scale}) rotate(${rotation}deg)`;

    // Optional shimmer glow
    sparkle.style.boxShadow = `0 0 6px 2px gold`;

    document.body.appendChild(sparkle);

    // Clean up after animation
    setTimeout(() => sparkle.remove(), 600);
  });
});
</script>
