$(".goods-container").each(function () {
    var tabMenuDiv = $(this);
    var menu_a = tabMenuDiv.find("a");
    var panelDiv = tabMenuDiv.find("div.panel");
    panelDiv.hide();
  
    var panelOne;
    var panelShow;
  
    panelOne = menu_a.filter(".on");
    panelShow = $(panelOne.attr("href"));
    panelShow.show();
  
    menu_a.click(function (x) {
      var currentA = $(this);
      var currentA_panel = $(currentA.attr("href"));
      x.preventDefault();
  
      panelOne.removeClass("on");
      currentA.addClass("on");
  
      panelShow.hide();
      currentA_panel.show();
  
      panelOne = currentA;
      panelShow = currentA_panel;
  
      currentA.click(function () {
        currentA_panel.children("ul").show();
      });
    });
  });






















let $slideBox = $('.recently-goods-contents ul');
let $slideImgs = $('.recently-goods-contents ul img');
let slideWidth = 1051;
let currentIdx = 0;
let slideCnt = $slideImgs.length;
console.log('slideCnt : ' + slideCnt);
checkEnd()

$('.recently-right-button').stop().on('click', function () {
    console.log('aa');
    currentIdx++;
    console.log('currentIdx : ' + currentIdx);
    $slideBox.css('left', -(currentIdx * slideWidth));
    $slideBox.css('transition', '0.5s ease');
    checkEnd()
    });

$('.recently-left-button').on('click', function () {
  console.log('bbb');
  currentIdx--;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd()
});

function checkEnd() {
  if (currentIdx <= 0) {
    $('.recently-left-button').css('display', 'none');
  } else {
    $('.recently-left-button').css('display', 'block');
  }

  if (currentIdx==1) {
    $('.recently-right-button').css('display', 'none');
  } else {
    $('.recently-right-button').css('display', 'block');
  }
}