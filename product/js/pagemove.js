
// // 페이지 변경 버튼들을 가져옵니다.
// var arrows = document.querySelectorAll('.pageing.arrow');
// // var nextArrow = document.querySelector('.next');

// // 페이지 주소를 가져옵니다.
// var pageaddress = document.querySelectorAll('.page-num.page-change');

// // 현재 페이지 인덱스를 나타내는 변수입니다.
// var count = 0;

// // 페이지로 이동하는 함수입니다.
// arrows.forEach((arrow)->{
//   let 
// })
const arrows = document.querySelectorAll('div.arrow');
let count=0;
const pages=document.querySelectorAll('.page-num');
const pagechanges=document.querySelectorAll('.page-change');
arrows.forEach((arrow)=>{
    let arrowType=arrow.classList[0];
    arrow.addEventListener('click',function(){
        if(arrowType=='prev'&&count !=0){
            count--;
        }else if(arrowType=='next'&&count != pages.length-1){
            count++;
        }else{
            if(count==pages.length-1){
                count=1;
            }else{
                count=3;
            }
        }
        window.location.href=pagechanges[count].getAttribute('href');
    })

});






