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

  
  let interval=3000;
  let $bannerBox = $('.banner-section');
  let $bannerImgs = $('.banner-section ul img');
  let bannerWidth = 1024;
  let currentIndex = 0;
  let bannerCnt = $bannerImgs.length;
  let backGroundColor = $('.background');

  console.log('bannerCnt : ' + bannerCnt);
  
  function bannerSlide(){
    console.log('bannerCnt : ' + currentIndex);

    $bannerBox.css('left', -(currentIndex * bannerWidth));
    currentIndex++;
    
    if(currentIndex==0 || currentIndex==1){
      backGroundColor.css('background-color','rgb(236,176,90)');
    }else if(currentIndex==2){
      backGroundColor.css('background-color','blue');

    }else if(currentIndex==3){
      currentIndex=0;
      backGroundColor.css('background-color','rgb(254,219,93)');

    }


  }
  function startTimer() {
    timer = setInterval(bannerSlide, interval);
  
  }
  
  function endTimer() {
    clearInterval(timer);
  
  }
  
$bannerBox.hover(endTimer, startTimer);
startTimer();


  












  let $slideBox = $('.goods-contents ul');
  let $slideImgs = $('.goods-contents ul img');
  let slideWidth = 1051;
  let currentIdx = 0;
  let slideCnt = $slideImgs.length;
  console.log('slideCnt : ' + slideCnt);
  checkEnd()
  
  $('.goods-right-button').stop().on('click', function () {
      console.log('aa');
      currentIdx++;
      console.log('currentIdx : ' + currentIdx);
      $slideBox.css('left', -(currentIdx * slideWidth));
      $slideBox.css('transition', '0.5s ease');
      checkEnd()
      });
  
  $('.goods-left-button').on('click', function () {
    console.log('bbb');
    currentIdx--;
    console.log('currentIdx : ' + currentIdx);
    $slideBox.css('left', -(currentIdx * slideWidth));
    $slideBox.css('transition', '0.5s ease');
    checkEnd()
  });
  
  function checkEnd() {
    if (currentIdx <= 0) {
      $('.goods-left-button').css('display', 'none');
    } else {
      $('.goods-left-button').css('display', 'block');
    }
  
    if (currentIdx==1) {
      $('.goods-right-button').css('display', 'none');
    } else {
      $('.goods-right-button').css('display', 'block');
    }
  }










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