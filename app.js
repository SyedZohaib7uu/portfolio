var tl= gsap.timeline({paused:true})
tl.to("#full",{
    right:"0",
    duration:0.8
})
tl.from("#full h4" ,{
x:150
,duration:0.8,
stagger:0.2,
opacity:0
})
tl.from("#full i",{
    opacity:0
})
tl.pause()
document.getElementById("menu").addEventListener("click",()=>{
    tl.play()
})
document.getElementById("clo").addEventListener("click",()=>{
    tl.reverse()
})