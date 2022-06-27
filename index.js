function handleAnchorLink() {
    let input = window.prompt("Enter Email Id for Registrarion and to get updates");
    var div = document.getElementById("userInput");

    div.innerHTML +=
      "Hi, You have entered " +
      input + " as email id, Thanks for registration.</br> Will send you the updates shortly...!";
}