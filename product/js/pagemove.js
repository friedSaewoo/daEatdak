
function pagination(){
	var list_info_num=9;	//한 페이지에 보여줄 리스트 수
	var $li=$('.product-list li');	//이미지가 보이는 li태그
	var total_num_li=$li.length;	//li의 길이 -> 숫자 
	var num_pages=0;	//페이지 수

	if(total_num_li % list_info_num ==0){
		//li(이미지의 전체 수)를 한페이지에 보여줄수 있는 리스트 수로 나눠서 나머지가0일때 
		num_pages=total_num_li / list_info_num;
		//페이지 수에 나눈수를 담는다 => 현재 만들어진 html코드를 기준으로는 3이 담긴다
	}
	if(total_num_li % list_info_num >=1){
		//이미지이 나누어서 나머지가 1이상이면 똑같이 페이지수를 변수에 담고
		num_pages=total_num_row / list_info_num;
		num_pages++;//페이지가 하나 늘어나서 다음 페이지가 생기도록 증가시킨다
		num_pages=Math.floor(num_pages++);
		//실수가 나오면 페이지가 하나더 생성되도록 저장한다
	}

	for(var i=1; i<num_pages; i++){
		$('.page-box').append("<li class='page-num'><a href=''>"+i+"</a>&nbsp;/&nbsp;</li>");
		// jQuery('.pagination tr:nth-child(2)').addClass("active");
		//a태그는 페이지가 보이는 페이지이다 
		if(i == num_pages-1) {
			$('.page-box').append("<li class='page-num''><a href=''>"+ num_pages +"&nbsp;&nbsp;</a></li>");
			//i가 마지막 페이지에도달하게 되면 i의 수가 아닌 전체페이지의 값이 나오도록 한다
		}
	
	}


	$li.each(function(i){
  	$(this).hide();
  	if(i+1 <= list_info_num){
			$li.eq(i).show();
		}
	}); //이미지의 수를 반복적으로 돌려 비교하여 i가 현제 페이지에 보여줘야하는 
	// 수와 같다면 이미지를 보여줄수 있도록 설정 

	$('.page-box a').click(function(){
			$(window).scrollTop(0,0);
		})	


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
		
	});
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





