//medium.com/burst/understanding-animation-with-duration-and-easing-using-requestanimationframe-7e3fd1688d6c
// console.log("requestAnimationFrame");
// PARAMETERs ; callbacks
// callback
// The function to call when it's time to update your
// animation for the next repaint.This callback
// function is passed a single argument: a
// DOMHighResTimeStamp indicating the end time of
// the previous frame's rendering (based on the
// number of milliseconds since time origin).
// The timestamp is a decimal number, in
// milliseconds, but with a minimal precision of 1
// millisecond.For Window objects(not Workers), it
// is equal to document.timeline.currentTime.This
// timestamp is shared between all windows that run
// on the same agent(that is, all same - origin
// windows, and more importantly same - origin
// iframes) — which allows synchronizing animations
// across multiple requestAnimationFrame callbacks.
// The timestamp value is also similar to calling
// performance.now() at the start of the callback
// function, but it is never the same value.
// When multiple callbacks queued by
// requestAnimationFrame() begin to fire in a single
// frame, each receives the same timestamp even
// though time has passed during the computation of
// every previous callback's workload.
var single_requestAnimationFrame = function () {
    requestAnimationFrame(function () {
        // this gets executed when the browser has enough
        // resources
        console.log("SINGLE requestAnimationFrame");
    });
};
var square = document.querySelector(".intro .square");
var left = 0;
var amount_of_pixels_to_animate = 600;
var animate = function () {
    left += 5;
    // console.log(left);
    if (square)
        square.style.transform = "translateX(".concat(left, "px)"); // ahHAAHAHAAHAHHA ! HERE
    if (left !== amount_of_pixels_to_animate) {
        requestAnimationFrame(animate);
    }
};
var duration = 4000;
var start_time = null;
left = 0;
var animate_2 = function (time_stamp) {
    //
    // console.log(time_stamp);
    //
    // The first time we're running rAF, we need to set the anchor point as to which we're going to calculate our duration
    if (!start_time) {
        start_time = time_stamp;
    }
    // How long have we been animating in total?
    var runtime = time_stamp - start_time;
    // How much has our animation progressed relative to our duration goal?
    // The result is a number (float) between 0 and 1. So 0 is zero percent en 1 is one hundred percent.
    var relative_progress = runtime / duration;
    // 1. We're calculating a new left position based on the relative progress we've made in time.
    // 2. We're using Math.min to ensure that the progress value will never more be more than 1 (one hundred percent). That way the new animation value will never be more than the distance we want to cover. This is called "clamping".
    left = amount_of_pixels_to_animate * Math.min(relative_progress, 1);
    // Use translateX to ensure GPU use for animation
    if (square)
        square.style.transform = "translateX(".concat(left, "px)");
    // We want to request another frame when our desired duration isn't met yet
    if (runtime < duration) {
        requestAnimationFrame(animate_2);
    }
};
// TEST
console.log("requestAnimationFrame");
console.log(square);
console.log(window.innerWidth);
// RUN
// single_requestAnimationFrame();
// animate();
single_requestAnimationFrame();
requestAnimationFrame(animate_2);
requestAnimationFrame(function (time_stamp) {
    console.log("test time_stamp ", time_stamp);
});
