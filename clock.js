
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;
}

function calculateTimeDifference(targetHour, targetMinute) {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(targetHour, targetMinute, 0, 0);

    if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    const diff = targetTime - now;
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimers() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();
    
    // Check if the current time is 7:30 AM
    if (currentHour === 7 && currentMinute === 30 && currentSecond === 0) {
        // Reset all timers to start again at 7:30 AM
        document.getElementById('timer1').textContent = calculateTimeDifference(9, 0);
        document.getElementById('timer2').textContent = calculateTimeDifference(12, 0);
        document.getElementById('timer3').textContent = calculateTimeDifference(15, 0);
        document.getElementById('timer4').textContent = calculateTimeDifference(18, 0);
        
        // Remove neon-red class if previously applied
        document.getElementById('timer1').classList.remove('neon-red');
        document.getElementById('timer2').classList.remove('neon-red');
        document.getElementById('timer3').classList.remove('neon-red');
        document.getElementById('timer4').classList.remove('neon-red');
    }
    else {
        // Check if the current time is 7:30 AM or later
        if (currentHour > 7 || (currentHour === 7 && currentMinute >= 30)) {
            document.getElementById('timer1').textContent = calculateTimeDifference(9, 0);
            document.getElementById('timer2').textContent = calculateTimeDifference(12, 0);
            document.getElementById('timer3').textContent = calculateTimeDifference(15, 0);
            document.getElementById('timer4').textContent = calculateTimeDifference(18, 0);
        } else { // If the current time is before 7:30 AM, reset all timers to start again at 7:30 AM
            document.getElementById('timer1').textContent = calculateTimeDifference(7, 30);
            document.getElementById('timer2').textContent = calculateTimeDifference(7, 30);
            document.getElementById('timer3').textContent = calculateTimeDifference(7, 30);
            document.getElementById('timer4').textContent = calculateTimeDifference(7, 30);
        }
        
        // Check if any timer has reached 00:00:00 and apply neon-red class
        if (currentHour === 0 && currentMinute === 0 && currentSecond === 0) {
            document.getElementById('timer1').classList.add('neon-red');
            document.getElementById('timer2').classList.add('neon-red');
            document.getElementById('timer3').classList.add('neon-red');
            document.getElementById('timer4').classList.add('neon-red');
        } else {
            // Remove neon-red class if timers are not at 00:00:00
            document.getElementById('timer1').classList.remove('neon-red');
            document.getElementById('timer2').classList.remove('neon-red');
            document.getElementById('timer3').classList.remove('neon-red');
            document.getElementById('timer4').classList.remove('neon-red');
        }
    }
}

// Update the clock and timers every second
setInterval(() => {
    updateClock();
    updateTimers();
}, 1000);

// Initialize the clock and timers immediately on page load
updateClock();
updateTimers();
