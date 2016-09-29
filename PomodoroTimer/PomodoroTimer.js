window.onload = function () {
    var raf = null;
    var isSessionTimer = true;
    var end = new Date();
    var start = new Date();
    var elapse = 0;


    // minitus
    function getBreakTime() {
        return Number.parseInt(document.getElementById("breakTime").textContent);
    }
    // minitus
    function setBreakTime(val) {
        document.getElementById("breakTime").textContent = val;
    }

    // minitus
    function getSessionTime() {
        return Number.parseInt(document.getElementById("sessionTime").textContent);
    }
    // minitus
    function setSessionTime(val) {
        document.getElementById("sessionTime").textContent = val;
    }

    var breakTimeOrigin = getBreakTime() * 60000;//ms
    var breakTime = breakTimeOrigin;
    var sessionTimeOrigin = getSessionTime() * 60000;//ms
    var sessionTime = sessionTimeOrigin;


    document.getElementById("breakMinus").onclick = function () {
        var temp = getBreakTime();
        setBreakTime(--temp);
        if (getBreakTime() < 1) {
            setBreakTime(1);
        }
        breakTimeOrigin = getBreakTime() * 60000;
        breakTime = breakTimeOrigin;
    }

    document.getElementById("breakPlus").onclick = function () {
        var temp = getBreakTime();
        setBreakTime(++temp);
        if (getBreakTime() >= 59) {
            setBreakTime(59);
        }
        breakTimeOrigin = getBreakTime() * 60000;
        breakTime = breakTimeOrigin;
    }

    document.getElementById("sessionMinus").onclick = function () {
        var temp = getSessionTime();
        setSessionTime(--temp);
        if (getSessionTime() < 1) {
            setSessionTime(1);
        }
        sessionTimeOrigin = getSessionTime() * 60000;
        sessionTime = sessionTimeOrigin;
    }

    document.getElementById("sessionPlus").onclick = function () {
        var temp = getSessionTime();
        setSessionTime(++temp);
        if (getSessionTime() >= 59) {
            setSessionTime(59);
        }
        sessionTimeOrigin = getSessionTime() * 60000;
        sessionTime = sessionTimeOrigin;
    }

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var sessionTimer = {
        circleHeight: 0,
        timeTxt: "00:00",
        // circleHeight range is (0-230);
        draw: function () {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(125, 125, 115, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();

            ctx.globalCompositeOperation = "source-in";
            ctx.fillStyle = "yellow";
            ctx.fillRect(0, canvas.height - 10 - this.circleHeight, canvas.width, this.circleHeight);

            ctx.globalCompositeOperation = "source-over";
            ctx.beginPath();
            ctx.arc(125, 125, 120, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = "black";
            ctx.font = "48px serif";
            ctx.fillText(this.timeTxt, 75, canvas.height / 2);
        }
    };

    var breakTimer = {
        circleHeight: 0,
        timeTxt: "00:00",
        // circleHeight range is (0-230);
        draw: function () {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(125, 125, 115, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();

            ctx.globalCompositeOperation = "source-in";
            ctx.fillStyle = "green";
            ctx.fillRect(0, canvas.height - 10 - this.circleHeight, canvas.width, this.circleHeight);

            ctx.globalCompositeOperation = "source-over";
            ctx.beginPath();
            ctx.arc(125, 125, 120, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = "black";
            ctx.font = "48px serif";
            ctx.fillText(this.timeTxt, 75, canvas.height / 2);
        }
    };


    function draw() {
        end = Date.now();
        elapse = end - start;
        start = end;
        ctx.clearRect(0, 0, canvas.width, canvas.height);



        if (isSessionTimer) {
            sessionTime -= elapse;
            sessionTimer.circleHeight = (1 - sessionTime / sessionTimeOrigin) * 230;
            sessionTimer.timeTxt = msToString(sessionTime);
            sessionTimer.draw();
            if (sessionTime <= 0) {
                isSessionTimer = false;
                breakTime = breakTimeOrigin;
            }
        } else {
            breakTime -= elapse;
            breakTimer.circleHeight = (1 - breakTime / breakTimeOrigin) * 230;
            breakTimer.timeTxt = msToString(breakTime);
            breakTimer.draw();
            if (breakTime <= 0) {
                isSessionTimer = true;
                sessionTime = sessionTimeOrigin;
            }
        }
        raf = window.requestAnimationFrame(draw);
    }

    function msToString(ms) {
        if (ms <= 0)
            return "00:00";
        var min = Math.floor(ms / 60000);
        var sec = Math.floor((ms - min * 60000) / 1000);

        if (min < 10) {
            var minString = "0" + min.toString();
        } else {
            var minString = min.toString();
        }

        if (sec < 10) {
            var secString = "0" + sec.toString();
        } else {
            var secString = sec.toString();
        }

        return minString + ":" + secString;
    }


    canvas.addEventListener('click', function (e) {
        if (raf) {
            window.cancelAnimationFrame(raf);
            raf = 0;
        } else {
            start = Date.now();
            raf = window.requestAnimationFrame(draw);
        }

    });

    sessionTimer.draw();

    document.getElementById("resetBtn").onclick = function () {
        setBreakTime(5);
        setSessionTime(25);
        isSessionTimer = true;
        elapse = 0;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sessionTimer.timeTxt = "00:00";
        sessionTimer.circleHeight = 0;
        sessionTimer.draw();

        sessionTimeOrigin = getSessionTime() * 60000;
        sessionTime = sessionTimeOrigin;
        breakTimeOrigin = getBreakTime() * 60000;
        breakTime = breakTimeOrigin;
    }


}