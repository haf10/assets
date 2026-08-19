window.addEventListener('load', () => {
    const observer = new MutationObserver((mutations, obs) => {
        const videoEl = document.querySelector('video');
        if (videoEl) {
            videoEl.setAttribute('autoplay', '');
            videoEl.setAttribute('muted', '');
            videoEl.setAttribute('playsinline', '');
            obs.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
    const clockText = document.getElementById("clock");
    const overlay = document.getElementById("overlay");
    const target = document.getElementById("ar-target");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourAngle = (hours % 12) * 30 + minutes * 0.5;
        const minuteAngle = minutes * 6;
        const secondAngle = seconds * 6;

        if (hourHand) hourHand.setAttribute("rotation", `0 0 ${-hourAngle}`);
        if (minuteHand) minuteHand.setAttribute("rotation", `0 0 ${-minuteAngle}`);
        if (secondHand) secondHand.setAttribute("rotation", `0 0 ${-secondAngle}`);

        if (clockText) clockText.textContent = now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();

    if (target) {
        target.addEventListener("targetFound", () => {
            if (overlay) overlay.style.display = "block";
        });
        target.addEventListener("targetLost", () => {
            if (overlay) overlay.style.display = "none";
        });
    }
});
