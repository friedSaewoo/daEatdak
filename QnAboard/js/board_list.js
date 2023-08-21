//웹페이지가 로드된 후 실행하도록 DOM 사용
document.addEventListener('DOMContentLoaded', function () {
    //게시글 항목 저장
    const postElements = document.querySelectorAll('.post');
    //페이지 당 표시할 게시글
    const page_num = 5;
    let currentPage = 1;
    //이전, 다음버튼
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    //첫 화면 표시
    displayData();

    function displayData() {
        //게시글 목록이 동적으로 보여질 요소
        const boardList = document.querySelector('.board-list');
        //초기화
        boardList.innerHTML = '';
        //현재 페이지에 표시할 범위 설정
        const start = (currentPage - 1) * page_num;
        const end = start + page_num;
        //현재 표시할 범위만 display에 저장
        const display = Array.from(postElements).slice(start, end);
        //display에 있는 요소들을boardList에 추가하여 게시글 표시

        display.forEach(item => {
            boardList.appendChild(item);
        });
    }


function createButtons() {
    //동적으로 보여질 버튼영역
    const ButtonContainer = document.querySelector('.board-page');
    //초기화
    ButtonContainer.innerHTML = '';
    //"게시글 항목 수 / 보여질 게시글 수" 를 올림하여 변수에 저장
    const totalPages = Math.ceil(postElements.length / page_num);

    //이전 버튼 동적 생성
    const prevButton = document.createElement('a');
    prevButton.textContent = '<';
    prevButton.classList.add('bt', 'first');
    prevButton.href = '#';
    //클릭 이벤트 추가, 현재 페이지가 1보다 클때만 동작
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayData();
            currentPageButtons();
        }
    });
    //버튼 컨테이너에 버튼 추가
    ButtonContainer.appendChild(prevButton);

    //페이지 숫자 버튼 생성, 클릭이벤트 추가
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('a');
        button.textContent = i;
        button.classList.add('num');
        console.log(i +"버튼 생성");
        button.href = '#';
        if (i === currentPage) {
            button.classList.add('on');
        } else {
            button.classList.remove('on');
        }


        button.addEventListener('click', () => {
            currentPage = i;
            
            displayData();
            currentPageButtons();
        });

        ButtonContainer.appendChild(button);
    }

    //다음 버튼 동적생성, 이전버튼과 같음
    const nextButton = document.createElement('a');
    nextButton.textContent = '>';
    nextButton.classList.add('bt', 'last');
    nextButton.href = '#';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayData();
            currentPageButtons();
        }
    });
    ButtonContainer.appendChild(nextButton);
    
}

function currentPageButtons() {
    const buttons = document.querySelectorAll('a.num');
    buttons.forEach((button, i) => {
        if (i + 1 === currentPage) {
            button.classList.add('on');
        } else {
            button.classList.remove('on');
        }
    });
}
    createButtons();
});