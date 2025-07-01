function goToLovePage() {
    window.location.href = "love.html";
}

// ❤️ Love page effect
if (window.location.pathname.includes("love.html")) {
    setInterval(() => {
        let heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        heart.style.opacity = 1;
        heart.style.transition = 'top 3s linear, opacity 3s';
        document.body.appendChild(heart);

        // trigger animation
        setTimeout(() => {
            heart.style.top = window.innerHeight + 'px';
            heart.style.opacity = 0;
        }, 100);

        // remove after animation
        setTimeout(() => {
            heart.remove();
        }, 3100);

    }, 300); // প্রতি 300ms এ নতুন ❤️
}

