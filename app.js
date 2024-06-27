const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var tl= gsap.timeline({paused:true})
tl.to("#full",{
    right:"0",
    duration:1.6,
    ease: "expo.out",
})
tl.from("#full h4" ,{
x:150
,duration:0.8,
stagger:0.2,
opacity:0,
})
tl.from("#full i",{
    opacity:0,
   
})
tl.pause()
document.getElementById("menu").addEventListener("click",()=>{
    var full = document.getElementById("full")
    tl.play()
    full.style.display="block"
})
document.getElementById("clo").addEventListener("click",()=>{
    tl.reverse()
    
})
    var main= document.querySelector(".main")
var cur = document.querySelector(".curp")
var sechome = document.querySelector(".overlay")
main.addEventListener("mousemove",(det)=>{
gsap.to(cur,{
    x:det.x+50+"px",
    y:det.y+50+"px",
    duration:0.3,
   ease: "bounce.out",

})
})
sechome.addEventListener("mouseenter",()=>{
    gsap.to(cur,{
        scale:3,
    })
})
sechome.addEventListener("mouseleave",()=>{
    gsap.to(cur,{
        scale:1,
    })
})
