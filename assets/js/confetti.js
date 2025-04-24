// Load the confetti library from CDN
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
script.onload = () => {
    // When loaded, add event listeners
    document.querySelectorAll("details").forEach((el) => {
        el.addEventListener("toggle", () => {
            if (el.open && el.querySelector("summary").textContent.includes("🎉")) {
                confetti({
                    particleCount: 150,
                    spread: 90,
                    origin: { y: 0.3 },
                });
            }
        });
    });
};
document.head.appendChild(script);
