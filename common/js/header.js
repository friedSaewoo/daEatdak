// 픽스메뉴 가로스크롤 기능
$(window).scroll(function () {
    $(".nav-fix-menu-container").css("left", 0 - $(this).scrollLeft());
  });
  

  // header부분 높이 초과시 fixed 메뉴바 등장
  $(document).ready(function(){
    var headerHeight = $(".header").height(); 
  console.log(headerHeight);
    $(".nav-fix-menu-container").hide();
    $(window).scroll(function(){  
        var fixedMenuShow = $(this).scrollTop() >= headerHeight; 
  
    if(fixedMenuShow){ 
            $(".nav-fix-menu-container").show();
        }
        else{
            $(".nav-fix-menu-container").hide();
        }
    });
    
  });
  