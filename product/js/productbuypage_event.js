
// 찜, 장바구니, 구매페이지 마우스 올릴시 이벤트 발생 js
const productinfos=document.querySelector('.product-info');
const childs=productinfos.children;

for(let i=0;i<childs.length;i++){
    const child=childs[i]; 

    child.addEventListener('mouseover',function(){
        this.style.color="white";
        this.style.backgroundColor="rgba(94,190,231)";
        });

    child.addEventListener('mouseout',function(){
        this.style.color="rgba(94,190,231)";
        this.style.backgroundColor="white";
        });
   }

//장바구니 클릭시 이벤트 발생 js
let carts=document.querySelector('.cart');
let modals=document.querySelector('.product-cart-movemodal');
carts.addEventListener('click',function(){
    modals.style.display='flex';
    setTimeout(function() {
        modals.style.display='none';
    }, 1000);
})


//수량 체크시 증가 감소 

let pluss=document.querySelector('.plus');
let minuss=document.querySelector('.minus');
let counts=0;
let numbers=document.querySelector('.number');

function updete(){
    numbers.textContent=counts;
}

pluss.addEventListener('click',function(){
    counts++;
    updete();
})
minuss.addEventListener('click',function(){
    if(counts>0){
        counts--;
        updete();
    }
})




// $('.deteil_more').click(
//     $('.product_deteil_info').css('overflow','none')
// );


let deteilmores=document.querySelector('.deteil_more');
let productdeteilinfo=document.querySelector('.product_deteil_area');
let count=0;
deteilmores.addEventListener('click',function(){
//    innerheight+='2000';
//    console.log(innerheight);
   productdeteilinfo.style.height='100%';
   count++;
   if(count==1){
    deteilmores.style.display="none";
   }
   
});