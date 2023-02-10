let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;

window.addEventListener("resize", function() {
  let currentWidth = window.innerWidth;
  let currentHeight = window.innerHeight;

  if (previousWidth !== currentWidth || previousHeight !== currentHeight) {
    border.style.display="none";
    previousWidth = currentWidth;
    previousHeight = currentHeight;
  }
});
const showNum=document.querySelector(".childCardNum");

const nameStyle=document.querySelector(".nameStyle")
const typedNum=document.querySelector(".typedNum");
 const rotate=document.querySelector(".cvvInput");
const atmFront=document.querySelector(".atmFront");
const atmBack=document.querySelector(".atmBack");
const select=document.querySelectorAll("select");
const disable=document.querySelectorAll(".disable");
const border=document.querySelector(".border");
const expireStyle=document.querySelector(".expireStyle");
typedNum.addEventListener("click",(e)=>{
 borderAnimate(showNum);
  // console.log(border.offsetHeight)
  //  console.log(showNum.offsetHeight)
  })
typedNum.addEventListener("input",()=>{
  typedNum.addEventListener("keypress",(e)=>{
      if(typedNum.value>9999999999999999){
 e.preventDefault();}
  })
 
   
if(typedNum.value<=9999){
 showNum.firstElementChild.value=typedNum.value;
}
  
 if(typedNum.value<=99999999){
    let string=typedNum.value.slice(4);

    showNum.children[1].value=string;
 }
   if(typedNum.value<=999999999999){
     let string=typedNum.value.slice(8);
     
  showNum.children[2].value=string;
 }
  if(typedNum.value<=9999999999999999){
     let string=typedNum.value.slice(12);
  showNum.children[3].value=string;
 }

})
const cardHolder=document.querySelector(".typedHolder");
const showName=document.querySelector(".fullNameInput");
cardHolder.addEventListener("click",()=>{
  
 borderAnimate(nameStyle);
})
cardHolder.addEventListener("input",()=>{
  showName.value=cardHolder.value;
})
const month=document.querySelector("#months");
const showDate=document.querySelectorAll(".expireInput");
month.addEventListener("click",()=>{
  showDate[0].value=month.value+" /";
  borderAnimate(expireStyle);
})
const year=document.querySelector("#years");
year.addEventListener("click",()=>{
  showDate[1].value=year.value.slice(2);
   borderAnimate(expireStyle);
})


const body=document.body;
const showCvv=document.querySelector(".backCvv");
body.addEventListener("click",(e)=>{
  if(e.target===select[0]){
    disable[0].setAttribute("disabled","");

  }
   if(e.target===select[1]){
    disable[1].setAttribute("disabled","");

  }
 if(e.target===rotate){
    rotate.addEventListener("keypress",(e)=>{
      if(rotate.value>999){
 e.preventDefault();}
  })
       rotate.addEventListener("input",(e)=>{
      showCvv.value=rotate.value;
         disable[0].removeAttribute("disabled","");
  })
 atmBack.classList.add("onBack");
  atmFront.classList.add("onfront");}
  else{ atmBack.classList.remove("onBack");
  atmFront.classList.remove("onfront");}
})

select[0].addEventListener("click",()=>{
  console.log(disable[0]);
})
function borderAnimate(element){
   border.style.display="inherit";
  let style=getComputedStyle(element);
 console.log(style)
  border.style.width=style.width;
  border.style.height=style.height;
 border.style.top=(style.top);
   border.style.left=(style.left);
}
