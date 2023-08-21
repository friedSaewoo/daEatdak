function pagination(){
	var req_num_row=7;	//한 페이지에 보여줄 리스트 수
	var $li=$('ul li');	//테이블의 tr태그
	var total_num_row=$li.length;	//tr의 길이를 변수에 담기
	var num_pages=0;	//페이징 수

	if(total_num_row % req_num_row ==0){	// 테이블의 자식(tr)길이 나누기 한 페이지에 출력할 수가 0일 경우
		num_pages=total_num_row / req_num_row;
	}
	if(total_num_row % req_num_row >=1){	// 테이블의 자식(tr)길이 나누기 한 페이지에 출력할 수가 1 이상일 경우
		num_pages=total_num_row / req_num_row;
		num_pages++;
		num_pages=Math.floor(num_pages++);
	}

	for(var i=1; i<num_pages; i++){	//페이지 수를 반복하여 Element코드(append)로 페이징 수 만큼 반복
		$('.pagination').append("<div class='paging_btn'><a href=''>"+i+"</a>&nbsp;/&nbsp;</div>");
		$('.pagination li:nth-child(2)').addClass("active");

		if(i == num_pages-1) {	//만약 반복한 수가 페이징 수 -1과 같으면 (최대)페이징 수 를 출력
			$('.pagination').append("<div class='paging_btn'><a href=''>"+ num_pages +"&nbsp;&nbsp;</a></div>");
		}
	
	}

	$li.each(function(i){	//테이블의 tr태그를 i매개변수로 반복진행
  $(this).hide();	//테이블 tr태그 리스트 가림.
  if(i+1 <= req_num_row){	//만약 i+1이 한 페이지에 보여줄 리스트 수보다 작거나 같다면
			$li.eq(i).show();	//tr과 i를 비교하여 테이블 리스트를 화면에 출력.
		}
	});


	$('.pagination a').click(function(e){
		//pagination이라는 클래스명을 가진 a태그 클릭시
		e.preventDefault();	//매개변수의 값을 전송하지 않고 중단시킴
		$li.hide();
		var page=$(this).text();	// 현재a태그의 텍스트만 전체 출력
		var temp=page-1;	//전체 출력한 텍스트에 -1
		var start=temp*req_num_row;	//	(텍스트 수 -1) *보여줄 페이지 수

		for(var i=0; i< req_num_row; i++){	//페이지의 리스트 수 반복
			$li.eq(start+i).show();
		}

	});


	$("#firstPage").click('',function(e) {	//firstPage의 id를 가진 태그가 클릭되었을 때
		e.preventDefault();
		$li.hide();
		var page=1;
		var temp=page-1;
		var start=temp*req_num_row;

		for(var i=0; i< req_num_row; i++){
			$li.eq(start+i).show();
		}
		alert("firstPage test");
	});

	$("#lastPage").click('',function(e) {	//lastPage의 id를 가진 태그가 클릭되었을 때
		e.preventDefault();
		$li.hide();
		var page=num_pages;
		var temp=page-1;
		var start=temp*req_num_row;

		for(var i=0; i< req_num_row; i++){
			$li.eq(start+i).show();
		}
		alert("firstPage test");
	});


	
}

function productDel() {
    $(".del").click(function() {
        var del = confirm("삭제 하시겠습니까?");
        if(del){
            alert("삭제되었습니다")
        }
    })

    $(".upload").click(function() {
        link = "admin_proInfoUp.html"
            location.href = link;
    })

    $(".ins").click(function() {
        var up = confirm("등록 하시겠습니까?");
        link = "admin_productInfo.html"
        if(up) {
            alert("등록되었습니다.")
            location.href = link;
        }
    })



}

$('document').ready(function(){
	pagination();
    productDel();
	$('.pagination li:first-child').addClass("disabled");
	
	});
