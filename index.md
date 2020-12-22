<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="styles.css">
    
    <script data-ad-client="ca-pub-4053676307950677" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>
    <h1 class="main-title">Countdown timer</h1>
    <p class="main-text">Enter the final date bellow</p>

    <div class="input-container">
        <input type="date" name="target-date" id="target-date" value="" 
        onchange="calctimeto(this.value)">
    </div>

    <br>
    <div class="countdown-container">
        <div class="clock-column">
            <p class="clock-days"></p>
            <p class="label">Days</p>
        </div>
        <div class="clock-column">
            <p class="clock-hours"></p>
            <p class="label">Hours</p>
        </div>
        <div class="clock-column">
            <p class="clock-minutes"></p>
            <p class="label">Minutes</p>
        </div>
        <div class="clock-column">
            <p class="clock-seconds"></p>
            <p class="label">Seconds</p>
        </div>
    </div>
    <br>
    <hr>
    <script src="script.js"></script>

</body>

</html>
