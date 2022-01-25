// slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
    breakpoints: {
        570: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
            slidesPerView:3
        }

    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    }
})
// counter
document.addEventListener('DOMContentLoaded', () => {
    function counter (id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current  == end){
                clearInterval(timer);
            }
        }, step)
    }
    counter("counter1",0,4,5000);
    counter("counter2",100,64,5000);
    counter("counter3",0,17,5000);
});
// btn Scrol;
let btn__Scroll = document.getElementById('btn__Scroll');
window.onscroll = function (){
    ScrollBtn();
}
function ScrollBtn (){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        btn__Scroll.style.right = `20px`;
        btn__Scroll.style.transition =  `0.5s`;
    }else{
        btn__Scroll.style.right = `-50%`;
        btn__Scroll.style.transition =  `0.5s`;
    }
}
// btn scrollClick
btn__Scroll.onclick = ClickBtn;
function ClickBtn (e){
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('Sticky', scrollY > 10);
});
// hamburger nav
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', HamburgerClick);
function HamburgerClick (){
    let nav = document.querySelector('nav');
    nav.classList.toggle("showNav");
    hamburger.classList.toggle('HamburgerRotate');
}
// not function alert
let notFunctionBtn = document.getElementsByClassName('notFunction');
for(let i = 0; i < notFunctionBtn.length; i++){
    notFunctionBtn[i].addEventListener('click', FuntionNotBtn);
}
function FuntionNotBtn(){
    window.alert("Maaf, Tombil ini masih belum berfungsi");
}
// active click li
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    })
});
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, 
});