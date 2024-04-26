//your JS code here. If required.
function alertDtls(event) {
  event.preventDefault();
  let ipDtls = document.querySelectorAll(".ip-dtls");
  let contactDtls = [];
  ipDtls.forEach((input) => {
    contactDtls.push(input.value);
  });
  window.alert(
    `First Name: ${contactDtls[0]} Last Name: ${contactDtls[1]} Phone Number: ${contactDtls[2]} Email Id: ${contactDtls[3]}`
  );
}

document.getElementById("contact-form").onsubmit = alertDtls;