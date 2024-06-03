let creating_element = document.querySelector(".creating_element");
let add_to_cart_item1 = document.querySelector(".add_to_cart_item1");
let add_to_cart_item2 = document.querySelector(".add_to_cart_item2");
let add_to_cart_item3 = document.querySelector(".add_to_cart_item3");
let add_to_cart_item4 = document.querySelector(".add_to_cart_item4");
let add_to_cart_item5 = document.querySelector(".add_to_cart_item5");
let add_to_cart_item6 = document.querySelector(".add_to_cart_item6");

fetch("http://localhost:1337/api/products?populate=*")
  .then((res) => {
    return res.json();
  })
  .then((fulldata) => {
    // ------------------------ for milk -----------------------
    let finalprice = parseFloat(localStorage.getItem("finalprice")) || 0;

    // Update total price function
    function updateTotalPrice() {
      document.querySelector(".total").innerHTML = "$" + finalprice.toFixed(2);
      // Update local storage
      localStorage.setItem("finalprice", finalprice.toFixed(2));
    }

    // Delete finalprice from local storage when the page reloads
    window.onload = function () {
      finalprice = 0; // Reset finalprice to 0
      localStorage.removeItem("finalprice");
      updateTotalPrice(); // Update the total price displayed
    };

    let data_image_item1 =
      fulldata.data[0].attributes.image.data[0].attributes.url;
    let data_text_item1 = fulldata.data[0].attributes.name;
    let data_price_item1 = fulldata.data[0].attributes.price;
    let data_price2_item1 = fulldata.data[0].attributes.price1;

    let image_item1 = document.querySelector(".image_item1");
    let price_item1 = document.querySelector(".price_item1");
    let price_item1_at_open = document.querySelector(".price_item1_at_open");
    let name_item1 = document.querySelector(".name_item1");
    let choose_item1_open_img = document.querySelector(
      ".choose_item1_open_img"
    );
    let number_of_item_in_cart = document.querySelector(
      ".number_of_item_in_cart"
    );
    let number_item1 = document.querySelector(".number_item1");

    image_item1.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item1 + "')";
    choose_item1_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item1 + "')";
    name_item1.innerHTML = data_text_item1;
    price_item1.innerHTML = "From $" + data_price_item1;
    price_item1_at_open.innerHTML = "$ " + data_price_item1;

    // price changing with liters logic

    let sizes_box1 = document.querySelector(".sizes_box1");
    let sizes_box2 = document.querySelector(".sizes_box2");

    sizes_box2.addEventListener("click", () => {
      price_item1_at_open.innerHTML = "$ " + data_price2_item1;
      sizes_box2.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1.style.backgroundColor = "transparent";
    });
    sizes_box1.addEventListener("click", () => {
      price_item1_at_open.innerHTML = "$ " + data_price_item1;
      sizes_box1.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2.style.backgroundColor = "transparent";
    });

    // hovering effect item 1
    let item1 = document.querySelector(".item1");
    item1.addEventListener("mouseover", () => {
      image_item1.style.scale = "1.05";
      name_item1.style.textDecoration = "underline";
      price_item1.style.textDecoration = "underline";
    });
    item1.addEventListener("mouseout", () => {
      image_item1.style.scale = "1";
      name_item1.style.textDecoration = "none";
      price_item1.style.textDecoration = "none";
    });

    // add to cart logic for milk (DOM manipulation)

    // var finalprice = 0;

    add_to_cart_item1.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item1 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "A2 Cow Milk";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item1_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item1.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();
      // document.querySelector(".total").innerHTML = "$" + finalprice.toFixed(2);

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
        // document.querySelector(".total").innerHTML =
        //   "$" + finalprice.toFixed(2);
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------

    // ------------------------ for butter -----------------------
    let data_image_item2 =
      fulldata.data[1].attributes.image.data[0].attributes.url;
    let data_text_item2 = fulldata.data[1].attributes.name;
    let data_price_item2 = fulldata.data[1].attributes.price;
    let data_price2_item2 = fulldata.data[1].attributes.price1;
    // console.log(data_price2_item2);

    let image_item2 = document.querySelector(".image_item2");
    let price_item2 = document.querySelector(".price_item2");
    let name_item2 = document.querySelector(".name_item2");
    let price_item2_at_open = document.querySelector(".price_item2_at_open");
    let choose_item2_open_img = document.querySelector(
      ".choose_item2_open_img"
    );

    image_item2.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item2 + "')";
    name_item2.innerHTML = data_text_item2;
    price_item2.innerHTML = "From $" + data_price_item2;

    choose_item2_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item2 + "')";
    price_item2_at_open.innerHTML = "$ " + data_price_item2;

    // price changing with liters logic

    let sizes_box1_2 = document.querySelector(".sizes_box1_2");
    let sizes_box2_2 = document.querySelector(".sizes_box2_2");

    sizes_box2_2.addEventListener("click", () => {
      price_item2_at_open.innerHTML = "$ " + data_price2_item2;
      sizes_box2_2.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1_2.style.backgroundColor = "transparent";
    });
    sizes_box1_2.addEventListener("click", () => {
      price_item2_at_open.innerHTML = "$ " + data_price_item2;
      sizes_box1_2.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2_2.style.backgroundColor = "transparent";
    });

    // hovering effect item 2
    let item2 = document.querySelector(".item2");
    item2.addEventListener("mouseover", () => {
      image_item2.style.scale = "1.05";
      name_item2.style.textDecoration = "underline";
      price_item2.style.textDecoration = "underline";
    });
    item2.addEventListener("mouseout", () => {
      image_item2.style.scale = "1";
      name_item2.style.textDecoration = "none";
      price_item2.style.textDecoration = "none";
    });

    // =============================== adding to cart logic using DOM manipulation

    add_to_cart_item2.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item2 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "Butter";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item2_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item2.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();
      // document.querySelector(".total").innerHTML = "$" + finalprice.toFixed(2);

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
        // document.querySelector(".total").innerHTML =
        //   "$" + finalprice.toFixed(2);
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------

    // ------------------------ for cheese -----------------------
    let data_image_item3 =
      fulldata.data[2].attributes.image.data[0].attributes.url;
    let data_text_item3 = fulldata.data[2].attributes.name;
    let data_price_item3 = fulldata.data[2].attributes.price;
    let data_price2_item3 = fulldata.data[2].attributes.price1;
    // console.log(data_price2_item3);

    let image_item3 = document.querySelector(".image_item3");
    let price_item3 = document.querySelector(".price_item3");
    let name_item3 = document.querySelector(".name_item3");
    let price_item3_at_open = document.querySelector(".price_item3_at_open");
    let choose_item3_open_img = document.querySelector(
      ".choose_item3_open_img"
    );

    image_item3.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item3 + "')";
    name_item3.innerHTML = data_text_item3;
    price_item3.innerHTML = "From $" + data_price_item3;

    choose_item3_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item3 + "')";
    price_item3_at_open.innerHTML = "$ " + data_price_item3;

    // price changing with liters logic

    let sizes_box1_3 = document.querySelector(".sizes_box1_3");
    let sizes_box2_3 = document.querySelector(".sizes_box2_3");

    sizes_box2_3.addEventListener("click", () => {
      price_item3_at_open.innerHTML = "$ " + data_price2_item3;
      sizes_box2_3.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1_3.style.backgroundColor = "transparent";
    });
    sizes_box1_3.addEventListener("click", () => {
      price_item3_at_open.innerHTML = "$ " + data_price_item3;
      sizes_box1_3.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2_3.style.backgroundColor = "transparent";
    });

    // hovering effect item 3
    let item3 = document.querySelector(".item3");
    item3.addEventListener("mouseover", () => {
      image_item3.style.scale = "1.05";
      name_item3.style.textDecoration = "underline";
      price_item3.style.textDecoration = "underline";
    });
    item3.addEventListener("mouseout", () => {
      image_item3.style.scale = "1";
      name_item3.style.textDecoration = "none";
      price_item3.style.textDecoration = "none";
    });

    // =============================== add to card logic using DOM manipulation

    add_to_cart_item3.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item3 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "Cheese";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item3_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item3.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------

    // ------------------------ for paneer -----------------------
    let data_image_item4 =
      fulldata.data[3].attributes.image.data[0].attributes.url;
    let data_text_item4 = fulldata.data[3].attributes.name;
    let data_price_item4 = fulldata.data[3].attributes.price;
    let data_price2_item4 = fulldata.data[3].attributes.price1;
    // console.log(data_price2_item4);

    let image_item4 = document.querySelector(".image_item4");
    let price_item4 = document.querySelector(".price_item4");
    let name_item4 = document.querySelector(".name_item4");
    let price_item4_at_open = document.querySelector(".price_item4_at_open");
    let choose_item4_open_img = document.querySelector(
      ".choose_item4_open_img"
    );

    image_item4.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item4 + "')";
    name_item4.innerHTML = data_text_item4;
    price_item4.innerHTML = "From $" + data_price_item4;

    choose_item4_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item4 + "')";
    price_item4_at_open.innerHTML = "$ " + data_price_item4;

    // price changing with liters logic

    let sizes_box1_4 = document.querySelector(".sizes_box1_4");
    let sizes_box2_4 = document.querySelector(".sizes_box2_4");

    sizes_box2_4.addEventListener("click", () => {
      price_item4_at_open.innerHTML = "$ " + data_price2_item4;
      sizes_box2_4.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1_4.style.backgroundColor = "transparent";
    });
    sizes_box1_4.addEventListener("click", () => {
      price_item4_at_open.innerHTML = "$ " + data_price_item4;
      sizes_box1_4.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2_4.style.backgroundColor = "transparent";
    });

    // hovering effect item 4
    let item4 = document.querySelector(".item4");
    item4.addEventListener("mouseover", () => {
      image_item4.style.scale = "1.05";
      name_item4.style.textDecoration = "underline";
      price_item4.style.textDecoration = "underline";
    });
    item4.addEventListener("mouseout", () => {
      image_item4.style.scale = "1";
      name_item4.style.textDecoration = "none";
      price_item4.style.textDecoration = "none";
    });

    // =============================== adding to cart logic using DOM manipulation

    add_to_cart_item4.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item4 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "Paneer";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item4_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item4.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------

    // ------------------------ for ghee -----------------------
    let data_image_item5 =
      fulldata.data[4].attributes.image.data[0].attributes.url;
    let data_text_item5 = fulldata.data[4].attributes.name;
    let data_price_item5 = fulldata.data[4].attributes.price;
    let data_price2_item5 = fulldata.data[4].attributes.price1;
    // console.log(data_price2_item5);

    let image_item5 = document.querySelector(".image_item5");
    let price_item5 = document.querySelector(".price_item5");
    let name_item5 = document.querySelector(".name_item5");
    let price_item5_at_open = document.querySelector(".price_item5_at_open");
    let choose_item5_open_img = document.querySelector(
      ".choose_item5_open_img"
    );

    image_item5.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item5 + "')";
    name_item5.innerHTML = data_text_item5;
    price_item5.innerHTML = "From $" + data_price_item5;

    choose_item5_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item5 + "')";
    price_item5_at_open.innerHTML = "$ " + data_price_item5;

    // price changing with liters logic

    let sizes_box1_5 = document.querySelector(".sizes_box1_5");
    let sizes_box2_5 = document.querySelector(".sizes_box2_5");

    sizes_box2_5.addEventListener("click", () => {
      price_item5_at_open.innerHTML = "$ " + data_price2_item5;
      sizes_box2_5.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1_5.style.backgroundColor = "transparent";
    });
    sizes_box1_5.addEventListener("click", () => {
      price_item5_at_open.innerHTML = "$ " + data_price_item5;
      sizes_box1_5.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2_5.style.backgroundColor = "transparent";
    });

    // hovering effect item 5
    let item5 = document.querySelector(".item5");
    item5.addEventListener("mouseover", () => {
      image_item5.style.scale = "1.05";
      name_item5.style.textDecoration = "underline";
      price_item5.style.textDecoration = "underline";
    });
    item5.addEventListener("mouseout", () => {
      image_item5.style.scale = "1";
      name_item5.style.textDecoration = "none";
      price_item5.style.textDecoration = "none";
    });

    // =============================== adding to cart logic using DOM manipulation

    add_to_cart_item5.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item5 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "Ghee";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item5_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item5.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------

    // ------------------------ for yogurt -----------------------
    let data_image_item6 =
      fulldata.data[5].attributes.image.data[0].attributes.url;
    let data_text_item6 = fulldata.data[5].attributes.name;
    let data_price_item6 = fulldata.data[5].attributes.price;
    let data_price2_item6 = fulldata.data[5].attributes.price1;
    // console.log(data_price2_item6);

    let image_item6 = document.querySelector(".image_item6");
    let price_item6 = document.querySelector(".price_item6");
    let name_item6 = document.querySelector(".name_item6");
    let price_item6_at_open = document.querySelector(".price_item6_at_open");
    let choose_item6_open_img = document.querySelector(
      ".choose_item6_open_img"
    );

    image_item6.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item6 + "')";
    name_item6.innerHTML = data_text_item6;
    price_item6.innerHTML = "From $" + data_price_item6;

    choose_item6_open_img.style.backgroundImage =
      "url('http://localhost:1337" + data_image_item6 + "')";
    price_item6_at_open.innerHTML = "$ " + data_price_item6;

    // price changing with liters logic

    let sizes_box1_6 = document.querySelector(".sizes_box1_6");
    let sizes_box2_6 = document.querySelector(".sizes_box2_6");

    sizes_box2_6.addEventListener("click", () => {
      price_item6_at_open.innerHTML = "$ " + data_price2_item6;
      sizes_box2_6.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box1_6.style.backgroundColor = "transparent";
    });
    sizes_box1_6.addEventListener("click", () => {
      price_item6_at_open.innerHTML = "$ " + data_price_item6;
      sizes_box1_6.style.backgroundColor = "rgba(134, 125, 125, 0.456)";
      sizes_box2_6.style.backgroundColor = "transparent";
    });

    // hovering effect item 6
    let item6 = document.querySelector(".item6");
    item6.addEventListener("mouseover", () => {
      image_item6.style.scale = "1.05";
      name_item6.style.textDecoration = "underline";
      price_item6.style.textDecoration = "underline";
    });
    item6.addEventListener("mouseout", () => {
      image_item6.style.scale = "1";
      name_item6.style.textDecoration = "none";
      price_item6.style.textDecoration = "none";
    });

    // =============================== adding to cart logic using DOM manipulation

    add_to_cart_item6.addEventListener("click", () => {
      number_of_item_in_cart.innerHTML++;

      let el = document.createElement("div");
      el.style.width = "100%";
      el.style.height = "50px";
      el.style.border = "1px solid white";
      el.style.padding = "5px";
      el.style.display = "flex";
      el.style.justifyContent = "space-between";
      el.style.alignItems = "center";
      el.style.transition = "all 0.5s ease-in-out";

      let elimg = document.createElement("div");
      elimg.style.width = "10%";
      elimg.style.height = "100%";
      elimg.style.backgroundImage =
        "url('http://localhost:1337" + data_image_item6 + "')";
      elimg.style.backgroundPosition = "center";
      elimg.style.backgroundSize = "cover";

      let eltext = document.createElement("h4");
      eltext.innerText = "Yogurt";
      eltext.style.fontSize = "20px";
      eltext.style.fontFamily = "Montserrat";
      eltext.style.color = "#fff";

      let elprice = document.createElement("p");
      elprice = price_item6_at_open.cloneNode(true);
      elprice.style.fontFamily = "Montserrat";
      elprice.style.fontSize = "20px";

      let elquantity = document.createElement("div");
      elquantity = number_item6.cloneNode(true);

      let price = parseFloat(elprice.innerText.replace(/[^0-9.]/g, ""));
      let quantity = parseFloat(elquantity.innerText);
      finalprice += price * quantity;
      // console.log(finalprice);
      updateTotalPrice();

      let eldel = document.createElement("button");
      eldel.style.width = "30px";
      eldel.style.height = "30px";
      eldel.style.border = "none";
      eldel.style.background = "transparent";
      eldel.style.backgroundPosition = "center";
      eldel.style.backgroundSize = "cover";
      eldel.style.backgroundImage = "url(/assets/images/del.png)";
      eldel.onclick = function () {
        creating_element.removeChild(el);
        number_of_item_in_cart.innerHTML--;
        finalprice -= price * quantity;
        updateTotalPrice();
      };

      el.appendChild(elimg);
      el.appendChild(eltext);
      el.appendChild(elquantity);
      el.appendChild(elprice);
      el.appendChild(eldel);
      creating_element.appendChild(el);
    });

    // -------------------------------------------------------
  })
  .catch((err) => {
    console.log("error");
  });
// ---------------------------------------------------------------

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
let product_page = document.querySelector(".product_page");
let product_section = document.querySelector(".product_section");
let about_section = document.querySelector(".about_section");
let discover_farm = document.querySelector(".discover_farm");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
    product_page.style.display = "flex";
    product_section.style.display = "flex";
    discover_farm.style.display = "none";
    about_section.style.display = "flex";
  }, 1500);
});

// <--------------------------------------------------------------------------------------> //

// ------------ hamburger click logic --------------
let hamburger = document.querySelector(".hamburger");
let navigation_page = document.querySelector(".navigation_page");
let product_section_main = document.querySelector(".product_section_main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--open");
  navigation_page.classList.toggle("navigation_page--open");
});

// -----------------------------------------

// ---------------- switching from product to discover farm and vise versa -----------------
let Discover = document.querySelector(".Discover");
let product = document.querySelector(".product");

Discover.addEventListener("click", () => {
  product_section.style.display = "none";
  discover_farm.style.display = "flex";
  Discover.style.color = "white";
  product.style.color = "rgba(255, 255, 255, 0.868)";
  product.addEventListener("mouseover", () => {
    product.style.color = "white";
  });
  product.addEventListener("mouseout", () => {
    product.style.color = "rgba(255, 255, 255, 0.868)";
  });
});

product.addEventListener("click", () => {
  product_section.style.display = "flex";
  discover_farm.style.display = "none";
  product.style.color = "white";
  Discover.style.color = "rgba(255, 255, 255, 0.868)";
  Discover.addEventListener("mouseover", () => {
    Discover.style.color = "white";
  });
  Discover.addEventListener("mouseout", () => {
    Discover.style.color = "rgba(255, 255, 255, 0.868)";
  });
});

// ------------------------- for mobile navigation -----------------

let Discovers = document.querySelector(".Discovers");
let productss = document.querySelector(".productss");

Discovers.addEventListener("click", () => {
  product_section.style.display = "none";
  discover_farm.style.display = "flex";
  Discovers.style.color = "white";
  productss.style.color = "rgba(255, 255, 255, 0.868)";
  productss.addEventListener("mouseover", () => {
    productss.style.color = "white";
  });
  productss.addEventListener("mouseout", () => {
    productss.style.color = "rgba(255, 255, 255, 0.868)";
  });
});

productss.addEventListener("click", () => {
  product_section.style.display = "flex";
  discover_farm.style.display = "none";
  productss.style.color = "white";
  Discovers.style.color = "rgba(255, 255, 255, 0.868)";
  Discovers.addEventListener("mouseover", () => {
    Discovers.style.color = "white";
  });
  Discovers.addEventListener("mouseout", () => {
    Discovers.style.color = "rgba(255, 255, 255, 0.868)";
  });
});

productss.addEventListener("click", () => {
  navigation_page.classList.toggle("navigation_page--open");
  hamburger.classList.toggle("hamburger--open");
});

Discovers.addEventListener("click", () => {
  navigation_page.classList.toggle("navigation_page--open");
  hamburger.classList.toggle("hamburger--open");
});
// -----------------------------------------------------------

// --------------- cancel button of choose item page -------------------

let cancel_choose_item = document.querySelector(".cancel_choose_item");
let cancel_choose_item2 = document.querySelector(".cancel_choose_item2");
let cancel_choose_item3 = document.querySelector(".cancel_choose_item3");
let cancel_choose_item4 = document.querySelector(".cancel_choose_item4");
let cancel_choose_item5 = document.querySelector(".cancel_choose_item5");
let cancel_choose_item6 = document.querySelector(".cancel_choose_item6");
let choose_item_open = document.querySelector(".choose_item_open");

cancel_choose_item.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
cancel_choose_item2.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
cancel_choose_item3.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
cancel_choose_item4.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
cancel_choose_item5.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
cancel_choose_item6.addEventListener("click", () => {
  choose_item_open.style.marginTop = "-800px";
});
// ------------------------------------------------------------

// --------------------- item1 plus minus logic -------

let minus_item1 = document.querySelector(".minus_item1");
let plus_item1 = document.querySelector(".plus_item1");
let number_item1 = document.querySelector(".number_item1");

minus_item1.addEventListener("click", () => {
  if (number_item1.innerHTML > 1) {
    number_item1.innerHTML--;
  }
});
plus_item1.addEventListener("click", () => {
  if (number_item1.innerHTML < 4) {
    number_item1.innerHTML++;
  }
});
// -------------------------------------------------

let login_check = true; // to check loggedin or not

// -------------------- opening choose_item1 logic -----------------
let choose_item1 = document.querySelector(".choose_item1");
let choose_item1_open = document.querySelector(".choose_item1_open");

choose_item1.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "flex";
    choose_item2_open.style.display = "none";
    choose_item3_open.style.display = "none";
    choose_item4_open.style.display = "none";
    choose_item5_open.style.display = "none";
    choose_item6_open.style.display = "none";
  }
});

// -----------------------------------------------------------------

// -------------------- opening choose_item2 logic -----------------
let choose_item2 = document.querySelector(".choose_item2");
let choose_item2_open = document.querySelector(".choose_item2_open");

choose_item2.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "none";
    choose_item2_open.style.display = "flex";
    choose_item3_open.style.display = "none";
    choose_item4_open.style.display = "none";
    choose_item5_open.style.display = "none";
    choose_item6_open.style.display = "none";
  }
});
// -----------------------------------------------------------------
// --------------------- item2 plus minus logic -------

let minus_item2 = document.querySelector(".minus_item2");
let plus_item2 = document.querySelector(".plus_item2");
let number_item2 = document.querySelector(".number_item2");

minus_item2.addEventListener("click", () => {
  if (number_item2.innerHTML > 1) {
    number_item2.innerHTML--;
  }
});
plus_item2.addEventListener("click", () => {
  if (number_item2.innerHTML < 4) {
    number_item2.innerHTML++;
  }
});
// -------------------------------------------------

// -------------------- opening choose_item3 logic -----------------
let choose_item3 = document.querySelector(".choose_item3");
let choose_item3_open = document.querySelector(".choose_item3_open");

choose_item3.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "none";
    choose_item2_open.style.display = "none";
    choose_item3_open.style.display = "flex";
    choose_item4_open.style.display = "none";
    choose_item5_open.style.display = "none";
    choose_item6_open.style.display = "none";
  }
});
// -----------------------------------------------------------------
// --------------------- item3 plus minus logic -------

let minus_item3 = document.querySelector(".minus_item3");
let plus_item3 = document.querySelector(".plus_item3");
let number_item3 = document.querySelector(".number_item3");

minus_item3.addEventListener("click", () => {
  if (number_item3.innerHTML > 1) {
    number_item3.innerHTML--;
  }
});
plus_item3.addEventListener("click", () => {
  if (number_item3.innerHTML < 4) {
    number_item3.innerHTML++;
  }
});
// -------------------------------------------------

// -------------------- opening choose_item4 logic -----------------
let choose_item4 = document.querySelector(".choose_item4");
let choose_item4_open = document.querySelector(".choose_item4_open");

choose_item4.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "none";
    choose_item2_open.style.display = "none";
    choose_item3_open.style.display = "none";
    choose_item4_open.style.display = "flex";
    choose_item5_open.style.display = "none";
    choose_item6_open.style.display = "none";
  }
});
// -----------------------------------------------------------------
// --------------------- item4 plus minus logic -------

let minus_item4 = document.querySelector(".minus_item4");
let plus_item4 = document.querySelector(".plus_item4");
let number_item4 = document.querySelector(".number_item4");

minus_item4.addEventListener("click", () => {
  if (number_item4.innerHTML > 1) {
    number_item4.innerHTML--;
  }
});
plus_item4.addEventListener("click", () => {
  if (number_item4.innerHTML < 4) {
    number_item4.innerHTML++;
  }
});
// -------------------------------------------------

// -------------------- opening choose_item5 logic -----------------
let choose_item5 = document.querySelector(".choose_item5");
let choose_item5_open = document.querySelector(".choose_item5_open");

choose_item5.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "none";
    choose_item2_open.style.display = "none";
    choose_item3_open.style.display = "none";
    choose_item4_open.style.display = "none";
    choose_item5_open.style.display = "flex";
    choose_item6_open.style.display = "none";
  }
});
// -----------------------------------------------------------------
// --------------------- item5 plus minus logic -------

let minus_item5 = document.querySelector(".minus_item5");
let plus_item5 = document.querySelector(".plus_item5");
let number_item5 = document.querySelector(".number_item5");

minus_item5.addEventListener("click", () => {
  if (number_item5.innerHTML > 1) {
    number_item5.innerHTML--;
  }
});
plus_item5.addEventListener("click", () => {
  if (number_item5.innerHTML < 4) {
    number_item5.innerHTML++;
  }
});
// -------------------------------------------------

// -------------------- opening choose_item6 logic -----------------
let choose_item6 = document.querySelector(".choose_item6");
let choose_item6_open = document.querySelector(".choose_item6_open");

choose_item6.addEventListener("click", () => {
  if (login_check == false) {
    console.log("login kar");
    window.location.href = "login_page.html";
  } else {
    choose_item_open.style.marginTop = "100px";
    choose_item1_open.style.display = "none";
    choose_item2_open.style.display = "none";
    choose_item3_open.style.display = "none";
    choose_item4_open.style.display = "none";
    choose_item5_open.style.display = "none";
    choose_item6_open.style.display = "flex";
  }
});
// -----------------------------------------------------------------
// --------------------- item5 plus minus logic -------

let minus_item6 = document.querySelector(".minus_item6");
let plus_item6 = document.querySelector(".plus_item6");
let number_item6 = document.querySelector(".number_item6");

minus_item6.addEventListener("click", () => {
  if (number_item6.innerHTML > 1) {
    number_item6.innerHTML--;
  }
});
plus_item6.addEventListener("click", () => {
  if (number_item6.innerHTML < 4) {
    number_item6.innerHTML++;
  }
});
// -------------------------------------------------

// ------------- my account click logic ------------

let account = document.querySelector(".account");
let mycart = document.querySelector(".mycart");
let cancel_mycart = document.querySelector(".cancel_mycart");

account.addEventListener("click", () => {
  mycart.style.display = "flex";
});

cancel_mycart.addEventListener("click", () => {
  mycart.style.display = "none";
});
// -----------------------------------

let profile = document.getElementById("profile");
let myprofile = document.querySelector(".myprofile");
let cancel_myprofile = document.querySelector(".cancel_myprofile");

profile.addEventListener("click", () => {
  myprofile.style.display = "block";
});

cancel_myprofile.addEventListener("click", () => {
  myprofile.style.display = "none";
});
// --------------------------------------------------

// --------------------- login logic -------------

let login_btn_a = document.querySelector(".login_btn_a");

document.addEventListener("DOMContentLoaded", function () {
  const userToken = localStorage.getItem("userToken");
  if (userToken) {
    login_btn_a.style.display = "none";
    profile.style.display = "block";
    // loginBtn.href = "profile.html";
  }
  if (!userToken) {
    login_btn_a.style.display = "block";
    profile.style.display = "none";
  }
});

// --------------------------- logout logic -------------------

document.addEventListener("DOMContentLoaded", function () {
  const logout_btn = document.querySelector(".logout_btn");

  logout_btn.addEventListener("click", function () {
    const confirmation = confirm("Are you sure you want to logout ?");
    if (confirmation) {
      localStorage.removeItem("userToken");
      window.location.href = "product.html";
      login_btn_a.style.display = "block";
      profile.style.display = "none";
    }
  });
});
// -----------------------------------------------------------

// ------------------------- profile credential ------------------

async function getUserData() {
  try {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      throw new Error("User token not found");
    }

    const response = await fetch("http://localhost:1337/api/users/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    const userData = await response.json();
    console.log("User Data:", userData);

    const myprofile_name = document.querySelector(".myprofile_name");
    const myprofile_email = document.querySelector(".myprofile_email");
    const myprofile_phone = document.querySelector(".myprofile_phone");
    const myprofile_address = document.querySelector(".myprofile_address");

    myprofile_name.innerHTML = `Name: ${userData.username}`;
    myprofile_email.innerHTML = `Email: ${userData.email}`;
    myprofile_phone.innerHTML = `Phone: ${userData.phone}`;
    myprofile_address.innerHTML = `Address: ${userData.address}`;


    localStorage.setItem("myprofile_phone", `${userData.phone}`);
    localStorage.setItem("myprofile_name", `${userData.username}`);
    localStorage.setItem("myprofile_email", `${userData.email}`);
  } catch (error) {
    console.log("Error:", error);
    login_check = false;
  }
}
getUserData();

// --------------------------------------
function openCheckout() {
  window.location.href = "/assets/inside_html_file/checkout.html"
}