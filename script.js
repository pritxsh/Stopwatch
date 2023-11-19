let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = 0;

function startfunc() {
    console.log("clicked start");
    timer = true;
    stopwatch();

}

function stopfunc() {
    timer = false;
}
function resetfunc() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerText = "00";
}

function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            count = 0;
            sec = sec + 1;
        }
        if (sec == 60) {
            sec = 0;
            min = min + 1;

        }
        if (min == 60) {
            min = 0;
            sec = 0;
            hr = hr + 1;
        }
        if (hr == 24) {

            hr = 0;
        }
        let hrstring = hr;
        let minstring = min;
        let secstring = sec;
        let countstring = count;
        if (hr < 10) {
            hrstring = "0" + hrstring;
        }

        if (min < 10) {
            minstring = "0" + minstring;
        }

        if (sec < 10) {
            secstring = "0" + secstring;
        }

        if (count < 10) {
            countstring = "0" + countstring;
        }

        document.getElementById("count").innerHTML = countstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("hr").innerHTML = hrstring;


        setTimeout("stopwatch()", 10);

    }
}


