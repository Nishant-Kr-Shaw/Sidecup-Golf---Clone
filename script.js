var crsr = document.querySelector("#cursor")
var cblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30 + "px";
    crsr.style.top = dets.y + "px";
    cblur.style.left = dets.x - 125 + "px";
    cblur.style.top = dets.y - 125 + "px";

})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top 11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

document.querySelector("#cards-container").addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
        scale: 0
    })
})

document.querySelector("#cards-container").addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
        scale: 1
    })
})

gsap.from("#about-us img, #info", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 80%",
        end: "top 100%", 
        scrub: 3,
    }
});

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:1
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 90,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        duration:2,
        scrub:1
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub:1
    }

})