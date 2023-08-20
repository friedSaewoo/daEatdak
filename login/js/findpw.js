document.addEventListener("DOMContentLoaded", function() {
    var findpwForm = document.getElementById("findpw_form");
    var outputText = document.getElementById("txt");

    findpwForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 폼 제출 동작 막기

        var idInput = findpwForm.querySelector("input[placeholder='아이디 입력']");
        var nameInput = findpwForm.querySelector("input[placeholder='이름 입력']");
        var emailInput = findpwForm.querySelector("input[placeholder='이메일 입력']");

        var userID = idInput.value;
        var userName = nameInput.value;
        var userEmail = emailInput.value;

        if (userID === "admin" && userName === "노장" && userEmail === "club@club.com") {
            outputText.textContent = "회원님의 비밀번호는 shwkd123 입니다."; 
        } else {
            outputText.innerHTML = "비밀번호를 찾을 수 없습니다. <br>입력한 정보를 확인해주세요.";
        }
    });
});