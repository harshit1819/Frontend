var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var count=0
btn.addEventListener("click",function(){
    if(count==0){
        bulb.style.backgroundColor="yellow"
        console.log("Clicked")
        count=1
    }
    else{
        bulb.style.backgroundColor="transparent"
        console.log("Again Clicked")
        count=0;
    }
})