console.log("TRYING TO MAKE TIMER");

// vars
let timeout_id: null | ReturnType<typeof setTimeout> = null;
// let timeout_id: number | ReturnType<typeof setTimeout> = 0;
let ms = 0;
let second = 0;
let minute = 0;
let hour = 0;
let time_inc = 1000; // in milliseconds
// let is_running = false;
// html stuffs
const start_button: HTMLButtonElement | null =
  document.querySelector("#start_timer");
const stop_button: HTMLButtonElement | null =
  document.querySelector("#stop_timer");
const second_d: HTMLDivElement | null = document.querySelector("#second");
const minute_d: HTMLDivElement | null = document.querySelector("#minute");
const hour_d: HTMLDivElement | null = document.querySelector("#hour");
// console.log(start_button, stop_button);

const initiate_timer = () => {
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

const start_function = (inc: number = time_inc) => {
  //
  //   if (is_running) {
  //     return;
  //   }
  //   is_running = true;
  if (start_button) {
    start_button.disabled = true;
  }
  // console.log("START FUNC");
  timeout_id = setTimeout(() => {
    ms += inc;
    if (ms === 1000) {
      second += 1;
      ms = 0;
      console.log(`${second} second`);
      let display_text: string = second < 10 ? `0${second}` : `${second}`;
      if (second_d) second_d.innerText = display_text;
    }
    if (second === 60) {
      minute += 1;
      second = 0;
      console.log(`${minute} minute`);
      let display_text: string = minute < 10 ? `0${minute}` : `${minute}`;
      if (second_d) second_d.innerText = "00";
      if (minute_d) minute_d.innerText = display_text;
    }
    if (minute === 60) {
      hour += 1;
      minute = 0;
      console.log(`${hour} hour`);
      let display_text: string = hour < 10 ? `0${hour}` : `${hour}`;
      if (minute_d) minute_d.innerText = "00";
      if (hour_d) hour_d.innerText = display_text;
    }
    start_function();
  }, inc);
};
const stop_function = () => {
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
start_button?.addEventListener("click", () => {
  console.log("START TIMER");
  start_function();
});
stop_button?.addEventListener("click", () => {
  console.log("STOP TIMER");
  stop_function();
});
