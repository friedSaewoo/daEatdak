function checkPassword(){
    const inputPassword = document.getElementById('inputPassword').value;
    const myPassword = 1111;

    if(inputPassword == myPassword){
        const deleteConfirm = confirm("삭제하시겠습니까?");
        if(deleteConfirm){
            alert("삭제되었습니다.");
            window.location.href="../html/board_list.html";
        }

    }else{
        alert("비밀번호가 일치하지 않습니다.");
    }
    console.log(inputPassword);
    console.log(myPassword);
}