var tl=gsap.timeline();

tl.to(".loader",{
   y:-1200,
    duration:1,
   
    // scaleY:0, 
   
 })
 

tl.from(".nav-end img",{
    height:0,
    duration:1,
    delay:.5


})
tl.from(".page-1 nav",{
    // y:100,
    opacity:0,
    duration:1
})
tl.from(".page-1 nav h3",{
    // y:100,
    // opacity:0,
    duration:1,
    scale:0,
    rotate:360
})
tl.from(".nav-end h3",{
  duration:.5,
  fontWeight:100,
    letterSpacing: .4,
    repeat:-1,
    yoyo:true
})
tl.from(".left-text h1 ",{
    y:-100,
    duration:.5,
    stagger:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".left-text h1",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        // start:"680%",
        scrub:4
    }
})

tl.from(".right-img img",{
    scale:2,
    duration:.5,
    stagger:.5,
    opacity:0,
    scrollTrigger:{
        trigger:".right-img img",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        // start:"680%",
        scrub:2
    }
})
tl.from(".right-img h4 ",{
   
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".right-img h4",
        scroller:"body",
        // markers:true,
        // end:"top 50%",
        start:"top -20%",
        scrub:2
    }
})
tl.from(".page-2 img ",{
    x:-300,
    duration:.8,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".page-2 img",
        scroller:"body",
        // markers:true,
        end:"top 50%",
        start:"top 70%",
        scrub:2,


    }
},"a")
tl.from(".page-2 .right-side ",{
    x:300,
    duration:.8,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".page-2 .right-side",
        scroller:"body",
        // markers:true,
        end:"top 50%",
        start:"top 70%",
        scrub:2,

    }

},"a")

tl.from(".page-3 #page-3img",{
    opacity:0,
    duration:.5,
    y:-100,
    scrollTrigger:{
        trigger:".page-3 #page-3img",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})
tl.from(".page-3 h1,.page-3 h4",{
    opacity:0,
    y:-100,
    duration:.5,
    stagger:.3,
    scrollTrigger:{
        trigger:".page-3 h1, .page-3 h4",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})
tl.from(".page-3 .box",{
    opacity:0,
   scale:0,
    duration:.5,
    stagger:.3,
    scrollTrigger:{
        trigger:".page-3 .box",
        scroller:"body",
        end:"top 60%",
        start:"top 80%",
        scrub:2,
    }
})
tl.from(".part-1 .l-side",{
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".part-1 .l-side",
        scroller:"body",
        end:"top 30%",
        start:"top 40%",
        scrub:2,
    }

    

})
tl.from(".part-1 .r-side",{
    y:100,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:".part-1 .r-side",
        scroller:"body",
        end:"top 30%",
        start:"top 50%",
        scrub:2,
    }
})
tl.to(".moon-img h1:nth-child(1)",{
    x:910,
    fontWeight:1,
    fontStyle:"italic",
    opacity:1,
    rotate:360,
    color:"#fff",
    stagger:.4,
    fontSize:60,
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(1)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})
tl.to(".moon-img h1:nth-child(2)",{
    x:-900,
    opacity:1,
    rotate:-360,
    fontWeight:1,
    fontSize:60,
    fontStyle:"italic",
    color:"#fff",
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(2)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})
tl.to(".moon-img h1:nth-child(3)",{
    x:910,
    fontWeight:1,
    opacity:1,
    color:"#fff",
    fontStyle:"italic",
    fontSize:60,
    stagger:.4,
    rotate:360,
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(3)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})

tl.to(".moon-img h1:nth-child(4)",{
    x:-900,
    opacity:1,
    fontWeight:1,
    fontSize:60,
    rotate:-360,
    fontStyle:"italic",
    color:"#fff",
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(4)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})

tl.to(".moon-img h1:nth-child(5)",{
    x:910,
    opacity:1,
    rotate:360,
    fontStyle:"italic",
    fontWeight:1,
    color:"#fff",
    fontSize:60,
    stagger:.4,
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(5)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})
tl.to(".moon-img h1:nth-child(6)",{
    x:-900,
    opacity:1,
    fontWeight:1,
    rotate:-360,
    color:"#fff",
    fontStyle:"italic",
    fontSize:60,
    scrollTrigger:{
        trigger:".moon-img h1:nth-child(6)",
        scroller:"body",
        end:"top 40%",
        start:"top 50%",
        scrub:2,
    }
})

tl.from(".part-2 .boxes:nth-child(odd)",{
    // scale:0,
    y:200,
    scale:0.80,
    opacity:0,
    duration:.1,
    scrollTrigger:{
        trigger:".part-2 .boxes:nth-child(odd)",
        scroller:"body",
        end:"top 80%",
        start:"top 120%",
        scrub:2,
    }
},"boex")
tl.from(".part-2 .boxes:nth-child(even)",{
    // scale:0,
    y:-200,
    scale:.80,
    opacity:0,
    duration:.1,
    scrollTrigger:{
        trigger:".part-2 .boxes:nth-child(even)",
        scroller:"body",
        end:"top 80%",
        start:"top 120%",
        scrub:2,
    }
},"boex")

tl.from(".left-center .first img  ",{
  x:-100,
  opacity:0,
  scrollTrigger:{
    trigger:".left-center .first img ",
    scroller:"body",
    end:"top 20%",
    start:"top 0%",
    scrub:2,
}
})
tl.from(".left-center .second #second,.three  ",{
//    rotate:360,
opacity:0,
    scale:0,
    scrollTrigger:{
      trigger:".left-center .second #second,.three ",
      scroller:"body",
      end:"top 60%",
      start:"top 0%",
      scrub:2,
  }
  })
   
  tl.from(".right-center .center-text",{
    opacity:0,
    color:"#000",
    scrollTrigger:{
        trigger:".left-center .second #second,.three ",
        scroller:"body",
        end:"top 60%",
        start:"top 0%",
        scrub:3,
    }
  })

  tl.from(".page-6 .img-boxie:nth-child(1) ",{
    x:500,
    scale:0,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(1)",
        scroller:"body",
        end:"top 80%",
        start:"top 120%",
        scrub:2,
    }

  })

  tl.from(".page-6 .img-boxie:nth-child(1) img ",{
    // x:500,
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(1) img",
        scroller:"body",
        end:"top 80%",
        start:"top 140%",
        scrub:2,
    }

  })
  
  tl.from(".page-6 .img-boxie:nth-child(2) ",{
    x:-500,
    scale:0,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(2)",
        scroller:"body",
        end:"top 80%",
        start:"top 100%",
        scrub:2,
    }

  })

  tl.from(".page-6 .img-boxie:nth-child(2) img ",{
    // x:500,
    scale:0,
    rotate:-360,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(2) img",
        scroller:"body",
        end:"top 80%",
        start:"top 100%",
        scrub:2,
    }

  })

  tl.from(".page-6 .img-boxie:nth-child(3) ",{
    x:500,
    scale:0,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(3)",
        scroller:"body",
        end:"top 80%",
        start:"top 90%",
        scrub:2,
    }

  })
  tl.from(".page-6 .img-boxie:nth-child(3) img ",{
    // x:500,
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(3) img",
        scroller:"body",
        end:"top 80%",
        start:"top 90%",
        scrub:2,
    }

  })

  tl.from(".page-6 .img-boxie:nth-child(4) ",{
    x:-500,
    scale:0,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(4)",
        scroller:"body",
        end:"top 80%",
        start:"top 90%",
        scrub:2,
    }

  })
  tl.from(".page-6 .img-boxie:nth-child(4) img ",{
    // x:500,
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:".page-6 .img-boxie:nth-child(4) img",
        scroller:"body",
        end:"top 80%",
        start:"top 90%",
        scrub:2,
    }

  })
  