
let $all = $(".all");
let $inputs = $(".term");
let buttons = document.querySelector('.button');
let cartgoods = document.querySelectorAll('.cart-goods');

$all.on('click', function(){
    if($(this).is(":checked")){
        $inputs.prop('checked', true);
    }else{
        $inputs.prop('checked', false);
    }
});

$inputs.on('click', function(){
    if(!$(this).is(":checked")){
        $all.prop('checked', false);
    }
    if($inputs.filter(":checked").length === cartgoods.length){
        $all.prop('checked', true);
    }
});

buttons.addEventListener('click', function(){
    let checkedInputs = document.querySelectorAll('.term:checked');
    
    if (checkedInputs.length > 0) {
        alert("상품이 삭제되었습니다.");
        
        checkedInputs.forEach(function(input){
            $(input).closest(".cart-goods").remove();
        });
        $all.prop('checked', false);
    } else {
        alert("선택된 상품이 없습니다.");
    }
});
// 주문하기 마우스 오버,아웃 이벤트
let productorders=document.querySelector('.product-order span');

productorders.addEventListener('mouseover',function(){
	productorders.style.color="white";
	productorders.style.backgroundColor="rgba(94,190,231)";
})

productorders.addEventListener('mouseout',function(){
	productorders.style.color="rgba(94,190,231)";
	productorders.style.backgroundColor="white";
})

//  주문하기 클릭시 주문하기 데이터가 사라지고 장바구니가 비어있다는 웹으로 이동
productorders.addEventListener('click',function(){
    if (cartgoods.length >0) {
        cartgoods.forEach(function (cartgoods){
            cartgoods.remove();
        });
        alert("상품주문완료");
        $('.product-order span').css('display','none');
        window.location.href="/product/html/product_cart.html";
    }
});




// 수량 클릭시 변화하는 함수 

let increaseEl=document.querySelectorAll('.increase');
let decreaseEl=document.querySelectorAll('.decrease');
let numbers=document.querySelectorAll('.count');

let counts=Array.from({length : numbers.length},()=>0);

function update(){
    numbers.forEach((count, index) => {
            count.textContent = counts[index];
        });
}

increaseEl.forEach((button,index)=>{
    button.addEventListener('click',function(){
        counts[index]++;
        update();
    })
})

decreaseEl.forEach((button, index) => {
        button.addEventListener('click', function () {
            // 수량이 0보다 큰 경우에만 감소시킵니다.
            if (counts[index] > 0) {
                counts[index]--;
                update(); // 수량을 화면에 업데이트합니다.
            }
        });
    });


