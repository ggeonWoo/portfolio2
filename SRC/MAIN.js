'use strict'

// HEADER에 페이지 아래로 스크롤시 다크 스타일링으로 적용
const header=document.querySelector('.header');
const headerHeight= header.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    
    if(window.scrollY>headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

const home__container=document.querySelector('.home__container');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity=1-window.scrollY/homeHeight
});

const arrow=document.querySelector('.arrow-up')
document.addEventListener('scroll',()=>{
   if(window.scrollY>homeHeight/2){
    arrow.style.opacity=1
   }else{
    arrow.style.opacity=0
   }
})

const navbarMenu=document.querySelector('.header__menu');
const navbarToggle=document.querySelector('.header__toggle')
navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open')
})

navbarMenu.addEventListener('click',()=>{
    navbarMenu.classList.remove('open')
})


//프로젝트 필터링 관련 로직 처리

const categories =document.querySelector('.categories')
const projects=document.querySelectorAll('.project')
const projectsContainer=document.querySelector('.projects')
categories.addEventListener('click',(event)=>{
const filter= event.target.dataset.category;
if(filter==null){
    return;
}
handleActiveSelection(event.target)
filterContainer(filter)


});

function handleActiveSelection(target){
    //active 메뉴를 재설정
const active =document.querySelector('.category--selected')
active.classList.remove('category--selected');
target.classList.add('category--selected');

}

function filterContainer(filter){
    // 프로젝트 필터링
projectsContainer.classList.add('anim-out')
projects.forEach((project)=>{
    if(filter==='all'||filter===project.dataset.type){
        project.style.display='block';
    }else{
        project.style.display='none';
    }
    });
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out')
    },250)
}