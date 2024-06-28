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



function startLoader(){
    let counterElement= document.querySelector(".counter")
    let curee=0
    function update(){
        if(curee===100){
            setTimeout(() => {
                document.querySelector(".overlay").style.display="none"
            }, 3000);
        }
        curee+=Math.floor(Math.random()*10)+1   
        if(curee>100){
            curee=100
        }
        counterElement.textContent=curee+" %"
        let delay = Math.floor(Math.random()*200)+50;
        setTimeout(update,delay)
    }
    update()
}




        startLoader()

gsap.to(".counter",1,{
    delay:6,
    opacity:0,
})
gsap.to(".bar",1.5,{
    delay:3.5,
    height:0,
    stagger:{
        amount:0.5
    },
    ease:"power4.inOut",
})
    
