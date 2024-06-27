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
    x:det.x,
    y:det.y,
    duration:0.3,
    ease: "back.out(1.7)",
})
})
sechome.addEventListener("mouseenter",()=>{
    gsap.to(cur,{
        scale:2
    })
})
sechome.addEventListener("mouseleave",()=>{
    gsap.to(cur,{
        scale:1
    })
})
document.querySelectorAll('.di').forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.getElementById('marquee').classList.add('paused');
    });
    item.addEventListener('mouseleave', () => {
      document.getElementById('marquee').classList.remove('paused');
    });
  });