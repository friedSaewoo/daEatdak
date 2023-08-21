//https://tlatmsrud.tistory.com/3 참고
//비밀번호 확인 부분
function check_pw(){
            var pw = document.getElementById('pw').value;
            var check_SC = 0;
 
        
            if(document.getElementById('pw').value !='' && document.getElementById('pw2').value!=''){
                if(document.getElementById('pw').value==document.getElementById('pw2').value){
                    document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
                    document.getElementById('check').style.color='blue';
                }
                else{
                    document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
                    document.getElementById('check').style.color='red';
                }
            }
        }
 
//이메일 선택 부분
function selectEmail(ele){
    var $ele = $(ele);
    var $email2 = $('input[name=email2]');

    // '1'인 경우 직접입력
    if($ele.val() == "1"){
        $email2.attr('readonly', false);
        $email2.val('');
    } else {
        $email2.attr('readonly', true);
        $email2.val($ele.val());
    }
}

//아이디 중복확인 

window.onload = function () {
    // 아이디 중복 체크
    document.getElementById("id_request").onclick = function () {
        var inputId = document.getElementById("id").value; // 입력한 아이디 값

        // 임의의 데이터 값
        var mockData = "admin"; // 중복된 아이디라고 가정

        var messageElement = document.getElementById("here");

        if (inputId === mockData) {
            messageElement.textContent = "중복된 아이디입니다.";
            messageElement.style.color = "red";
        } else {
            messageElement.textContent = "사용가능한 아이디입니다.";
            messageElement.style.color = "blue";
        }
    };
};