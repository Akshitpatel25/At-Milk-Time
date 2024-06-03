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
  let milk_collection = document.querySelector(".milk_collection");
  
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.display = "none";
      milk_collection.style.display = "flex";
    }, 1500);
  });
  
  // <--------------------------------------------------------------------------------------> //
  
  // --------------- when hamburger box is clicked ---------------------- //
  
  let hamburger_box = document.querySelector(".hamburger_box");
  let nav_menu = document.querySelector(".nav_menu");
  let second_section = document.querySelector(".second_section");
  let first_section_sp = document.querySelector(".first_section_sp");
  let middle_section = document.querySelector(".middle_section");
  let image_container = document.querySelector(".image-container");
  
  hamburger_box.addEventListener("click", () => {
    hamburger_box.classList.toggle("hamburger--open");
    nav_menu.classList.toggle("nav_menu--open");
    second_section.classList.toggle("second_section--open");
    first_section_sp.classList.toggle("first_section_sp---open");
    middle_section.classList.toggle("middle_section--open");
    image_container.classList.toggle("image-container--open");
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
  
  // ------------------------------- cancel btn hover --------------------------
  
  let cancel_btn = document.querySelector(".cancel_btn");
  let cancel_bar1 = document.querySelector(".cancel_bar1");
  let cancel_bar2 = document.querySelector(".cancel_bar2");
  
  cancel_btn.addEventListener("mouseover", () => {
    cancel_bar1.style.background = "var(--gradiant-color)";
    cancel_bar2.style.background = "var(--gradiant-color)";
    cancel_btn.style.background = "white";
  });
  
  cancel_btn.addEventListener("mouseout", () => {
    cancel_bar1.style.background = "white";
    cancel_bar2.style.background = "white";
    cancel_btn.style.background = "var(--gradiant-color)";
  });
  
  // -------------------- nav menu center_box1 hovering effect logic ----------------------- //
  
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
  // <--------------------------------nav menu end------------------------------------------------------>
  
  // ------------------------------------- change width logic ------------------------------------
  
  function changewidth() {
    let scroll = window.pageYOffset / 15;
    let width = Math.min(100 - scroll);
  
    document.querySelector(".hidder_1").style.width = width + "%";
    document.querySelector(".hidder_2").style.width = width + "%";
  }
  
  window.addEventListener("scroll", () => {
    requestAnimationFrame(changewidth);
  });
  
  // ------------------------------------------------------------------------
  
  // ------------------------ text scrolling animation ----------------------
  
  let hiddenelement = document.querySelectorAll(".hidden");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  hiddenelement.forEach((el) => observer.observe(el));
  // ------------------------------------------------------------------------
  
  
  // --------------------------- buttom page redirect link logic ------------------------
  
  image_container.addEventListener("click", () => {
    window.location.href = "/assets/milk_file_assets/html/milk_quality.html";
  });
  
  // ------------------------------------------------------------------------
  