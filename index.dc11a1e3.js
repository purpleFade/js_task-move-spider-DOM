const t=document.querySelector(".wall"),e=document.querySelector(".spider");t.addEventListener("click",f=>{let i=f.clientX-t.offsetLeft-t.clientLeft,o=f.clientY-t.offsetTop-t.clientTop,l=i-e.offsetWidth/2,c=o-e.offsetHeight/2;o<e.offsetHeight/2&&(c=0),i<e.offsetWidth/2&&(l=0),i>t.clientWidth-e.offsetWidth/2&&(l=t.clientWidth-e.offsetWidth),o>t.clientHeight-e.offsetHeight/2&&(c=t.clientHeight-e.offsetHeight),e.style.left=`${l}px`,e.style.top=`${c}px`});//# sourceMappingURL=index.dc11a1e3.js.map

//# sourceMappingURL=index.dc11a1e3.js.map
