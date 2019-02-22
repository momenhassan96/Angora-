$(function(){
    
    /*Add Class active*/
    
    $(".nav-item").click(function(){
        $(this).addClass("default").siblings().removeClass("default");
    })
  
    /*Cahnge Nav bar*/
    $(window).scroll(function(){
        if($(window).scrollTop()>10)
            {
                $(".arrow-down i").fadeOut(100);
                $(".nav-bar").addClass("fixed-nav");
                $(".navbar-toggler i").css("color","#282828");
            }
        else 
            {
                 $(".arrow-down i").fadeIn(100);
                 $(".nav-bar").removeClass("fixed-nav");
                 $(".navbar-toggler i").css("color","#fff");
            }
    })
    /*Scroll To Section*/
       $(".nav-item a").click(function(){
       $("body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top},1000)
    })
    

    /*scroll To next Section*/
    $(".arrow-down i").click(function(){
        $("body").animate({scrollTop:$(".about").offset().top-50},1000)
    });
    
 /*Progress Bar*/
                $(".progress-bar").each(function(){
                $(this).animate({width:$(this).attr("data-value")},2000,function(){
                $(this).text($(this).attr("data-value"))
                })
                }) 
            
               
    
    
        
  /*our projects style one*/
    $(".all").mouseenter(function(){
        $(".pro-content h5").animate({margin:"0"},1000)
    })
    
    $(".all").mouseleave(function(){
         $(".pro-content h5").animate({margin:"10"},1000)
    })
    
    
    /*first style*/
    
    $("#first-style").click(function(){
        $(".projects-style-two").fadeOut(1000);
        $(".projects-style-three").fadeOut(1000);
        $(".projects-style-four").fadeOut(1000);
        $(".projects-style-five").fadeOut(1000);
         $("#first-style .border").animate({width:"100%"},1000,function(){
         $(".border").fadeOut(1000,function(){
         $(".projects-style-one").fadeIn(1000);
         }) 
    })
    })
    
    $(".close").click(function(){
            $(".projects-style-one").fadeOut(1000); 
        })
    
       /*Second Style*/
      $("#second-style").click(function(){
          $(".projects-style-one").fadeOut(1000);
          $(".projects-style-three").fadeOut(1000);
          $(".projects-style-four").fadeOut(1000);
          $(".projects-style-five").fadeOut(1000);
          $("#second-style .border").animate({width:"100%"},1000,function(){
              $("#second-style .border").fadeOut(1000,function(){
                  $(".projects-style-two").fadeIn(1000);
              })
          })
      })
     $(".close").click(function(){
            $(".projects-style-two").fadeOut(1000); 
        })
    
    /*Slider*/
        $(".arrows .fa-angle-right").click(function(){
            $(".slider img:first-child").fadeOut(500,function(){
                $(".slider img:last-child").fadeIn(500)
            })
        })
     $(".arrows .fa-angle-left").click(function(){
            $(".slider img:last-child").fadeOut(500,function(){
                $(".slider img:first-child").fadeIn(500)
            })
        })
    
    /*Third style*/
    
      $("#third-style").click(function(){
          $(".projects-style-one").fadeOut(1000);
          $(".projects-style-two").fadeOut(1000);
          $(".projects-style-four").fadeOut(1000);
          $(".projects-style-five").fadeOut(1000);
          $("#third-style .border").animate({width:"100%"},1000,function(){
              $("#third-style .border").fadeOut(1000,function(){
                  $(".projects-style-three").fadeIn(1000);
              })
          })
      })
    
    $(".close").click(function(){
            $(".projects-style-three").fadeOut(1000); 
        })
    
    /*Fourth style*/
       $("#fourth-style").click(function(){
          $(".projects-style-one").fadeOut(1000);
          $(".projects-style-two").fadeOut(1000);
          $(".projects-style-four").fadeOut(1000);
           $(".projects-style-five").fadeOut(1000);
          $("#fourth-style .border").animate({width:"100%"},1000,function(){
              $("#fourth-style .border").fadeOut(1000,function(){
              $(".projects-style-four").fadeIn(1000);
              })
          })
      })
    
    $(".close").click(function(){
            $(".projects-style-four").fadeOut(1000); 
        })
    
    /*Fifth Style*/
    
       $("#fifth-style").click(function(){
          $(".projects-style-one").fadeOut(1000);
          $(".projects-style-two").fadeOut(1000);
          $(".projects-style-four").fadeOut(1000);
          $("#fifth-style .border").animate({width:"100%"},1000,function(){
              $("#fifth-style .border").fadeOut(1000,function(){
                  $(".projects-style-five").fadeIn(1000);
              })
          })
      })
    
    $(".close").click(function(){
            $(".projects-style-five").fadeOut(1000); 
        })

    /*Client Slider*/
     
    $(".client").click(function(){
         $(this).addClass("active").siblings().removeClass("active");
        if( $(this).attr("id")=="first")
           {
               $("#first-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
           }
        else if($(this).attr("id")=="second")
            {
                $("#second-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
            }
        else if($(this).attr("id")=="third")
            {
                $("#third-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
            }
         else if($(this).attr("id")=="fourth")
            {
                $("#fourth-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
            }
         else if($(this).attr("id")=="fifth")
            {
                $("#fifth-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
            }
         else 
            {
                $("#sixth-pragraph").addClass("selected").fadeIn(1000).siblings().removeClass("selected").fadeOut(1000)
            }
         
    })
            
    /*Counter*/
    $(window).scroll(function(){
        if($(window).scrollTop()>=$(".counter").offset().top-200)
            {
                $('.data').each(function(){
                $(this).prop('Counter',0).animate({
                Counter:$(this).attr("data-count")
                },{
                duration:5000,
                easing: 'swing',
                step: function(now){
                $(this).text(Math.ceil(now))
            }
        })
    })  
            }
    })
       
    /*Client Slider*/      
        $('.center').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 5,
            focusOnSelect:true,
        });
    /*Btn-top*/
    $(".btn-top").click(function(){
        $("body").animate({scrollTop:0},2000);
    })
});