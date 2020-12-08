$(document).ready(function () {
    $(".ui-loader").remove();
    
    if ($(window).width() < 768) {
        $('.cards-container').attr('id', "draggable");
        $('.features-cards').attr('id', "draggable-2");

        $( "#draggable" ).draggable({scrollSensitivity: 50,scrollSpeed: 250,opacity: 0.7,axis: "x", containment: '.overflow', scroll: true,cancelable:true});

        $( "#draggable-2" ).draggable({ scrollSensitivity: 50,scrollSpeed: 250,opacity: 0.7,axis: "x", containment: '.overflow', scroll: true,cancelable:true, 
    });    
    }

     $(".tab-contain").click(function(){
        var windwidth = $(window).width() / 2; 
        if(!$(this).hasClass("active-tab-name")){

            $(".tab-contain").removeClass("active-tab-name");
            $(this).addClass("active-tab-name");

            if($(this).hasClass("Basic")){
                $(".cards-container").css("left","0px");
            }

            if($(this).hasClass("Standard-Plus")){
                $(".cards-container").css("left",-windwidth + "px");
            }

            if($(this).hasClass("Premium")){
                $(".cards-container").css("left",-2*windwidth + "px");
            }
        }
    });

    var checkedCounter=0;
    var elec=false;
    var internet=false;
    var gas=false;
    $("#second-tap").click(function(){
        $("#basic").addClass("hidden-xs")
        $("#standard").addClass("hidden-xs")
        $("#premium").removeClass("hidden-xs")
         $(this).css("background-color", "#ffffff")
        $("#first-tap").css("background-color", "#f1f1f1")
        $("#third-tap").css("background-color", "#f1f1f1")
        $(this).css("z-index", "1001")
        $("#first-tap").css("z-index", "100")
        $("#third-tap").css("z-index", "100")
    });
    $("#first-tap").click(function(){
        $("#premium").addClass("hidden-xs")
        $("#standard").addClass("hidden-xs")
        $("#basic").removeClass("hidden-xs")
        $(this).css("background-color", "#ffffff")
        $("#second-tap").css("background-color", "#f1f1f1")
        $("#third-tap").css("background-color", "#f1f1f1")
         $(this).css("z-index", "1001")
         $("#second-tap").css("z-index", "100")
        $("#third-tap").css("z-index", "100")
    });
    $("#third-tap").click(function(){
        $("#basic").addClass("hidden-xs")
        $("#premium").addClass("hidden-xs")
        $("#standard").removeClass("hidden-xs")
        $(this).css("background-color", "#ffffff")
        $("#first-tap").css("background-color", "#f1f1f1")
        $("#second-tap").css("background-color", "#f1f1f1")
        $(this).css("z-index", "1001")
        $("#first-tap").css("z-index", "100")
        $("#second-tap").css("z-index", "100")
    });
    // checked inputs 
    
$(document).on('change', '#someSwitchOptionDefault', function() {
if(this.checked) {
    $(".pr1").show();
    $(".pr1-divider").show();
    $(".pr2").css("padding-top", "40px")
    checkedCounter--;
    elec=false;
    $(".material-switch .input-div > .label-2").removeClass("toggled");
}
else{ 
$(".pr1").hide();
$(".pr1-divider").hide();
$(".pr2").css("padding-top", "20px")
    $('#someSwitchOptionDefault-1').prop('checked', false); // Unchecks it
    checkedCounter++;
    elec=true;
     $(".pr2").hide();
       $(".pr2-divider").hide();
        checkedCounter++;
        gas=true;
        $(".material-switch .input-div > .label-2").addClass("toggled");
}
});
// replacing the button text based on the number of check buttons
$(document).on('change', '.material-switch', function() {
    if((elec == true && ( gas == true || internet == true)) || ( gas == true && ( elec == true || internet == true)) || (internet == true && ( elec == true || gas == true))   ) 
    {
         $(".card-footer .btn").replaceWith("<button class='btn card-btn'>Select Plan</button>");
      }
else{
     $(".card-footer .btn").replaceWith("<button class='btn card-btn'>Select bundle</button>");
 }
    });



$(document).on('change', '#someSwitchOptionDefault-1', function() {
if(this.checked) {
    $(".pr2").show();
    $(".pr2-divider").show();
    checkedCounter--;
    gas=false;
    
}
else{ 
$(".pr2").hide();
$(".pr2-divider").hide();
    checkedCounter++;
    gas=true;

}
});
$(document).on('change', '#someSwitchOptionDefault-2', function() {
if(this.checked) {
    $(".pr3").show();
    $(".pr2-divider").show();
    $(".second-link").show();
//    $(".shown").show(); 
    checkedCounter--;
    internet =false;
    $(".pr-gas").css("padding-bottom","0px");
}
else{ 
$(".pr3").hide();
$(".pr2-divider").hide();
$(".second-link").hide();
//$(".shown").hide();    
    checkedCounter++;
    internet=true;
    $(".pr-gas").css("padding-bottom","20px");
}
   
}); 
/////////// pragraph handilng ////////////////////
 if(gas == false && internet == false && elec==false){
           $('.desktop .pragraph-links').hide();
           $(".desktop .pdf-links").addClass("links-handling");
           $(".desktop .first-link").addClass("links-handling");
           $(".desktop .second-link").addClass("links-handling");
    }   
$(document).on('change', '.material-switch', function() {
    //Gas Off when elec off
    $("#someSwitchOptionDefault-1").on("click", function (e) {
    var checkbox = $('#someSwitchOptionDefault');
    if (checkbox.prop('checked')==false) {
        // do the confirmation thing here
        e.preventDefault();
        return false;
    }
});
     
//    if(elec == true ){
//        $('#someSwitchOptionDefault-1').attr('checked', false); // Unchecks it
//        gas==true;
//    }
//    else if(gas == true){ 
//         $('#someSwitchOptionDefault-1').attr('checked', true); 
//         gas==false;
//     }
     
    if(checkedCounter > 0){
        $(".plans-desktop .card-body").addClass("dcard-min-h");
    }
    else{ 
        $(".plans-desktop .card-body").removeClass("dcard-min-h")
     }
      
    //internet off Duel
    if(internet == true){
        $(".taps-container .tap h4").text('Duel Fuel');
        $(".taps-container #first-tap span").text('32% off electricity');
        $(".taps-container #second-tap-chang").text('42% off electricity');
        $(".taps-container #third-tap span").text('37% off electricity');
        $('.desktop .pragraph-links').hide();
    }
    else{ 
        $(".taps-container #first-tap h4").text('Basic speed nbn12');
        $(".taps-container #first-tap span").text('$45 p/mo');
        $(".taps-container #second-tap h4").text('Premium speed nbn100');
        $(".taps-container #second-tap span").text('$85 p/mo');
        $(".taps-container #third-tap h4").text('Standard speed nbn50');
        $(".taps-container #third-tap span").text('$55 p/mo');
        $('.desktop .pragraph-links').show();
     }
    //End internet off Duel
    
    //Gas Off Change span contnent
    if(gas == true && internet == false && elec==false){
        $('#second-tap #second-tap-chang').text('$75 p/mo');
    }
//    else if(gas == true && internet == false){ 
//        $('#second-tap #second-tap-chang').text('$85 p/mo');
//     }
    //End Gas Off Change span contnent
    
    //Buttons handling
    if(gas == true &&  internet == true){
        $(".temp-footer").show();
        $(".taps-container #first-tap h4").text('32% Pay on Time Electricity');
        $(".taps-container #second-tap h4").text('42% Pay on Time Electricity');
        $(".taps-container #third-tap h4").text('37% Pay on Time Electricity');
        $(".taps-container .tap span").hide();
        
    }
    else{ 
        $(".temp-footer").hide();
        $(".taps-container .tap span").show();
     }
    if(internet == true &&  gas == false){
        $(".pr2-divider").hide();
    }
    else{ 
        $(".pr2divider").show();
     }
    if(gas == true){
        $(".pr2-divider").hide();
    }
    else{ 
        $(".pr2-dividerr").show();
     }
    
     if(gas == true &&  internet == true && elec == true){
        $(".plans-desktop").hide();
        $(".plans-internet-header").hide();
         $(".pge-links-footer").hide();
        $(".desktop-taps").addClass("block");
         $(".taps-off").show();
         
        
    }
    else{ 
        $(".plans-desktop").show();
        $(".plans-internet-header").show();
        $(".pge-links-footer").show();
        $(".desktop-taps").removeClass("block");
        $(".taps-off").hide();
     }
     
       if(elec==true && gas==true && internet == false){
            $(".appended-1").append('<span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr1"><div class="pr-words col-xs-3"><span>Data</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/infinity.png" class="img-responsive" alt="infinity-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>Unlimited</p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr2"><div class="pr-words col-xs-3"><span>Speed</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/premium.png" class="img-responsive" alt="time-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>nbn<sub>TM</sub>12<sub>1</sub></p><p>8 Mbps downloads<sub>2</sub></p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr3"><div class="pr-words col-xs-3"><span>Use</span></div><!--pr-words --><div class="pr-img-icon col-xs-8"><span><img width="50px" src="assest/images/stacked-group-2.png" class="img-responsive" alt="Peersons-img" /></span><p class="correct-p"><strong>1-2 people</strong> at the same time</p><!--correct-p--><p class=""><i class="fa fa-check" aria-hidden="true"></i> Emails + Browsing</p></div><!--pr-img-icon --></div><!-- card-body-data-->');
         
            $(".appended-2").append('<span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr1"><div class="pr-words col-xs-3"><span>Data</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/infinity.png" class="img-responsive" alt="infinity-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>Unlimited</p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr2"><div class="pr-words col-xs-3"><span>Speed</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/premium.png" class="img-responsive" alt="time-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>nbn<sub>TM</sub>50<sub>1</sub></p><p>44 Mbps downloads<sub>2</sub></p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr3"><div class="pr-words col-xs-3"><span>Use</span></div><!--pr-words --><div class="pr-img-icon col-xs-8"><span><img width="100px" src="assest/images/stacked-group-3.png" class="img-responsive" alt="Peersons-img" /></span><p class="correct-p"><strong>3-4 people</strong> at the same time</p><!--correct-p--><p class=""><i class="fa fa-check" aria-hidden="true"></i> Emails + Browsing</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> Online Gaming</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> HD Musing Streaming</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> HD Video Streaming</p></div><!--pr-img-icon --></div><!-- card-body-data-->');

         $(".appended-3").append('<span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr1"><div class="pr-words col-xs-3"><span>Data</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/infinity.png" class="img-responsive" alt="infinity-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>Unlimited</p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr2"><div class="pr-words col-xs-3"><span>Speed</span></div><!--pr-words --><div class="pr-img-icon col-xs-3"><span><img src="assest/images/premium.png" class="img-responsive" alt="time-img" /></span></div><!--pr-img-icon --><div class="pr-pragraph col-xs-6"><p>nbn<sub>TM</sub>100<sub>1</sub></p><p>79 Mbps downloads<sub>2</sub></p></div><!--pr-pragraph --></div><!-- card-body-data--><span role="presentation" class="divider col-xs-12"></span><div class="card-body-pr pr3"><div class="pr-words col-xs-3"><span>Use</span></div><!--pr-words --><div class="pr-img-icon col-xs-8"><span><img width="120px" src="assest/images/stacked-group-4.png" class="img-responsive" alt="Peersons-img" /></span><p class="correct-p"><strong>4-5 people</strong> at the same time</p><!--correct-p--><p class=""><i class="fa fa-check" aria-hidden="true"></i> Emails + Browsing</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> Online Gaming</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> HD Musing Streaming</p><p class=""><i class="fa fa-check" aria-hidden="true"></i> Ultra HD/4K Streaming</p></div><!--pr-img-icon --></div><!-- card-body-data-->');
         
          // handling css style
         $(".plans-desktop .card-header").css("background-color","rgb(157,81,225,.9)");
         $(".internet-pragraph").hide();
         $('.internet-percent-w').hide();
         $('.desktop .pdf-links .first-link').hide();
         $('.desktop .pragraph-links').show();
         $(".desktop .pdf-links").removeClass("links-handling");
         $(".desktop .first-link").removeClass("links-handling");
         $(".desktop .second-link").removeClass("links-handling");
         $(".plans-desktop .card-body").addClass("internet-heigh");
         $(".taps-container #first-tap span").text('$50 p/mo');
         $(".taps-container #second-tap span").text('$90 p/mo');
         $(".taps-container #third-tap span").text('$60 p/mo');
         $(".plans-internet-header h4").text('SINGLE SAVER PLANS');
         $(".plans-desktop .card-body .internet-percent").empty();
        
        $(".plans-desktop .card-body .internet-percent").append('<span class="internet-percent">$90  <sub class="internet-sub internet-percent">p/mo</sub></span>');
         $( "#second-tap" ).click(function() {
             $(".plans-desktop .card-body .internet-percent").empty();
             $(".plans-desktop .card-body .internet-percent").append('<span class="internet-percent">$90  <sub class="internet-sub internet-percent">p/mo</sub></span>');
        });
          $( "#first-tap" ).click(function() {
             $(".plans-desktop .card-body .internet-percent").empty();
             $(".plans-desktop .card-body .internet-percent").append('<span class="internet-percent">$50  <sub class="internet-sub internet-percent">p/mo</sub></span>');
        });
          $( "#third-tap" ).click(function() {
             $(".plans-desktop .card-body .internet-percent").empty();
             $(".plans-desktop .card-body .internet-percent").append('<span class="internet-percent">$60  <sub class="internet-sub internet-percent">p/mo</sub></span>');
        });
      }
    else{
        $(".plans-desktop .card-header").css("background-color","rgb(56, 148, 255)");
        $(".plans-internet-header h4").text(' SUPER SAVER PLANS');
        $( ".appended" ).empty();
        $(".internet-pragraph").show();
        $('.internet-percent-w').show();
        $('.desktop .pdf-links .first-link').show();
        $('.desktop .pragraph-links').hide();
        $(".desktop .pdf-links").addClass("links-handling");
           $(".desktop .first-link").addClass("links-handling");
           $(".desktop .second-link").addClass("links-handling");
        $(".plans-desktop .card-body").removeClass("internet-heigh");
        $(".plans-desktop .card-body .internet-percent").empty();
        $(".plans-desktop .card-body .internet-percent").append('<span class="internet-percent">$85  <sub class="internet-sub internet-percent">p/mo</sub></span>');
    }
    
});
   
    $('.btn-fad').click(function() {
    $('.Electricity-modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.Electricity-modal').modal('show');
});
    $('.btn-fad-1').click(function() {
    $('.Gas-modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.Gas-modal').modal('show');
});
    $('.btn-fad-2').click(function() {
    $('.Internet-modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.Internet-modal').modal('show');
});
         $(".footer-icon").click(function(){
         $(".footer-icon .angle-rotate").toggleClass("down-footer"); 
        })
     $("#home-routers .fa-angle-down").click(function(){
         $("#home-routers .fa-angle-down").toggleClass("down-footer"); 
        })
    
    $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
function background(){
    var winwidth=$( window ).width();
if(winwidth <= 767) {
    $('.home-page-wrap img').attr('src','assest/images/mobile-internet-banner-mob-22-aug-v-1.jpg');
    $(".nav-btn-card #first-home-nav").text('NBN Plans');
    $(".nav-btn-card #second-home-nav").text('Features');
    $(".nav-btn-card #third-home-nav").text('Modems');
    $(".nav-btn-card #fourth-home-nav").text('Home Phone VOIP');
    $(".nav-btn-card #fifth-home-nav").text('Other Internet Options');
    $(".nav-btn-card #sex-home-nav").text('Help and support');
    $("#home-routers .ready-router-header h2").text('Modems');
    $("#home-routers .ready-router-header p").text('nbn™ ready modems are lorem ipsum dolor sit');
}
    else{
        $('.home-page-wrap img').attr('src','assest/images/internet-banner-22-aug-v-1.jpg');
        $(".nav-btn-card #first-home-nav").text('nbn™ Plans');
        $(".nav-btn-card #second-home-nav").text('Features');
        $(".nav-btn-card #third-home-nav").text('Modems');
        $(".nav-btn-card #fourth-home-nav").text('Home Phone');
        $(".nav-btn-card #fifth-home-nav").text('Other Internet');
        $(".nav-btn-card #sex-home-nav").text('Help and support');
        $("#home-routers .ready-router-header h2").text('nbn™ Ready Routers');
        $("#home-routers .ready-router-header p").text('Not all routers are made equal');
}  } 
$( window ).resize(function() { 
 background();
});
$( window ).ready(function() {
     background();

});
    
    
    //////////////////////////////////////////////////// Details JS //////////////////////////////////////////////////////////

    $('[data-toggle="datepicker"]').datepicker();

    $(".calendar-date").focus(function(){
        $(".blue").addClass("hidden");
        $(".not-blue").removeClass("hidden");
    })

    $(".calendar-date").blur(function(){
        $(".blue").removeClass("hidden");
        $(".not-blue").addClass("hidden");
    })
    
    $("#date").keydown(function(){
        $(".fa-circle-notch").removeClass("hidden");
        $(".fa-times").addClass("hidden"); 
        $(".fa-check").addClass("hidden");
    
        $("#date").css({
            border: "solid 1px rgba(74, 74, 0, 0.3)",
            color: "#4a4a4a",
        })
    })


    $(".field").keydown(function(){
        $(this).css({
            border: "solid 1px rgba(74, 74, 0, 0.3)",
            color: "#4a4a4a",
        })
    })


    $("#date").keyup(function(){
        if (validateEmail($("#date").val())) {
            $(".fa-circle-notch").addClass("hidden");
            $(".fa-times").addClass("hidden");
            $(".fa-check").removeClass("hidden");

            $("#date").css({
                border: "solid 1px rgba(74, 74, 0, 0.3)",
                colo: "#4a4a4a",
            })
        }

        else if($("#date").val() == ""){
         $(".fa-check").addClass("hidden");
         $(".fa-circle-notch").addClass("hidden");
         $(".fa-times").addClass("hidden");
        }

        else{
            $(".fa-times").removeClass("hidden");
            $(".fa-circle-notch").addClass("hidden");
            $(".fa-check").addClass("hidden");
            
            $("#date").css({
                border: "solid 1px #f05228",
            })
        }
    })
    
    $(".yes").click(function(){
        if($(this).hasClass("clicked")){
            $(this).removeClass("clicked");
            $(this).css("outline-color","transparent");
            $(this).css("background-color","white");
            $(this).css("border","solid 1px #c4c4c4");
            $(this).children().css("color"," #4a4a4a");
        }else{
            $(this).addClass("clicked");
            $(this).css("outline-color","transparent");
            $(this).css("background-color","rgba(56, 148, 255, 0.2)");
            $(this).css("border","solid 1px #3894ff");
            $(this).children().css("color"," #3894ff");

            $(".no").removeClass("clicked");
            $(".no").css("outline-color","transparent");
            $(".no").css("background-color","white");
            $(".no").css("border","solid 1px #c4c4c4");
            $(".no").children().css("color"," #4a4a4a");
        }
    })

    $(".no").click(function(){
        if($(this).hasClass("clicked")){
            $(this).removeClass("clicked");
            $(this).css("outline-color","transparent");
            $(this).css("background-color","white");
            $(this).css("border","solid 1px #c4c4c4");
            $(this).children().css("color"," #4a4a4a");
        }else{
            $(this).addClass("clicked");
            $(this).css("outline-color","transparent");
            $(this).css("background-color","rgba(56, 148, 255, 0.2)");
            $(this).css("border","solid 1px #3894ff");
            $(this).children().css("color"," #3894ff");

            $(".yes").removeClass("clicked");
            $(".yes").css("outline-color","transparent");
            $(".yes").css("background-color","white");
            $(".yes").css("border","solid 1px #c4c4c4");
            $(".yes").children().css("color"," #4a4a4a");
        }
    })

    $(".adsl-info").click(function(){
        $(this).toggleClass("feature-click");
        $(this).children(".modem-details").children(".layer").toggleClass("layer-click");
    })

    $(".calendar-date").focus(function(){
        $(this).parent().parent().next().next().children().removeClass("hidden");
        $(this).parent().parent().next().next().next().children().removeClass("hidden");
    })

    $(".calendar-date").blur(function(){
        $(this).parent().parent().next().next().children().addClass("hidden");
        $(this).parent().parent().next().next().next().children().addClass("hidden");
    })

    $(".ASAP").click(function(){
        $(this).toggleClass("feature-click");
         $(this).parent().next().toggleClass("hidden");
        $(this).toggleClass("layer-click");
    })

    $(".posts").click(function(){
        $(this).toggleClass("feature-click");
        $(".life-support").toggleClass("life-top");
        $(this).parent().next().toggleClass("hidden");
        $(this).toggleClass("layer-click");
    })

    $(".preloader").fadeOut(1500);

    $('.terms-details').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            $(".terms-confirmation").css("opacity","1");
            $(".container-check").append("<input type='checkbox' class='checkbox'>");
            document.getElementById("check").disabled = false;
            document.getElementById("check-2").disabled = false;

        }
    })

    $(".features-plan").click(function(){
        if($(this).hasClass("clicked")){
            $(this).children(".feature-det-prec").children(".down").css("transform","rotate(0deg)");

            if($(this).children(".feature-det-prec").children(".elec-a")){
                $(this).children(".feature-det-prec").children(".elec-a").removeClass("elec-arrow-down");
            } 
          
            if($(this).children(".feature-det-prec").children(".gas-a")){
                $(this).children(".feature-det-prec").children(".gas-a").removeClass("gas-btn-review");
            }

            if($(this).children(".feature-det-prec").children(".internet-a")){
                $(this).children(".feature-det-prec").children(".internet-a").removeClass("internet-down");
            }

            if($(this).children(".feature-det-prec").children(".home-a")){
                $(this).children(".feature-det-prec").children(".home-a").removeClass("Home-down");
            }

            $(this).removeClass("clicked");
        }else{
            $(this).children(".feature-det-prec").children(".down").css("transform","rotate(180deg)");

            if($(this).children(".feature-det-prec").children(".elec-a")){
                $(this).children(".feature-det-prec").children(".elec-a").addClass("elec-arrow-down");
            }
           
            if($(this).children(".feature-det-prec").children(".gas-a")){
                $(this).children(".feature-det-prec").children(".gas-a").addClass("gas-btn-review");
            }

            if($(this).children(".feature-det-prec").children(".internet-a")){
                $(this).children(".feature-det-prec").children(".internet-a").addClass("internet-down");
            }

            if($(this).children(".feature-det-prec").children(".home-a")){
                $(this).children(".feature-det-prec").children(".home-a").addClass("Home-down");
            }

            $(this).addClass("clicked");
        }
    })

    $(".payment-collabse").click(function(){
        if($(this).hasClass("clicked")){
            $(this).children(".payment-down").removeClass("payment-arrow");
            $(this).children(".payment-down").css("transform","rotate(0deg)"); 
            $(".payment-price-open").show();
            $(this).removeClass("clicked");
        }else{
            $(this).children(".payment-down").addClass("payment-arrow");
            $(this).children(".payment-down").css("transform","rotate(180deg)");
            $(".payment-price-open").hide();
            $(this).addClass("clicked");
        }
    }) 

    $(".calendar-date").click(function(){
       if(!$(this).val() == " ") {
            var val = $(this).val();
            var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
            var dtArray = val.match(rxDatePattern);
            var Ydate = dtArray[5];
            if(Ydate < 2000){
                $(this).parent().parent().next().children().removeClass("hidden"); 
                $(this).css("border","solid 1px #f05228"); 
            }else{
                $(this).parent().parent().next().children().addClass("hidden" );
                $(this).css("border","solid 1px #c4c4c4"); 
            }
          }
            
    })

});

function validateEmail(Email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(Email).match(pattern) ? true : false;
}

