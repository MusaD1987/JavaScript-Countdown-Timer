document.addEventListener('DOMContentLoaded', function () {
    let countdownInterval;

    function updateCountdown() {
        const targetDate = new Date(document.getElementById('targetDate').value);
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = formatTime(days);
            document.getElementById('hours').textContent = formatTime(hours);
            document.getElementById('minutes').textContent = formatTime(minutes);
            document.getElementById('seconds').textContent = formatTime(seconds);
        } else {
            clearInterval(countdownInterval);
            alert('Countdown has ended!');
        }
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function startCountdown() {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    function stopCountdown() {
        clearInterval(countdownInterval);
    }

    
    document.getElementById('startBtn').addEventListener('click', startCountdown);
    document.getElementById('stopBtn').addEventListener('click', stopCountdown);
});