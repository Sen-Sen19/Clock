<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="clock.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> <!-- Include FontAwesome -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0C5.383 0 0 5.383 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.617-5.383-12-12-12zm0 21c-5.514 0-10-4.486-10-10S6.486 1 12 1s10 4.486 10 10-4.486 10-10 10z'/%3E%3Cpath d='M12 5a1 1 0 0 1 1 1v5h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5V6a1 1 0 0 1 1-1z'/%3E%3C/svg%3E">
    <title>My Timer</title>
</head>

<body>
    <div class="container">
        <div class="clock-container">
            <h1>Clock</h1>
            <div id="clock"></div>
        </div>
        <div class="timers-container">
            <h1>Timer</h1>
            <div class="timer">
                <span>9 AM First Break: </span><span id="timer1" class="neon-blue"></span>
            </div>
            <div class="timer">
                <span>12 PM Lunch: </span><span id="timer2" class="neon-blue"></span>
            </div>
            <div class="timer">
                <span>3 PM Tea Break: </span><span id="timer3" class="neon-blue"></span>
            </div>
            <div class="timer">
                <span>6 PM Out: </span><span id="timer4" class="neon-blue"></span>
            </div>
        </div>
    </div>
    <script src="clock.js"></script>
</body>
</html>
