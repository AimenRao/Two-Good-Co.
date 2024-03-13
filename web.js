const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoConAnimation(){
    let videocon = document.querySelector("#video-container");
let playbtn = document.querySelector("#play");

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    });
});
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    });
});
videocon.addEventListener("mousemove", function(dets) {
    var playbtnWidth = playbtn.offsetWidth;
    var playbtnHeight = playbtn.offsetHeight;

    gsap.to(playbtn, {
        left: dets.clientX - playbtnWidth / 2,
        top: dets.clientY - playbtnHeight / 2 
    });
});
}
videoConAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:30,
        opacity:0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.3
      })
      gsap.from("#page1 #video-container",{
        scale:0.7,
        opacity:0,
        delay: 0.7,
        duration: 0.5,
    
      })
}
loadingAnimation();
document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelectorAll(".child").forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        gsap.to("#cursor", {
            transform: `translate(-50%, -50%) scale(1)`
        });
    });
});

document.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("child")) {
        gsap.to("#cursor", {
            transform: `translate(-50%, -50%) scale(1)`
        });
    }
});

document.addEventListener("mouseout", function(event) {
    if (event.target.classList.contains("child")) {
        gsap.to("#cursor", {
            transform: `translate(-50%, -50%) scale(0)`
        });
    }
});


