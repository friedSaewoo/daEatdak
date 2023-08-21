document.addEventListener("DOMContentLoaded", function() {
    var findidForm = document.getElementById("findid_form");
    var outputText = document.getElementById("txt");

    findidForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 폼 제출 동작 막기

        var nameInput = findidForm.querySelector("input[placeholder='이름 입력']");
        var emailInput = findidForm.querySelector("input[placeholder='이메일 입력']");

        var fullName = nameInput.value;
        var userEmail = emailInput.value;

        if (fullName === "노장" && userEmail === "club@club.com") {
            outputText.textContent = "회원님의 아이디는 admin 입니다.";
        } else {
            outputText.innerHTML = "아이디를 찾을 수 없습니다. <br>이름과 이메일을 확인해주세요.";
        }
    });
});