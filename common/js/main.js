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