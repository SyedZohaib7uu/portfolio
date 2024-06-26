var tl= gsap.timeline({paused:true})
tl.to("#full",{
    right:"0",
    duration:1.2
})
tl.from("#full h4" ,{
x:150
,duration:1.2,
stagger:0.4,
opacity:0
})
tl.from("#full i",{
    opacity:0
})
tl.pause()
document.getElementById("menu").addEventListener("click",()=>{
    var full = document.getElementById("full")
    tl.play()
    full.style.display="block"
})
document.getElementById("clo").addEventListener("click",()=>{
    tl.reverse()
    setTimeout(() => {
        
        full.style.display="none"
    }, 5000);
})
