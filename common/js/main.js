

// 상품 섹션 탭메뉴 
$(".goods-container").each(function () {
    var tabMenuDiv2 = $(this);
    var menu_a2 = tabMenuDiv2.find("a");
    var panelDiv2 = tabMenuDiv2.find("div.panel");
    panelDiv2.hide();
  
    var panelOne2;
    var panelShow2;
  
    panelOne2 = menu_a2.filter(".on");
    panelShow2 = $(panelOne2.attr("href"));
    panelShow2.show();
  
    menu_a2.click(function (x) {
      var currentA2 = $(this);
      var currentA2_panel = $(currentA2.attr("href"));
      x.preventDefault();
  
      panelOne2.removeClass("on");
      currentA2.addClass("on");
  
      panelShow2.hide();
      currentA2_panel.show();
  
      panelOne2 = currentA2;
      panelShow2 = currentA2_panel;
  
      currentA2.click(function () {
        currentA2_panel.children("ul").show();
      });
    });
  });

  
  //매인배너 
  let $bannerBox = $('.banner-section');
  let $bannerImgs = $('.banner-section ul img');
  let $bannerCnt = $('.bannerCnt p');
  let bannerWidth = 1024;
  let currentIndex = 0;
  let bannerCnt = $bannerImgs.length;
  let backGroundColor = $('.background');
  $bannerCnt.text(currentIndex+1 + '/' + bannerCnt);

  console.log('bannerCnt : ' + bannerCnt);

  function bannerSlide(){
    currentIndex++;

    $bannerBox.css('left', -(currentIndex * bannerWidth));
    $bannerCnt.text(currentIndex+1 + '/' + bannerCnt);
    backGroundColor.css('background-color','rgb(245,185,99)');

    console.log('currentIndex : ' + currentIndex);

    switch(currentIndex){

      case 1: 
        backGroundColor.css('background-color','rgb(255,91,82)');
        $bannerCnt.text(currentIndex+1 + '/' + bannerCnt);
        break;

      case 2: 
        backGroundColor.css('background-color','rgb(254,219,93)');
        $bannerCnt.text(currentIndex+1 + '/' + bannerCnt);
        currentIndex=-1;
        break;
     
    }

  }


  function startTimer() {
    timer = setInterval(bannerSlide, 3000);
  
  }
  
  function endTimer() {
    clearInterval(timer);
  
  }
  
//매인배너 영역에 마우스 호버 시에
//인터벌 초기화(멈춤)
$bannerBox.hover(endTimer, startTimer);
startTimer();


  











// //상품들 영역 화살표 좌우슬라이드
//   let $slideBox = $('.goods-contents ul');
//   let $slideImgs = $('.goods-contents ul img');
//   let slideWidth = 1051;
//   let currentIdx = 0;
//   let slideCnt = $slideImgs.length;
//   console.log('slideCnt : ' + slideCnt);
//   checkEnd()
  
//   $('.goods-right-button').stop().on('click', function () {
//       console.log('aa');
//       currentIdx++;
//       console.log('currentIdx : ' + currentIdx);
//       $slideBox.css('left', -(currentIdx * slideWidth));
//       $slideBox.css('transition', '0.5s ease');
//       checkEnd()
//       });
  
//   $('.goods-left-button').on('click', function () {
//     console.log('bbb');
//     currentIdx--;
//     console.log('currentIdx : ' + currentIdx);
//     $slideBox.css('left', -(currentIdx * slideWidth));
//     $slideBox.css('transition', '0.5s ease');
//     checkEnd()
//   });
  
//   function checkEnd() {
//     if (currentIdx <= 0) {
//       $('.goods-left-button').css('display', 'none');
//     } else {
//       $('.goods-left-button').css('display', 'block');
//     }
  
//     if (currentIdx==1) {
//       $('.goods-right-button').css('display', 'none');
//     } else {
//       $('.goods-right-button').css('display', 'block');
//     }
//   }










// 따끈따근 신상품 버튼 슬라이드 이동
let $slideBox2 = $('.recently-goods-contents ul');
let $slideImgs2 = $('.recently-goods-contents ul img');
let slideWidth2 = 1051;
let currentIdx2 = 0;
let slideCnt2 = $slideImgs2.length;
console.log('slideCnt : ' + slideCnt2);
checkEnd2()

$('.recently-right-button').stop().on('click', function () {
    console.log('aa');
    currentIdx2++;
    console.log('currentIdx : ' + currentIdx2);
    $slideBox2.css('left', -(currentIdx2 * slideWidth2));
    $slideBox2.css('transition', '0.5s ease');
    checkEnd2()
    });

$('.recently-left-button').on('click', function () {
  console.log('bbb');
  currentIdx2--;
  console.log('currentIdx : ' + currentIdx2);
  $slideBox2.css('left', -(currentIdx2 * slideWidth2));
  $slideBox2.css('transition', '0.5s ease');
  checkEnd2()
});

function checkEnd2() {
  if (currentIdx2 <= 0) {
    $('.recently-left-button').css('display', 'none');
  } else {
    $('.recently-left-button').css('display', 'block');
  }

  if (currentIdx2==1) {
    $('.recently-right-button').css('display', 'none');
  } else {
    $('.recently-right-button').css('display', 'block');
  }
}