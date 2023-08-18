function pagination(){
	var req_num_row=5;	//한 페이지에 보여줄 리스트 수
	var $tr=jQuery('tbody tr');	//테이블의 tr태그
	var total_num_row=$tr.length;	//tr의 길이를 변수에 담기
	var num_pages=0;	//페이지 수

	if(total_num_row % req_num_row ==0){
		num_pages=total_num_row / req_num_row;
	}
	if(total_num_row % req_num_row >=1){
		num_pages=total_num_row / req_num_row;
		num_pages++;
		num_pages=Math.floor(num_pages++);
	}

	for(var i=1; i<num_pages; i++){
		jQuery('.pagination').append("<div class='paging'><a href=''>"+i+"</a>&nbsp;/&nbsp;</div>");
		jQuery('.pagination tr:nth-child(2)').addClass("active");
		if(i == num_pages-1) {
			jQuery('.pagination').append("<div class='paging'><a href=''>"+ num_pages +"&nbsp;&nbsp;</a></div>");
			alert("같")
		}
	
	}


	$tr.each(function(i){
  jQuery(this).hide();
  if(i+1 <= req_num_row){
			$tr.eq(i).show();
		}
	});

	jQuery('.pagination a').click('.pagination-link', function(e){
		e.preventDefault();
		$tr.hide();
		var page=jQuery(this).text();
		var temp=page-1;
		var start=temp*req_num_row;

		for(var i=0; i< req_num_row; i++){
			$tr.eq(start+i).show();
		}



	});

}

jQuery('document').ready(function(){
pagination();

jQuery('.pagination tr:first-child').addClass("disabled");

});



const pagingA = document.querySelectorAll("div.btn");
const banner = document.querySelector("div.banner");
const arrows = document.querySelectorAll("div.arrowPage");
var count = 0;


arrows.forEach((arrowPage) => {
	arrowPage.addEventListener("click", function(){
		let arrowType = arrowPage.classList[1];
		if(arrowType == 'pv' && count != 0){
			count --;
		}else if(arrowType == 'nt' && count != pagingA.length - 1){
			count ++;
		}else{
			if(count == pagingA.length - 1){
				count = 0;
			}else{
				count = 5;
			}
		}
		banner.style.transform = "translate(-" + count * 90 + "vw )";
	});
});













$(document).ready(function() {

	const arrows = document.querySelectorAll("div.arrow");
    var count = 0;

	$("#firstPage").click(function(e) {
		
		let arrowType = arrowPage.classList[1];
		if(arrowType == 'prev' && count != 0){
			count --;
		}else if(arrowType == 'next' && count != btns.length - 1){
			count ++;
		}else{
			if(count == btns.length - 1){
				count = 0;
			}else{
				count = 5;
			}
		}
		banner.style.transform = "translate(-" + count * 90 + "vw )";


	});

	$("#lastPage").click(function() {
		alert("test");
	});

});
