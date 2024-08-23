const text=document.querySelector('.fanci')
// console.log(text)
const stary=text.textContent;
text.textContent="";
const splitchar=stary.split("");
for(let i=0;i<splitchar.length;i++){
    text.innerHTML+="<span>"+splitchar[i]+"</span>"
}
let char=0;
let timer=setInterval(onTick,50)
function onTick(){
    const span=text.querySelectorAll("span")[char]
    // console.log(span)
    span.classList.add("fade")
    char++;
    if(char===splitchar.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer)
    timer=null;
}

var i=0;
  const texr=document.getElementById("he")
  console.log(texr)
function tyoei(){
    if(i<texr.length){
        document.getElementsByClassName("textran").innerHTML+=texr.charAt(i)
        // console.log(textran)
        i++;
        setTimeout(tyoei,50)
    }
}
tyoei();
