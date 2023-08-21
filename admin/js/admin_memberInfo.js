function filter_board() {

    $(".boardSearchBtn").click(function() {

		var select_search_board = document.getElementById("selectSearch_board")
		var value = (select_search_board.options[select_search_board.selectedIndex].value);
	
		let search_board = document.getElementById("searchBoard").value.toLowerCase();
		let board_list = document.getElementsByClassName("boardList");
	
		for (let i = 0; i < board_list.length; i++) {
		  title = board_list[i].getElementsByClassName("boardTitle");
		  writer = board_list[i].getElementsByClassName("writerName");
			if(value == "writer") {
				if(writer[0].innerHTML.toLowerCase().indexOf(search_board) != -1) {
					board_list[i].style.display = "flex"
					board_list[i].style.display = ""
				} else {
					board_list[i].style.display = "none"
				}
			} else if(value == "title") {
				if(title[0].innerHTML.toLowerCase().indexOf(search_board) != -1) {
					board_list[i].style.display = "flex"
					board_list[i].style.display = ""		
				} else {
					board_list[i].style.display = "none"
				}
			} else {
				board_list[i].style.display = "none"
			}
		}

	})
  }


function filter() {

	$("select[name=selectSearch]").change(function(){
		var select_search = $(this).val();
		console.log($(this).val()); //value값 가져오기
	});

	var select_search = document.getElementById("selectSearch")
	var value = (select_search.options[select_search.selectedIndex].value);

	let search = document.getElementById("search").value.toLowerCase();
	let mem_info_list = document.getElementsByClassName("memInfo");

	for (let i = 0; i < mem_info_list.length; i++) {
	  mem_name = mem_info_list[i].getElementsByClassName("memName");
	  mem_id = mem_info_list[i].getElementsByClassName("memId");

		if(value == "name") {
			if(mem_name[0].innerHTML.toLowerCase().indexOf(search) != -1) {
				mem_info_list[i].style.display = "flex"
				mem_info_list[i].style.display = ""
		
			} else {
				mem_info_list[i].style.display = "none"
			}
		} else if(value == "id") {
			if(mem_id[0].innerHTML.toLowerCase().indexOf(search) != -1) {
				mem_info_list[i].style.display = "flex"
				mem_info_list[i].style.display = ""		
			} else {
				mem_info_list[i].style.display = "none"
			}
		} else {
			mem_info_list[i].style.display = "none"
		}
	}
  }



function pagination(){
	filter_board();
//	filter();

	$("select[name=memListNum]").change(function(){
		req_num_row1 = $(this).val();
		console.log($(this).val()); //value값 가져오기

		$('#list001').append("<input type='hidden' value='"+req_num_row1+"' id='req_numrow1'>");
	});



	var req_num_row=10;	//한 페이지에 보여줄 리스트 수

	var $tr=$('tbody tr');	//테이블의 tr태그
	var total_num_row=$tr.length;	//tr의 길이를 변수에 담기
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
		$('.pagination').append("<div class='paging_btn'><a href='' class='btn01'>"+i+"</a></div>&nbsp;/&nbsp;");
		$('.pagination tr:nth-child(2)').addClass("active");

		if(i == num_pages-1) {	//만약 반복한 수가 페이징 수 -1과 같으면 (최대)페이징 수 를 출력
			$('.pagination').append("<div class='paging_btn'><a href=''>"+ num_pages +"</a></div>&nbsp;&nbsp;");
		}
	
	}

	$tr.each(function(i){	//테이블의 tr태그를 i매개변수로 반복진행
  $(this).hide();	//테이블 tr태그 리스트 가림.
  if(i+1 <= req_num_row){	//만약 i+1이 한 페이지에 보여줄 리스트 수보다 작거나 같다면
			$tr.eq(i).show();	//tr과 i를 비교하여 테이블 리스트를 화면에 출력.
		}
	});


	$('.pagination a').click(function(e){
		//pagination이라는 클래스명을 가진 a태그 클릭시
		e.preventDefault();	//매개변수의 값을 전송하지 않고 중단시킴
		$tr.hide();
		var page=$(this).text();	// 현재a태그의 텍스트만 전체 출력
		var temp=page-1;	//전체 출력한 텍스트에 -1
		var start=temp*req_num_row;	//	(텍스트 수 -1) *보여줄 페이지 수
		alert("처음" + page[0]);

		$(".paging_btn").find('a').removeClass('disabled');

		$(this).find('a').removeClass();
		if(page == 1) {	
			$(".btn01").css("color","red")
			$(this).css("color","black")
		} else if(page == 2) {
			$(".btn01").css("color","red")
			$(this).css("color", "white");
		} else if(page == 3) {
			$(".btn01").css("color","red")
			$(this).css("color", "white");
		}


			if(page == 1) {
				$(this).removeClass('disabled');
				btn01.not($(this)).addClass('disabled');
			} else if(page == 2) {
				$(this).removeClass('disabled');
				btn01.not($(this)).addClass('disabled');
			} else if(page == 3) {
				$(this).removeClass('disabled');
				btn01.not($(this)).addClass('disabled');
			}

			for(var i=0; i< req_num_row; i++){	//페이지의 리스트 수 반복
			$tr.eq(start+i).show();
		}

	});


	$("#firstPage").click('',function(e) {	//firstPage의 id를 가진 태그가 클릭되었을 때
		e.preventDefault();
		$tr.hide();
		var page=1;
		var temp=page-1;
		var start=temp*req_num_row;

		for(var i=0; i< req_num_row; i++){
			$tr.eq(start+i).show();
		}
		alert("firstPage test");
	});

	$("#lastPage").click('',function(e) {	//lastPage의 id를 가진 태그가 클릭되었을 때
		e.preventDefault();
		$tr.hide();
		var page=num_pages;
		var temp=page-1;
		var start=temp*req_num_row;

		for(var i=0; i< req_num_row; i++){
			$tr.eq(start+i).show();
		}
		alert("firstPage test");
	});


	
}

$('document').ready(function(){
	pagination();


	$('.pagination tr:first-child').addClass("disabled");
	
	});
