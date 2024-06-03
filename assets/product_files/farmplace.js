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
let farm_place_home_page = document.querySelector(".farm_place_home_page");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
    farm_place_home_page.style.display = "flex";
  }, 1500);
});

// <--------------------------------------------------------------------------------------> //


// --------------- when hamburger box is clicked ---------------------- //

let hamburger_box = document.querySelector(".hamburger_box");
let nav_menu = document.querySelector(".nav_menu");
let FP_center_part = document.querySelector(".FP_center_part");
let warning = document.querySelector(".warning");

hamburger_box.addEventListener("click", () => {
  hamburger_box.classList.toggle("hamburger--open");
  nav_menu.classList.toggle("nav_menu--open");
  FP_center_part.classList.toggle("FP_center_part--open");
  warning.classList.toggle("warning--open");
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

// ---------------------- fields_pasture hovering logic and some magics --------------------- //

let fields_pasture = document.querySelector(".fields_pasture");
let compass = document.querySelector(".compass");
let dash_box = document.querySelector(".dash_box");
let text_box = document.querySelector(".text_box");


fields_pasture.addEventListener("mouseover", () => {
  compass.style.fontSize = "0px";
  dash_box.style.width = "100%";
  text_box.style.top = "0px";

  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


fields_pasture.addEventListener("mouseout", () => {
  compass.style.fontSize = "45px";
  dash_box.style.width = "0%";
  text_box.style.top = "40px";

  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ----------------------- The Stable -------------------------- */

let The_Stable = document.querySelector(".The_Stable");
let compass2 = document.querySelector(".compass2");
let dash_box2 = document.querySelector(".dash_box2");
let text_box2 = document.querySelector(".text_box2");
let stable_text = document.querySelector(".stable_text");

The_Stable.addEventListener("mouseover", () => {
  compass2.style.fontSize = "0px";
  dash_box2.style.width = "100%";
  stable_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


The_Stable.addEventListener("mouseout", () => {
  compass2.style.fontSize = "45px";
  dash_box2.style.width = "0%";
  stable_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- The Stable yard -------------------------- */

let The_Stable_yard = document.querySelector(".The_Stable_yard");
let compass3 = document.querySelector(".compass3");
let dash_box3 = document.querySelector(".dash_box3");
let text_box3 = document.querySelector(".text_box3");
let stable_yard_text = document.querySelector(".stable_yard_text");

The_Stable_yard.addEventListener("mouseover", () => {
  compass3.style.fontSize = "0px";
  dash_box3.style.width = "100%";
  stable_yard_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


The_Stable_yard.addEventListener("mouseout", () => {
  compass3.style.fontSize = "45px";
  dash_box3.style.width = "0%";
  stable_yard_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- milking_parlour -------------------------- */

let milking_parlour = document.querySelector(".milking_parlour");
let compass4 = document.querySelector(".compass4");
let dash_box4 = document.querySelector(".dash_box4");
let text_box4 = document.querySelector(".text_box4");
let milking_parlour_text = document.querySelector(".milking_parlour_text");

milking_parlour.addEventListener("mouseover", () => {
  compass4.style.fontSize = "0px";
  dash_box4.style.width = "100%";
  milking_parlour_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


milking_parlour.addEventListener("mouseout", () => {
  compass4.style.fontSize = "45px";
  dash_box4.style.width = "0%";
  milking_parlour_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- the_office -------------------------- */

let the_office = document.querySelector(".the_office");
let compass5 = document.querySelector(".compass5");
let dash_box5 = document.querySelector(".dash_box5");
let text_box5 = document.querySelector(".text_box5");
let the_office_text = document.querySelector(".the_office_text");

the_office.addEventListener("mouseover", () => {
  compass5.style.fontSize = "0px";
  dash_box5.style.width = "100%";
  the_office_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


the_office.addEventListener("mouseout", () => {
  compass5.style.fontSize = "45px";
  dash_box5.style.width = "0%";
  the_office_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- the_milk_tank -------------------------- */

let the_milk_tank = document.querySelector(".the_milk_tank");
let compass6 = document.querySelector(".compass6");
let dash_box6 = document.querySelector(".dash_box6");
let text_box6 = document.querySelector(".text_box6");
let the_milk_tank_text = document.querySelector(".the_milk_tank_text");

the_milk_tank.addEventListener("mouseover", () => {
  compass6.style.fontSize = "0px";
  dash_box6.style.width = "100%";
  the_milk_tank_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


the_milk_tank.addEventListener("mouseout", () => {
  compass6.style.fontSize = "45px";
  dash_box6.style.width = "0%";
  the_milk_tank_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- the_natural_environment -------------------------- */

let the_natural_environment = document.querySelector(".the_natural_environment");
let compass7 = document.querySelector(".compass7");
let dash_box7 = document.querySelector(".dash_box7");
let text_box7 = document.querySelector(".text_box7");
let the_natural_environment_text = document.querySelector(".the_natural_environment_text");

the_natural_environment.addEventListener("mouseover", () => {
  compass7.style.fontSize = "0px";
  dash_box7.style.width = "100%";
  the_natural_environment_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


the_natural_environment.addEventListener("mouseout", () => {
  compass7.style.fontSize = "45px";
  dash_box7.style.width = "0%";
  the_natural_environment_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_nursery.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- the_nursery -------------------------- */

let the_nursery = document.querySelector(".the_nursery");
let compass8 = document.querySelector(".compass8");
let dash_box8 = document.querySelector(".dash_box8");
let text_box8 = document.querySelector(".text_box8");
let the_nursery_text = document.querySelector(".the_nursery_text");

the_nursery.addEventListener("mouseover", () => {
  compass8.style.fontSize = "0px";
  dash_box8.style.width = "100%";
  the_nursery_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_dairy.style.opacity = "0.2";
});


the_nursery.addEventListener("mouseout", () => {
  compass8.style.fontSize = "45px";
  dash_box8.style.width = "0%";
  the_nursery_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_dairy.style.opacity = "1";
});

/* ------------------------------------------------- */

/* ----------------------- the_dairy -------------------------- */

let the_dairy = document.querySelector(".the_dairy");
let compass9 = document.querySelector(".compass9");
let dash_box9 = document.querySelector(".dash_box9");
let text_box9 = document.querySelector(".text_box9");
let the_dairy_text = document.querySelector(".the_dairy_text");

the_dairy.addEventListener("mouseover", () => {
  compass9.style.fontSize = "0px";
  dash_box9.style.width = "100%";
  the_dairy_text.style.top = "0px";

  fields_pasture.style.opacity = "0.2";
  The_Stable.style.opacity = "0.2";
  The_Stable_yard.style.opacity = "0.2";
  milking_parlour.style.opacity = "0.2";
  the_office.style.opacity = "0.2";
  the_milk_tank.style.opacity = "0.2";
  the_natural_environment.style.opacity = "0.2";
  the_nursery.style.opacity = "0.2";
});


the_dairy.addEventListener("mouseout", () => {
  compass9.style.fontSize = "45px";
  dash_box9.style.width = "0%";
  the_dairy_text.style.top = "40px";

  fields_pasture.style.opacity = "1";
  The_Stable.style.opacity = "1";
  The_Stable_yard.style.opacity = "1";
  milking_parlour.style.opacity = "1";
  the_office.style.opacity = "1";
  the_milk_tank.style.opacity = "1";
  the_natural_environment.style.opacity = "1";
  the_nursery.style.opacity = "1";
});

/* ------------------------------------------------- */


// ----- rotating logic ----- //
function rotatecompass() {
  compass.classList.toggle("compass-rotate");
  compass2.classList.toggle("compass2-rotate");
  compass3.classList.toggle("compass3-rotate");
  compass4.classList.toggle("compass4-rotate");
  compass5.classList.toggle("compass5-rotate");
  compass6.classList.toggle("compass6-rotate");
  compass7.classList.toggle("compass7-rotate");
  compass8.classList.toggle("compass8-rotate");
  compass9.classList.toggle("compass9-rotate");
}

setInterval(rotatecompass, 10000);

// -------------------------- Login btn --------------------

let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

// ------------------------------------------------------