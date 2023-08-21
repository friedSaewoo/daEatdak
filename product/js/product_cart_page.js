let $all = $(".all");
let $inputs = $(".term");
function pagination(){
	var goods_num=2;	//한 페이지에 보여줄 리스트 수
	var $li=$('.goods li');	//이미지가 보이는 li태그
	var total_num_li=$li.length;	//div의 길이 -> 숫자 
	var num_pages=0;	//페이지 수

	if(total_num_li % goods_num==0){
		//li(이미지의 전체 수)를 한페이지에 보여줄수 있는 리스트 수로 나눠서 나머지가0일때 
		num_pages=total_num_li / goods_num;
		//페이지 수에 나눈수를 담는다 => 현재 만들어진 html코드를 기준으로는 3이 담긴다
	}
	if(total_num_li % goods_num >=1){
		//이미지이 나누어서 나머지가 1이상이면 똑같이 페이지수를 변수에 담고
		num_pages=total_num_li / goods_num;
		num_pages++;//페이지가 하나 늘어나서 다음 페이지가 생기도록 증가시킨다
		num_pages=Math.floor(num_pages++);
		//실수가 나오면 페이지가 하나더 생성되도록 저장한다
	}

	for(var i=1; i<num_pages; i++){
		$('.cart-page-num').append("<li class='cart-page-number'><a href=''>"+i+"</a>&nbsp;/&nbsp;</li>");
		// jQuery('.pagination tr:nth-child(2)').addClass("active");
		//a태그는 페이지가 보이는 페이지이다 
		if(i == num_pages-1) {
			$('.cart-page-num').append("<li class='cart-page-number''><a href=''>"+ num_pages +"&nbsp;&nbsp;</a></li>");
			//i가 마지막 페이지에도달하게 되면 i의 수가 아닌 전체페이지의 값이 나오도록 한다
		}
	
	}


	$li.each(function(i){
  	$(this).hide();
  	if(i+1 <= goods_num){
			$li.eq(i).show();
		}
	}); //이미지의 수를 반복적으로 돌려 비교하여 i가 현제 페이지에 보여줘야하는 
	// 수와 같다면 이미지를 보여줄수 있도록 설정 

	// $('.page-box a').click(function(){
	// 		$(window).scrollTop(0,0);
	// 	})	
	$('.cart-page-num a').click(function(e){
		e.preventDefault();
		$li.hide();
		var page=$(this).text();
		var temp=page-1;
		var start=temp*goods_num;
		

		for(var i=0; i< goods_num; i++){
			$li.eq(start+i).show();
			
		}
	});


	// let $all = $(".all");
	// let $inputs = $(".term");

	$all.on('click', function(){
    	if($(this).is(":checked")){
        	$inputs.prop('checked', true);
    	}else{
        	$inputs.prop('checked', false);
   	 	}
	})
    //하나의 약관이라도 해제가 된다면 전체 동의 체크 해제
    //각 항목이 모두 체크되면 전체 동의 체크

    //선택자에서 :를 사용하면 동작에 관련된 태그를 선택할 수 있다
    //:hover, :action, :checked 등
    //$('선택자').filter('선택자') : filter를 통해 전달한 선택자로 걸러낼 수 있다
	$inputs.on('click', function(){ 
    	if(!$(this).is(":checked")){
        	$all.prop('checked', false);
    	}
    	if($inputs.filter(":checked").length == goods_num){
        	$all.prop('checked', true);
    	}
	});


	

}
$('document').ready(function(){
	pagination();
	
$('.cart-page-num li:first-child').addClass("disabled");
	
});



let buttons=document.querySelector('button');
let cartgoods=document.querySelectorAll('.cart-goods');
	
	buttons.addEventListener('click',function(){
		if($inputs.is(":checked")){
			alert("상품이 삭제되었습니다.")
			$inputs.is(":checked").remove();
		}else{
			alert("선택된 상품이 없습니다.");
		}
		
	});
	
	