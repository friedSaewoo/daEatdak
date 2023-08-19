// 픽스메뉴 가로스크롤 기능 추가.
$(window).scroll(function () {
    $(".nav-fix-menu-container").css("left", 0 - $(this).scrollLeft());
  });
  

  // header부분 높이 초과시 fixed 메뉴바 및 사이드 배너 영역 등장
  $(document).ready(function(){
    var headerHeight = $(".header").height(); 
  console.log(headerHeight);
    $(".nav-fix-menu-container").hide();

    $(window).scroll(function(){  
        var fixedMenuShow = $(this).scrollTop() >= headerHeight; 
  

    if(fixedMenuShow==0){
      $("#floatMenu-container").hide();
      $(".nav-fix-menu-container").hide();
    }else if(fixedMenuShow){ 
            $(".nav-fix-menu-container").show();
            $("#floatMenu-container").fadeIn();
            $('.top-button').fadeIn();

    }else{
            $(".nav-fix-menu-container").hide();
            $("#floatMenu-container").fadeOut();
        }
    });
    
  });
  