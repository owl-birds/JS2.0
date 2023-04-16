console.log("TRYING TO MAKE TIMER");
// vars
var timeout_id = null;
// let timeout_id: number | ReturnType<typeof setTimeout> = 0;
var ms = 0;
var second = 0;
var minute = 0;
var hour = 0;
var time_inc = 1000; // in milliseconds
// let is_running = false;
// html stuffs
var start_button = document.querySelector("#start_timer");
var stop_button = document.querySelector("#stop_timer");
var second_d = document.querySelector("#second");
var minute_d = document.querySelector("#minute");
var hour_d = document.querySelector("#hour");
// console.log(start_button, stop_button);
var initiate_timer = function () {
    ms = 0;
    second = 0;
    minute = 0;
    hour = 0;
    if (second_d && minute_d && hour_d) {
        second_d.innerText = "00";
        minute_d.innerText = "00";
        hour_d.innerText = "00";
    }
    // timeout_id = null;
};
var start_function = function (inc) {
    if (inc === void 0) { inc = time_inc; }
    //
    //   if (is_running) {
    //     return;
    //   }
    //   is_running = true;
    if (start_button) {
        start_button.disabled = true;
    }
    // console.log("START FUNC");
    timeout_id = setTimeout(function () {
        ms += inc;
        if (ms === 1000) {
            second += 1;
            ms = 0;
            console.log("".concat(second, " second"));
            var display_text = second < 10 ? "0".concat(second) : "".concat(second);
            if (second_d)
                second_d.innerText = display_text;
        }
        if (second === 60) {
            minute += 1;
            second = 0;
            console.log("".concat(minute, " minute"));
            var display_text = minute < 10 ? "0".concat(minute) : "".concat(minute);
            if (second_d)
                second_d.innerText = "00";
            if (minute_d)
                minute_d.innerText = display_text;
        }
        if (minute === 60) {
            hour += 1;
            minute = 0;
            console.log("".concat(hour, " hour"));
            var display_text = hour < 10 ? "0".concat(hour) : "".concat(hour);
            if (minute_d)
                minute_d.innerText = "00";
            if (hour_d)
                hour_d.innerText = display_text;
        }
        start_function();
    }, inc);
};
var stop_function = function () {
    if (timeout_id) {
        initiate_timer();
        // console.log(timeout_id);
        clearTimeout(timeout_id);
        // console.log(timeout_id);
        if (start_button) {
            start_button.disabled = false;
        }
        // is_running = false;
    }
};
//
initiate_timer();
start_button === null || start_button === void 0 ? void 0 : start_button.addEventListener("click", function () {
    console.log("START TIMER");
    start_function();
});
stop_button === null || stop_button === void 0 ? void 0 : stop_button.addEventListener("click", function () {
    console.log("STOP TIMER");
    stop_function();
});
