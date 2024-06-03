// Random sentence of preloading page //

document.addEventListener("DOMContentLoaded", function () {
  // Array of sentences
  var sentences = [
    "98% of the cow feeding is produced in france.",
    "100% of the cow feeding is tranced.",
    "A unique range of 15000 dairy products.",
    "There are 60 cows per farm on average.",
    "1 healthy cow produces quality milk.",
    "A cow consumes between 50 and 80 kg of feed every day.",
    "On average, a cow produces of 24 liters of milk per day.",
    "4% of organic farmers in May 2017, 6% by 2018.",
  ];

  // Select a random sentence
  var randomIndex = Math.floor(Math.random() * sentences.length);
  var randomSentence = sentences[randomIndex];

  // Display the random sentence
  var sentenceElement = document.querySelector(".preloader_subtitle_text");
  sentenceElement.innerHTML = randomSentence;
});

// <--------------------------------------------------------------------------------------> //

// --------------- preloading logic ---------------------- //

let preloader = document.querySelector(".preloader");
let home_page = document.querySelector(".home_page");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
    home_page.style.display = "flex";
  }, 1500);
});

// <--------------------------------------------------------------------------------------> //

// --------------- when hamburger box is clicked ---------------------- //

let hamburger_box = document.querySelector(".hamburger_box");
let nav_menu = document.querySelector(".nav_menu");
let center_part_top = document.querySelector(".center_part_top");
let center_part_bottom = document.querySelector(".center_part_bottom");

hamburger_box.addEventListener("click", () => {
  hamburger_box.classList.toggle("hamburger--open");
  nav_menu.classList.toggle("nav_menu--open");
  center_part_top.classList.toggle("center_part_top--open");
  center_part_bottom.classList.toggle("center_part_bottom--open");
  sentenceElement.style.visibility = "hidden";

  setTimeout(() => {
    sentenceElement.style.visibility = "visible";
    sentenceElement.style.animationPlayState = "running";
  }, 3000);

});

hamburger_box.addEventListener("mouseover", () => {
  document.querySelector(".bar1").style.background = "var(--gradiant-color)";
  document.querySelector(".bar2").style.background = "var(--gradiant-color)";
  document.querySelector(".bar3").style.background = "var(--gradiant-color)";
  hamburger_box.style.background = "white";
});

hamburger_box.addEventListener("mouseout", () => {
  document.querySelector(".bar1").style.background = "white";
  document.querySelector(".bar2").style.background = "white";
  document.querySelector(".bar3").style.background = "white";
  hamburger_box.style.background = "var(--gradiant-color)";
});

// <-------------------------------------------------------------------------------------->

// --------------- subtitle changer logic in center_part_top_namebox ---------------------- //

// Array of sentences
const sentences = [
  "98% of the cow feeding is produced in france.",
  "100% of the cow feeding is tranced.",
  "A unique range of 15000 dairy products.",
  "There are 60 cows per farm on average.",
  "1 healthy cow produces quality milk.",
  "A cow consumes between 50 and 80 kg of feed every day.",
  "On average, a cow produces of 24 liters of milk per day.",
  "4% of organic farmers in May 2017, 6% by 2018.",
];

// Function to get a random sentence
function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

const sentenceElement = document.getElementById("sentence");
// Function to update the sentence
function updateSentence() {
  sentenceElement.style.opacity = 0;
  setTimeout(function () {
    sentenceElement.textContent = getRandomSentence();
    sentenceElement.style.opacity = 1;
  }, 1000);
}

// Update sentence every 5 seconds
setInterval(updateSentence, 5000);

// Initial update
updateSentence();
// <-------------------------------------------------------------------------------------->

// -------------------- subtitle delay logic ----------------------- //
setTimeout(() => {
  sentenceElement.style.visibility = "visible";
  sentenceElement.style.animationPlayState = "running";
}, 3000);
// <-------------------------------------------------------------------------------------->

// -------------------- scaling effect of center_part_top, when we hover on center_part_bottom_btn ----------------------- //

let center_part_bottom_btn = document.querySelector(".center_part_bottom_btn");

let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let center_part_top_namebox = document.querySelector(
  ".center_part_top_namebox"
);

center_part_bottom_btn.addEventListener("mouseover", () => {
  box1.style.transform = "scale(0.95)";
  box2.style.transform = "scale(0.85)";
  box3.style.transform = "scale(0.75)";
  box4.style.transform = "scale(0.65)";
  center_part_top_namebox.style.transform = "scale(1.05)";
  inside_btn.style.color = "black";
});

center_part_bottom_btn.addEventListener("mouseout", () => {
  box1.style.transform = "scale(0.9)";
  box2.style.transform = "scale(0.8)";
  box3.style.transform = "scale(0.7)";
  box4.style.transform = "scale(0.6)";
  center_part_top_namebox.style.transform = "scale(1)";
  inside_btn.style.color = "white";
});

// <-------------------------------------------------------------------------------------->


// ----- inside_btn delay because after animation of button text should appear ----- //

let inside_btn = document.querySelector(".inside_btn");

setTimeout(() => {
  inside_btn.style.animationPlayState = "running";
}, 3100);
// <-------------------------------------------------------------------------------------->


// -------------------- center_box1 hovering effect logic ----------------------- //

let center_box1_texts = document.querySelector(".center_box1_texts");
let center_box1_svgs = document.querySelector(".center_box1_svgs");
let center_box1_svgs2 = document.querySelector(".center_box1_svgs2");
let center_box1_svgs3 = document.querySelector(".center_box1_svgs3");
let center_box1_svgs4 = document.querySelector(".center_box1_svgs4");
let icon_box1 = document.querySelector(".icon_box1");
let sub_title = document.querySelector(".sub_title");
let tab_box1 = document.querySelector(".tab_box1");

let center_box2_texts = document.querySelector(".center_box2_texts");
let center_box2_svgs = document.querySelector(".center_box2_svgs");
let center_box2_svgs2 = document.querySelector(".center_box2_svgs2");
let center_box2_svgs3 = document.querySelector(".center_box2_svgs3");
let center_box2_svgs4 = document.querySelector(".center_box2_svgs4");
let icon_box2 = document.querySelector(".icon_box2");
let sub_title2 = document.querySelector(".sub_title2");
let tab_box2 = document.querySelector(".tab_box2");

let center_box3_texts = document.querySelector(".center_box3_texts");
let center_box3_svgs = document.querySelector(".center_box3_svgs");
let center_box3_svgs2 = document.querySelector(".center_box3_svgs2");
let center_box3_svgs3 = document.querySelector(".center_box3_svgs3");
let center_box3_svgs4 = document.querySelector(".center_box3_svgs4");
let icon_box3 = document.querySelector(".icon_box3");
let sub_title3 = document.querySelector(".sub_title3");
let tab_box3 = document.querySelector(".tab_box3");

let center_box4_texts = document.querySelector(".center_box4_texts");
let center_box4_svgs = document.querySelector(".center_box4_svgs");
let center_box4_svgs2 = document.querySelector(".center_box4_svgs2");
let center_box4_svgs3 = document.querySelector(".center_box4_svgs3");
let center_box4_svgs4 = document.querySelector(".center_box4_svgs4");
let icon_box4 = document.querySelector(".icon_box4");
let sub_title4 = document.querySelector(".sub_title4");
let tab_box4 = document.querySelector(".tab_box4");

// ---------------------- logic for center box1 --------------------- //
center_box1_texts.addEventListener( 'mouseover', function() {
  sub_title.style.opacity = "0.5";
  tab_box1.style.width = "0px";
  icon_box1.style.opacity = "1";
  center_box1_svgs.style.opacity = "1";
  center_box1_svgs2.style.opacity = "1";
  center_box1_svgs3.style.opacity = "1";
  center_box1_svgs4.style.opacity = "1";
});

center_box1_texts.addEventListener( 'mouseout', function() {
  sub_title.style.opacity = "0";
  tab_box1.style.width = "20px";
  icon_box1.style.opacity = "0.5";
  center_box1_svgs.style.opacity = "0";
  center_box1_svgs2.style.opacity = "0";
  center_box1_svgs3.style.opacity = "0";
  center_box1_svgs4.style.opacity = "0";
});
// <-------------------------------------------------------------------------------------->

// ---------------------- logic for center box2 --------------------- //

center_box2_texts.addEventListener("mouseover", () => {
  sub_title2.style.opacity = "0.5";
  tab_box2.style.width = "0px";
  icon_box2.style.opacity = "1";
  center_box2_svgs.style.opacity = "1";
  center_box2_svgs2.style.opacity = "1";
  center_box2_svgs3.style.opacity = "1";
  center_box2_svgs4.style.opacity = "1";
});

center_box2_texts.addEventListener("mouseout", () => {
  sub_title2.style.opacity = "0";
  tab_box2.style.width = "20px";
  icon_box2.style.opacity = "0.5";
  center_box2_svgs.style.opacity = "0";
  center_box2_svgs2.style.opacity = "0";
  center_box2_svgs3.style.opacity = "0";
  center_box2_svgs4.style.opacity = "0";
});
// <-------------------------------------------------------------------------------------->

// ---------------------- logic for center box3 --------------------- //

center_box3_texts.addEventListener("mouseover", () => {
  sub_title3.style.opacity = "0.5";
  tab_box3.style.width = "0px";
  icon_box3.style.opacity = "1";
  center_box3_svgs.style.opacity = "1";
  center_box3_svgs2.style.opacity = "1";
  center_box3_svgs3.style.opacity = "1";
  center_box3_svgs4.style.opacity = "1";
});

center_box3_texts.addEventListener("mouseout", () => {
  sub_title3.style.opacity = "0";
  tab_box3.style.width = "20px";
  icon_box3.style.opacity = "0.5";
  center_box3_svgs.style.opacity = "0";
  center_box3_svgs2.style.opacity = "0";
  center_box3_svgs3.style.opacity = "0";
  center_box3_svgs4.style.opacity = "0";
});
// <-------------------------------------------------------------------------------------->

// ---------------------- logic for center box4 --------------------- //

center_box4_texts.addEventListener("mouseover", () => {
  sub_title4.style.opacity = "0.5";
  tab_box4.style.width = "0px";
  icon_box4.style.opacity = "1";
  center_box4_svgs.style.opacity = "1";
  center_box4_svgs2.style.opacity = "1";
  center_box4_svgs3.style.opacity = "1";
  center_box4_svgs4.style.opacity = "1";
});

center_box4_texts.addEventListener("mouseout", () => {
  sub_title4.style.opacity = "0";
  tab_box4.style.width = "20px";
  icon_box4.style.opacity = "0.5";
  center_box4_svgs.style.opacity = "0";
  center_box4_svgs2.style.opacity = "0";
  center_box4_svgs3.style.opacity = "0";
  center_box4_svgs4.style.opacity = "0";
});
// <-------------------------------------------------------------------------------------->




// -------------------------- Login btn --------------------

let login_btn = document.querySelector(".login_btn");
let login_page = document.querySelector(".login_page");
let login_cancel_btn = document.querySelector(".login_cancel_btn");
let alertt = document.querySelector(".alertt");


login_btn.addEventListener("click", () => {
  login_page.style.top = "100px";
  hamburger_box.style.visibility = "hidden";
  center_part_bottom_btn.style.visibility = "hidden";
});

login_cancel_btn.addEventListener("click", ()=> {
  login_page.style.top = "1500px";
  hamburger_box.style.visibility = "visible";
  center_part_bottom_btn.style.visibility = "visible";
  alertt.style.display = "none";

});

// ------------------------------------------------------

center_box4_texts.addEventListener("click", () => {
  login_page.style.top = "100px";
})

