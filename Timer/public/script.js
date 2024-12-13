// Countdown target date
const targetDate = new Date("February 19, 2025 00:00:00").getTime();

// Update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    console.log(distance);

    if (distance < 0) {
        document.querySelector(".countdown").innerHTML = "<h2>The day has arrived!</h2>";
        return;
    }

    // Calculate time remaining
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Approximate days per month
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)-2);
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)+1);

    // Update the HTML
    document.querySelector(".months-container .number").textContent = months;
    document.querySelector(".days-container .number").textContent = days;
    document.querySelector(".hours-container .number").textContent = hours;
}

// Call the function every second
setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();
