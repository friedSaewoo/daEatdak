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
        function handleEmailSelect(selectElement) {
            var email2Input = selectElement.nextElementSibling.querySelector('input[name="email2_input"]');
            var directOption = selectElement.querySelector('option[value="direct"]');
            
            if (selectElement.value === "direct") {
                email2Input.style.display = "inline-block";
                email2Input.value = ""; // Clear any existing value
                email2Input.removeAttribute("readonly");
                directOption.textContent = ""; // Hide the "직접입력" option text
            } else {
                email2Input.style.display = "none";
                email2Input.setAttribute("readonly", "readonly");
                directOption.textContent = "직접입력"; // Show the "직접입력" option text
            }
        }