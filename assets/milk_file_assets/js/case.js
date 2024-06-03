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
let case_home_page = document.querySelector(".case_home_page");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
    case_home_page.style.display = "block";
  }, 1500);
});

// <--------------------------------------------------------------------------------------> //

// --------------- when hamburger box is clicked ---------------------- //

let hamburger_box = document.querySelector(".hamburger_box");
let nav_menu = document.querySelector(".nav_menu");
let case_center_part = document.querySelector(".case_center_part");

hamburger_box.addEventListener("click", () => {
  hamburger_box.classList.toggle("hamburger--open");
  nav_menu.classList.toggle("nav_menu--open");
  case_center_part.classList.toggle("case_center_part--open");
  case_home_page.style.height = "100vh";
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
center_box1_texts.addEventListener("mouseover", function () {
  sub_title.style.opacity = "0.5";
  tab_box1.style.width = "0px";
  icon_box1.style.opacity = "1";
  center_box1_svgs.style.opacity = "1";
  center_box1_svgs2.style.opacity = "1";
  center_box1_svgs3.style.opacity = "1";
  center_box1_svgs4.style.opacity = "1";
});

center_box1_texts.addEventListener("mouseout", function () {
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

// ---------------------------- when we mouseover on boxx logic ---------------------------

let text_boxx1 = document.querySelector(".text_boxx1");
let text_boxx2 = document.querySelector(".text_boxx2");
let text_boxx3 = document.querySelector(".text_boxx3");
let text_boxx4 = document.querySelector(".text_boxx4");
let text_boxx5 = document.querySelector(".text_boxx5");
let text_boxx6 = document.querySelector(".text_boxx6");
let text_boxx7 = document.querySelector(".text_boxx7");
let text_boxx8 = document.querySelector(".text_boxx8");
let text_boxx9 = document.querySelector(".text_boxx9");
let text_boxx10 = document.querySelector(".text_boxx10");
let text_boxx11 = document.querySelector(".text_boxx11");
let text_boxx12 = document.querySelector(".text_boxx12");
let text_boxx13 = document.querySelector(".text_boxx13");

let boxx1_circle1 = document.querySelector(".boxx1_circle1");
let boxx1_circle2 = document.querySelector(".boxx1_circle2");

let boxx2_circle1 = document.querySelector(".boxx2_circle1");
let boxx2_circle2 = document.querySelector(".boxx2_circle2");

let boxx3_circle1 = document.querySelector(".boxx3_circle1");
let boxx3_circle2 = document.querySelector(".boxx3_circle2");

let boxx4_circle1 = document.querySelector(".boxx4_circle1");
let boxx4_circle2 = document.querySelector(".boxx4_circle2");

let boxx5_circle1 = document.querySelector(".boxx5_circle1");
let boxx5_circle2 = document.querySelector(".boxx5_circle2");

let boxx6_circle2 = document.querySelector(".boxx6_circle2");
let boxx6_circle1 = document.querySelector(".boxx6_circle1");

let boxx7_circle1 = document.querySelector(".boxx7_circle1");
let boxx7_circle2 = document.querySelector(".boxx7_circle2");

let boxx8_circle1 = document.querySelector(".boxx8_circle1");
let boxx8_circle2 = document.querySelector(".boxx8_circle2");

let boxx9_circle1 = document.querySelector(".boxx9_circle1");
let boxx9_circle2 = document.querySelector(".boxx9_circle2");

let boxx10_circle1 = document.querySelector(".boxx10_circle1");
let boxx10_circle2 = document.querySelector(".boxx10_circle2");

let boxx11_circle1 = document.querySelector(".boxx11_circle1");
let boxx11_circle2 = document.querySelector(".boxx11_circle2");

let boxx12_circle1 = document.querySelector(".boxx12_circle1");
let boxx12_circle2 = document.querySelector(".boxx12_circle2");

let boxx13_circle1 = document.querySelector(".boxx13_circle1");
let boxx13_circle2 = document.querySelector(".boxx13_circle2");

text_boxx1.addEventListener("mouseover", () => {
  boxx1_circle1.style.strokeDashoffset = "305";
  boxx1_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/01.jpg)";
});

text_boxx1.addEventListener("mouseout", () => {
  boxx1_circle1.style.strokeDashoffset = "610";
  boxx1_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";

});

// -----------------------

text_boxx2.addEventListener("mouseover", () => {
  boxx2_circle1.style.strokeDashoffset = "305";
  boxx2_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/02.jpg)";
});

text_boxx2.addEventListener("mouseout", () => {
  boxx2_circle1.style.strokeDashoffset = "610";
  boxx2_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx3.addEventListener("mouseover", () => {
  boxx3_circle1.style.strokeDashoffset = "305";
  boxx3_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/03.jpg)";
});

text_boxx3.addEventListener("mouseout", () => {
  boxx3_circle1.style.strokeDashoffset = "610";
  boxx3_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx4.addEventListener("mouseover", () => {
  boxx4_circle1.style.strokeDashoffset = "305";
  boxx4_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/04.jpg)";
});

text_boxx4.addEventListener("mouseout", () => {
  boxx4_circle1.style.strokeDashoffset = "610";
  boxx4_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx5.addEventListener("mouseover", () => {
  boxx5_circle1.style.strokeDashoffset = "305";
  boxx5_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/05.jpg)";
});

text_boxx5.addEventListener("mouseout", () => {
  boxx5_circle1.style.strokeDashoffset = "610";
  boxx5_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx6.addEventListener("mouseover", () => {
  boxx6_circle1.style.strokeDashoffset = "305";
  boxx6_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/06.jpg)";
});

text_boxx6.addEventListener("mouseout", () => {
  boxx6_circle1.style.strokeDashoffset = "610";
  boxx6_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx7.addEventListener("mouseover", () => {
  boxx7_circle1.style.strokeDashoffset = "305";
  boxx7_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/07.jpg)";
});

text_boxx7.addEventListener("mouseout", () => {
  boxx7_circle1.style.strokeDashoffset = "610";
  boxx7_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx8.addEventListener("mouseover", () => {
  boxx8_circle1.style.strokeDashoffset = "305";
  boxx8_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/08.jpg)";
});

text_boxx8.addEventListener("mouseout", () => {
  boxx8_circle1.style.strokeDashoffset = "610";
  boxx8_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx9.addEventListener("mouseover", () => {
  boxx9_circle1.style.strokeDashoffset = "305";
  boxx9_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/09.jpg)";
});

text_boxx9.addEventListener("mouseout", () => {
  boxx9_circle1.style.strokeDashoffset = "610";
  boxx9_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx10.addEventListener("mouseover", () => {
  boxx10_circle1.style.strokeDashoffset = "305";
  boxx10_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/10.jpg)";
});

text_boxx10.addEventListener("mouseout", () => {
  boxx10_circle1.style.strokeDashoffset = "610";
  boxx10_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx11.addEventListener("mouseover", () => {
  boxx11_circle1.style.strokeDashoffset = "305";
  boxx11_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/11.jpg)";
});

text_boxx11.addEventListener("mouseout", () => {
  boxx11_circle1.style.strokeDashoffset = "610";
  boxx11_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx12.addEventListener("mouseover", () => {
  boxx12_circle1.style.strokeDashoffset = "305";
  boxx12_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/12.jpg)";
});

text_boxx12.addEventListener("mouseout", () => {
  boxx12_circle1.style.strokeDashoffset = "610";
  boxx12_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// -----------------------

text_boxx13.addEventListener("mouseover", () => {
  boxx13_circle1.style.strokeDashoffset = "305";
  boxx13_circle2.style.strokeDashoffset = "305";
  case_home_page.style.backgroundImage =
    "url(/assets/milk_file_assets/back-img/13.jpg)";
});

text_boxx13.addEventListener("mouseout", () => {
  boxx13_circle1.style.strokeDashoffset = "610";
  boxx13_circle2.style.strokeDashoffset = "610";
  case_home_page.style.backgroundImage = "url()";
});

// <-------------------------------------------------------------------------------------->

// --------------------------- all redirect link to their repected pages logic ------------------

text_boxx1.addEventListener("click", () => {
  window.location.href = "france_land_of_milk.html";
});

// -------------------------- Login btn --------------------

let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

// ------------------------------------------------------



// ------------------- login ------------------

async function postJSON(data) {
  try {
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
    
    alert("Login Successfully")
    
  } catch (error) {
    console.error("Error:", error);
  }
}

function handleSubmit() {
  const identifier = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = { identifier, password };
  postJSON(data);
}