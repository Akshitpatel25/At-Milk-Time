// ----------------- sign up logic ---------------
let alertt = document.querySelector(".alertt");

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
    // console.log("Success:", result);

    if (result.error) {
      alertt.innerHTML = `${result.error.message}`;
      // console.log();
      return;
    }

    if (result.jwt && result.user) {
      alertt.innerHTML = "successfull login";
      setTimeout(() => {
        window.location.href = "product.html";
      }, 500);
    }

    localStorage.setItem("userToken", result.jwt);
  } catch (error) {
    console.error("Error:", error);
    alertt.innerHTML = "server off";
  }
}

function handleSubmit() {
  // const username = document.getElementById("username").value;
  const identifier = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = { identifier, password };
  postJSON(data);
}

document.addEventListener("DOMContentLoaded", function () {
  const userToken = localStorage.getItem("userToken");
  if (userToken) {
    window.location.href = "product.html";
  }
});
