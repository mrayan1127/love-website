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
        heart.style.top = '-30px';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        heart.style.zIndex = 9999;
        document.body.appendChild(heart);

        let fall = setInterval(() => {
            let top = parseFloat(heart.style.top);
            heart.style.top = top + 2 + 'px';
            if (top > window.innerHeight) {
                heart.remove();
                clearInterval(fall);
            }
        }, 20);
    }, 300); // প্রতি 300ms এ নতুন ❤️
}
