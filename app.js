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
         }, 3500);
            }
            curee+=Math.floor(Math.random()*10)+1
            if(curee>100){
                curee=100
            }
            counterElement.textContent="Loading "+curee+"%"
            let delay = Math.floor(Math.random()*200)+50;
            setTimeout(update,delay)
        }
        update()
    }
    
    
    
    
    
    gsap.to(".counter",0.7,{
        delay:4,
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
        const main = document.querySelector(".main");
        const curp = document.querySelector(".curp");
        const homee = document.querySelector(".box-home");
    
        homee.addEventListener("mousemove", (event) => {
            // Set custom cursor position relative to the default cursor
            const offsetX = 20; // Adjust this value to set the horizontal offset
            const offsetY = 20; // Adjust this value to set the vertical offset
    
            gsap.to(curp, {
                x: event.clientX + offsetX,
                y: event.clientY + offsetY,
                display: "block"
            });
        });
    
        homee.addEventListener("mousemove", () => {
            gsap.to(curp, {
                scale: 6,
                mixBlendMode: "difference",
                backgroundColor: "#fff",
                display: "block"
            });
        });
    
        homee.addEventListener("mouseleave", () => {
            gsap.to(curp, {
                scale: 1,
                mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "none"
            });
        });

































        const about = document.querySelector("#about");
        const abco = document.querySelector(".ab-cor");
        const abf = document.querySelector(".ab-f");
        const abs = document.querySelector(".ab-s");
        const images = [
            "./pixlr-image-generator-d89ff724-184e-4a5e-ac3f-ab1b7642cca8.png",
            "sjv.png" // Replace with the path to the second image
        ];
        let currentImageIndex = 0;
        about.addEventListener("mousemove", (event) => {
            // Set custom cursor position relative to the default cursor
            const offsetX = 20; // Adjust this value to set the horizontal offset
            const offsetY = 20; // Adjust this value to set the vertical offset
    
            gsap.to(abco, {
                x: event.clientX + offsetX,
                y: event.clientY + offsetY,
                display: "block"
            });
        });
    about.addEventListener("mouseleave",()=>{
        gsap.to(abco, {
            scale: 0,
           
            display: "none"
        });
    })
        abf.addEventListener("mousemove", () => {
            gsap.to(abco, {
                scale: 6,
                mixBlendMode: "difference",
                backgroundColor: "#fff",
                display: "block"
            });
        });
    
        abf.addEventListener("mouseleave", () => {
            gsap.to(abco, {
                scale: 1,
                mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "block"
            });
        });
                var ihugss = document.getElementById("ihugss")


        ihugss.addEventListener("mousemove", () => {
            gsap.to(abco, {
                scale: 2,
              
                mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "block"
            });
            abco.style.fontSize=10+"px"
            abco.style.color="white"
            abco.style.paddingTop="20px"
            abco.style.paddingBottom="20px"
           abco.innerHTML="Click"
        });
    
        ihugss.addEventListener("mouseleave", () => {
            abco.style.padding=0+"px"
            abco.innerHTML=""
            gsap.to(abco, {
                backgroundImage: "none",
                scale: 1,
                padding:"1vw",
                // mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "block",

            });
        });


        ihugss.addEventListener("click", () => {
            // Switch to the next image
            currentImageIndex = (currentImageIndex + 1) % images.length;
            gsap.to(ihugss, {
                duration: 0.5, // Smooth transition duration
                opacity: 0,
                onComplete: () => {
                    ihugss.src = images[currentImageIndex];
                    gsap.to(ihugss, {
                        duration: 0.5,
                        opacity: 1,
                        ease:"power4.inOut",
                    });
                }
            });
        });
    
        const skillImage = document.getElementById("skillImage");
        const skht = document.getElementById("skht");
        const skcs = document.getElementById("skcs");
        const skjs = document.getElementById("skjs");
        const skfi = document.getElementById("skfi");
        const skbo = document.getElementById("skbo");
        const sksw = document.getElementById("sksw");
        const sklo = document.getElementById("sklo");
        const skgs = document.getElementById("skgs");
        
        skht.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/html.png"; // Change image source
        });
        
        skht.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });





        skcs.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/css.jpg"; // Change image source
        });
        
        skcs.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });






        skjs.addEventListener("mouseover", () => {
            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/js.png"; // Change image source
        });
        
        skjs.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });





        skgs.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/gsap.jpg"; // Change image source
        });
        
        skgs.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });
        sklo.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/loco.png"; // Change image source
        });
        
        sklo.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });
        sksw.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/swi.png"; // Change image source
        });
        
        sksw.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });
        skfi.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/fi.png"; // Change image source
        });
        


        skfi.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });


        skbo.addEventListener("mouseover", () => {

            gsap.to(skillImage, { opacity: 1, display: "block", duration: 0.5 }); // Fade in the image
            skillImage.src = "./images/bootstrap.png"; // Change image source
        });
        
        skbo.addEventListener("mouseleave", () => {
            gsap.to(skillImage, { opacity: 0, display: "none", duration: 0.5 }); // Fade out the image
        });



       
        
        




        var imgpro = document.querySelectorAll(".edcvg");

        function showImg(e) {
          for (let i = 0; i < imgpro.length; i++) {
            const x = e.clientX;
            const y = e.clientY;
            imgpro[i].style.transform = `translate(${x}px, -150px)`;
          }
        }
        
        document.querySelector(".projectpg").addEventListener("mousemove", showImg);
















        document.querySelector(".contactpg").addEventListener("mousemove", (event) => {
            // Set custom cursor position relative to the default cursor
            const offsetX = 20; // Adjust this value to set the horizontal offset
            const offsetY = 20; // Adjust this value to set the vertical offset
    
            gsap.to(".co-cor", {
                x: event.clientX + offsetX,
                y: event.clientY + offsetY,
                display: "block",
                scale:1

            });
        });
        document.querySelector(".contactpg").addEventListener("mouseleave",()=>{
        gsap.to(".co-cor", {
            scale: 0,
           
            display: "none"
        });
    })
        document.querySelector(".facecon").addEventListener("mousemove", () => {
            gsap.to(".co-cor", {
                scale: 15,
                mixBlendMode: "difference",
                backgroundColor: "#fff",
                display: "block"
            });
    
        })
        document.querySelector(".facecon").addEventListener("leave", () => {
            gsap.to(".co-cor", {
                scale: 1,
                mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "black"
            });
            });
        document.querySelector(".linkcon").addEventListener("mousemove", () => {
            gsap.to(".co-cor", {
                scale: 15,
                mixBlendMode: "difference",
                backgroundColor: "#fff",
                display: "block"
            });
            });
    
    
        document.querySelector(".linkcon").addEventListener("leave", () => {
            gsap.to(".co-cor", {
                scale: 1,
                mixBlendMode: "normal",
                backgroundColor: "#000",
                display: "black"
            });
    
        })


        document.addEventListener("mousemove", eyeball);

        function eyeball(event) {
            var eyes = document.querySelectorAll(".eye");
            eyes.forEach(function(eye) {
                let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
                let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
                let radian = Math.atan2(event.clientX - x, event.clientY - y);
                let rot = (radian * (180 / Math.PI) * -1) + 0;
                eye.style.transform = "rotate(" + rot+10 + "deg)";
            });
        }
        














        startLoader()
    