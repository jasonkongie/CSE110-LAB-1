window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    alert("Email submitted: " + email);
}
