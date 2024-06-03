// ----------------- sign up logic ---------------

const alertt = document.querySelector(".alertt");

async function postJSON(data) {
  try {
    const response = await fetch(
      "http://localhost:1337/api/auth/local/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ); 

    const result = await response.json();
    // console.log("Success:", result);

    if (result.error) {
      alertt.innerHTML = `${result.error.message}`;
      // console.log();
      return;
    }

    if (result.jwt && result.user) {
      alertt.innerHTML = "successfull Sign Up";
    }


    // alert("Sign Up Successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

function handleSubmit() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  const data = { username, email, password, phone, address };

  if ( username == "" || email == "" ||  password == "" || phone==""||address=="") {
    alertt.style.display="block";
  }else {
    postJSON(data);
  }

}
// ----------------------------------------

