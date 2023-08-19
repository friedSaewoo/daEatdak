
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
// const arrows = document.querySelectorAll('div.arrow');
// let count=0;
// const pages=document.querySelectorAll('.page-num');
// const pagechanges=document.querySelectorAll('.page-change');
// arrows.forEach((arrow)=>{
//     let arrowType=arrow.classList[0];
//     arrow.addEventListener('click',function(){
//         if(arrowType=='prev'&&count !=0){
//             count--;
//         }else if(arrowType=='next'&&count != pages.length-1){
//             count++;
//         }else{
//             if(count==pages.length-1){
//                 count=1;
//             }else{
//                 count=3;
//             }
//         }
//         window.location.href=pagechanges[count].getAttribute('href');
//     })

// });

function pagination(){
	var list_info_num=9;	//한 페이지에 보여줄 리스트 수
	var $li=$('.product-list li');	//테이블의 tr태그
	var total_num_li=$li.length;	//li의 길이를 변수에 담기
	var num_pages=0;	//페이지 수

	if(total_num_li % list_info_num ==0){
		num_pages=total_num_li / list_info_num;
	}
	if(total_num_li % list_info_num >=1){
		num_pages=total_num_row / list_info_num;
		num_pages++;
		num_pages=Math.floor(num_pages++);
	}

	for(var i=1; i<num_pages; i++){
		$('.page-box').append("<li class='page-num'><a href=''>"+i+"</a>&nbsp;/&nbsp;</li>");
		// jQuery('.pagination tr:nth-child(2)').addClass("active");
		if(i == num_pages-1) {
			$('.page-box').append("<li class='page-num''><a href=''>"+ num_pages +"&nbsp;&nbsp;</a></li>");
			
		}
	
	}


	$li.each(function(i){
  $(this).hide();
  if(i+1 <= list_info_num){
			$li.eq(i).show();
		}
	});

	$('.page-box a').click(function(e){
		e.preventDefault();
		$li.hide();
		var page=$(this).text();
		var temp=page-1;
		var start=temp*list_info_num;

		for(var i=0; i< list_info_num; i++){
			$li.eq(start+i).show();
		}



	});

}

$('document').ready(function(){
pagination();

$('.page-box li:first-child').addClass("disabled");

});



const arrows = document.querySelectorAll("div.arrow");
var count = 0;
const pagenums=document.querySelectorAll(".page-num");

arrows.forEach((arrow) => {
	arrow.addEventListener("click", function(){
		let arrowType = arrow.classList[1];
		if(arrowType == 'prev' && count != 0){
			count--;
		}else if(arrowType == 'next' && count != pagenums.length - 1){
			count++;
		}else{
			if(count == pagenums.length - 1){
				count = 0;
			}else{
				count = 3;
			}
		}
		pagenums[count].click();
	});
	$('.page-box li:first-child').addClass("disabled");
});


// $(document).ready(function() {

// 	const arrows = document.querySelectorAll("div.arrow");
//     var count = 0;

// 	$(arrows).click(function(e) {
		
// 		let arrowType = arrowPage.classList[1];
// 		if(arrowType == 'prev' && count != 0){
// 			count --;
// 		}else if(arrowType == 'next' && count != btns.length - 1){
// 			count ++;
// 		}else{
// 			if(count == btns.length - 1){
// 				count = 0;
// 			}else{
// 				count = 3;
// 			}
// 		}
	


// 	});

// 	// $("#last").click(function() {
// 	// 	alert("test");
// 	// });

// });





