"use strict";const burgerMenu=document.querySelector(".icon-menu");function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}burgerMenu.addEventListener("click",(e=>{burgerMenu.classList.toggle("active"),document.querySelector(".menu").classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector("body").classList.toggle("lock")})),ibg(),window.onload=function(){const e=document.querySelector(".parallax");if(e){const t=document.querySelector(".content"),n=document.querySelector(".images-parallax__clouds"),l=document.querySelector(".images-parallax__mountains"),o=document.querySelector(".images-parallax__human"),r=document.querySelector(".main-parallax"),s=40,c=20,a=10,i=.05;let u=0,m=0,d=0,g=0;function y(){u+=(d-u)*i,m+=(g-m)*i,n.style.cssText=`transform: translate(${u/s}%,${m/s}%);`,l.style.cssText=`transform: translate(${u/c}%,${m/c}%);`,o.style.cssText=`transform: translate(${u/a}%,${m/a}%);`,requestAnimationFrame(y)}y(),e.addEventListener("mousemove",(function(t){const n=e.offsetWidth,l=e.offsetHeight,o=t.pageX-n/2,r=t.pageY-l/2;d=o/n*100,g=r/l*100}));let b=[];for(let q=0;q<1;q+=.001)b.push(q);function f(e){t.style.cssText=`transform: translate(0%,-${e/9}%);`,l.parentElement.style.cssText=`transform: translate(0%,-${e/.75}%);`,o.parentElement.style.cssText=`transform: translate(0%,-${e/.8}%);`,r.style.cssText=`opacity:${1-e/80};`}new IntersectionObserver((function(t,n){f(window.pageYOffset/e.offsetHeight*100)}),{threshold:b}).observe(document.querySelector(".parallax"))}};const navbar=document.querySelector(".navbar-parallax__list"),itemsElements=document.querySelectorAll(".list-navbar__item"),linksElements=document.querySelectorAll(".list-navbar__link"),pageBlocks=document.querySelectorAll(".content-block__sub-title"),scrollDown=document.querySelector(".main-parallax__scroll"),content=document.querySelector(".content");scrollDown.addEventListener("click",(e=>{content.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})})),navbar.addEventListener("click",(e=>{const t=e.target;console.log(t),t!=linksElements[1]&&t!=itemsElements[1]||pageBlocks[0].scrollIntoView({block:"center",inline:"nearest",behavior:"smooth"}),t!=linksElements[2]&&t!=itemsElements[2]||pageBlocks[1].scrollIntoView({block:"center",inline:"nearest",behavior:"smooth"}),t!=linksElements[3]&&t!=itemsElements[3]||pageBlocks[2].scrollIntoView({block:"center",inline:"nearest",behavior:"smooth"})}));