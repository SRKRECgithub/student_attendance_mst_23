function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMsg = document.getElementById('error');

    if (username === "") {
        errorMsg.innerHTML = "Please enter username";
        return;
    }
    if (password === "") {
        errorMsg.innerHTML = "Please enter password";
        return;
    }
    if (username === "sri" && password === "1234") {
        window.location.href = "homel.html";
    } else {
        errorMsg.innerHTML = "Invalid username or password";
    }
    
}