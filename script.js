function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}
 alert("welcome to my image gallery");
alert("all images presented here can be seen on full screen by just clicking on it");
 prompt("please enter your name");
 prompt("the passcode is coursera ,please type ok")
 
 var password = "ok";
 (function passcodeprotect() {
    var passcode = prompt("the passcode is coursera ,please type ok");
    while (passcode !== password) {
       alert("please enter ok to proceed");
       return passcodeprotect();
    }
 }());

 var password = "coursera";
 (function passcodeprotect() {
    var passcode = prompt("Enter PassCode");
    while (passcode !== password) {
       alert("Incorrect PassCode");
       return passcodeprotect();
    }
 }());
console.log("my historical gallery")