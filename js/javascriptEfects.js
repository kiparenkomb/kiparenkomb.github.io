$(document).ready(function(){

//    Silder----------------------->
    setInterval(slide)
    function slide(){
    
       $("#header-container1").delay(4000).fadeOut()
       $("#header-container2").delay(4100).fadeIn()
//       $("#header-container2").delay(7000).fadeOut()
       $("#header-container3").delay(6000).fadeIn()
       $("#header-container3").delay(10000).fadeOut()
       $("#header-container1").delay(9000).fadeIn()
       
    }

   
    
//    Click menu element----------------------->
    
    $(".menu-con a").click(function(){
           $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"none"
       })
       $(this).css({
            color:"#00B6AE",
            fontSize:"1.2em",
//            borderBottom:"2px solid #00B6AE"
       })
       
   
    })
    
    //    MOUSEOVER------------------------------------------>
           $(".menu-con a").mouseenter(function(){
               
               $(this).css({
                       color: "#00B6AE",
                    fontSize:"1.2em"
               })
               
           })
           $(".menu-con a").mouseleave(function(){
               
               $(this).css({
                       color: "#fff",
                        fontSize:"1.0em"
               })
               
           })
           
         

//          -------------------------------------- 
    
    
    
       
//   HEDER EFECTS----------------------------------------------> 
    
    
     $(window).scroll(function(){
        
        if($("body").scrollTop()>$(".title").offset().top){
            $("#headerFade").fadeIn()
        }
        
        if($("body").scrollTop()<$(".title").offset().top){
            //            --------------------------------
          
             $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"0px solid #00B6AE"
            })
            
             
            
//          -------------------------------------- 
            $("#headerFade").fadeOut()
        }
    
    })
      
    

// ----Scroll EFECT----------------------->
    
   $(".a1").click(function(){
           $("body").animate({
               scrollTop: $("#about").offset().top
           },1000)
       }
   )    
    
      $(".a2").click(function(){
           $("body").animate({
               scrollTop: $("#skills-container").offset().top
           },1000)
       }
   )    
   
         $(".a3").click(function(){
           $("body").animate({
               scrollTop: $("#works").offset().top
           },1000)
       }
   )    
   
            $(".a4,.contact-me").click(function(){
           $("body").animate({
               scrollTop: $("#contact").offset().top
           },1000)
       }
   )    
   
   
//    Click UP----------------------->
    
    $("#up").click(function(){
        $("body").animate({
               scrollTop: $("#header-container").offset().top
           },1000)
    })

    
//// SCROLL DOWN---------------------------> 
    
    
    
    
//HeaderTitle-------------------------------------------------->  
    
  
    
    $(".title").css({
        top:"0%",
        opacity: "0"
    }).delay(1000).animate({
        top:"30%",
        opacity: "1"
    },1000)
    
    
    
    
    
   
//   ABOUT------------->
    
    
    
    
     $(".left").css({
                opacity:"0",
                marginLeft:"-20px"
            })
     
     if(screen.width<=970){
         $(".right").css({
                opacity:"0",
                marginLeft:"-30px"
            })
     }
    else{
     $(".right").css({
                opacity:"0",
                marginLeft:"30px"
            }) 
    }
    
        $(".center").css({
              opacity:"0"
            })
        
        
    $(window).scroll(function(){
        
        if($("body").scrollTop()>$("#header-container").offset().top+200){
            $("#up").fadeIn("slow")
        }
        
        if($("body").scrollTop()<$("#header-container").offset().top+200){
            $("#up").fadeOut("slow")
        }
    
        
        if($("body").scrollTop()>=$("#about").offset().top-200){
            
            
            
            
//            --------------------------------
          
             $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"0px solid #00B6AE"
            })
            
             $(".a1").css({
                 color:"#00B6AE",
            fontSize:"1.2em",
//            borderBottom:"4px solid #00B6AE"
             })
            
//          -------------------------------------- 
            $(".left").animate({
               opacity:"1",
                marginLeft:"0"
            },1000)
            
            $(".right").animate({
               opacity:"1",
               marginLeft:"0"
            },1000)
            
            $(".center").delay(10).animate({
               opacity:"1",
            },300)
            
          
            
        }

    })
    
    
//    CONTACTS MOUSE OVER------------------------------->
    
    
        $(".left-el").mouseover(function(){
       
         var ne=$(".left-el").find('img');
        
         ne.animate({
    },1000)
    
    })
    
    

// //  SKILLS--------------------------------------->
       
        
       
        
    
    $(".elemet-skill").css({
            opacity:"0"
        })
        
$(window).scroll(function(){
        
        if($("body").scrollTop()>=$("#skills-container").offset().top-200){
            
            
            //            --------------------------------
          
             $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"0px solid #00B6AE"
            })
            
             $(".a2").css({
                 color:"#00B6AE",
            fontSize:"1.2em",
//            borderBottom:"4px solid #00B6AE"
             })
            
//          -------------------------------------- 
            
            
            $("#elemet-skill1").delay().animate({
                
                opacity:"1"
            },500);
            $("#elemet-skill2").delay(200).animate({

                opacity:"1"
            },500);
            $("#elemet-skill3").delay(400).animate({

                opacity:"1"
            },500);
            $("#elemet-skill4").delay(800).animate({

                opacity:"1"
            },500);
            $("#elemet-skill5").delay(1000).animate({

                opacity:"1"
            },500);
            $("#elemet-skill6").delay(1200).animate({

                opacity:"1"
            },500);
            
           
        }        

})
        
    
// //  WORKS--------------------------------------->



$("#work1").css({
    position: "relative",
    opacity: "0",
    left: "-90px"
})
if(screen.width<=970){
    
    $("#work2").css({
    position: "relative",
    opacity: "0",
    left: "-90px"
})
}
    
    else{
$("#work2").css({
    position: "relative",
    opacity: "0",
    right: "-90px"
})
}
$("#work3").css({
    position: "relative",
    opacity: "0",
    left: "-90px"
})
$("#work4").css({
    position: "relative",
    opacity: "0",
    left: "-90px"
})


$(window).scroll(function(){
    
    if($("body").scrollTop()>=$("#works").offset().top-200){
        
        
        //            --------------------------------
          
             $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"0px solid #00B6AE"
            })
            
             $(".a3").css({
                 color:"#00B6AE",
            fontSize:"1.2em",
//            borderBottom:"4px solid #00B6AE"
             })
            
//          -------------------------------------- 
            
            $(".work").animate({
                opacity:"1",
                left:"0px",
                right:"0px"
            },1000);
        
      
    }
    
 
})


// //  CONTACT--------------------------------------->


$("#contact-title").css({
                opacity:"0",
                
            })


$(".block-left").css({
    opacity:"0"

})
$(".block-form").css({
    opacity:"0"

})

$(window).scroll(function(){
    
    if($("body").scrollTop()>=$("#contact").offset().top-400){
        
        //            --------------------------------
          
             $(".menu-con a").css({
            color:"#fff",
            fontSize:"1.0em",
//            borderBottom:"none"
            })
            
             $(".a4").css({
                 color:"#00B6AE",
            fontSize:"1.2em",
//            borderBottom:"4px solid #00B6AE"
             })
            
//          -------------------------------------- 
            

            $(".block-left,.block-form").animate({
             opacity:"1"
            
            },2000);
        $("#contact-title").css({
                opacity:"1",
                top:"50px"
            },500)
    }
 
})

    
// $(".work-txt a").click(function(){

//     $("#sorry").slideDown();
//     $("#sorryBlock").delay("500").fadeIn("slow");
//   $("body").css({
//       overflowY:"hidden"
//   });

// //    $("#sorryBlock span").click(function(){
// //           $("#sorryBlock").fadeOut("slow");
// //    $("#sorry").delay("500").slideUp("slow");
// //      
// //         $("body").delay("500").css({
// //      overflowY:"visible"
// //  })
// //})
    
//      $("#sorry").click(function(){
//            $("#sorryBlock").fadeOut("slow");
//     $("#sorry").delay("500").slideUp("slow");
      
//          $("body").delay("500").css({
//       overflowY:"visible"
//   })
// })
    
        
//     })
    



         
})