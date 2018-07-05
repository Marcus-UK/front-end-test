//Nav Functions
//-------------------------------------------------------------
function getNavHeight(){
    var $navHeight = $('nav').outerHeight();
    return $navHeight;
}

function headerHeight(){
    $header = $('header');
    $navBar =  getNavHeight();
    $($header).css('height', 'calc(100vh - '+$navBar+'px');
}

function addDropdownClass($navHolder){
    $($navHolder+' ul li:has(ul)').addClass('hasDropdown');
    $('.hasDropdown').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open').find('ul').slideToggle();
    });
}

function displayMobileNavNar(){
  $('.menu-icon').on('click',function(e){
      e.preventDefault();
      $('.mob-nav-holder').slideToggle("slow");
  });
}


function addTwitter($navHolder){
    $($navHolder+" ul.main-nav > li:last-child").after( '<li><a href="http://twitter.com"><i class="social-btn fa fa-twitter"></i></a></li>' );
}
//-------------------------------------------------------------

//slick function

function addTweetSlider(){
    $('.tweet-slide').slick({
        dots: false,
       infinite: true,
       speed: 1000,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplaySpeed: 4000,
       arrows: true,
       adaptiveHeight: true,
       appendArrows: $('.slider-arrows'),
       nextArrow: "<div class='slider-arrow next-arrow'></div>",
       prevArrow: "<div class='slider-arrow prev-arrow'></div>"
    });
}



//Doc Ready
//-------------------------------------------------------------
$( document ).ready(function() {
    console.log( "jQuery is setup and running!" );

    //headerHeight function
    headerHeight();
    //Nav
    addDropdownClass('nav');
    addTwitter('nav');
    displayMobileNavNar();
    addTweetSlider();
}); //END Doc Ready--------------------------------------------

//Window resize
//-------------------------------------------------------------
$( window ).resize(function() {
    if ($(window).width() > 1023) {
        $('.mob-nav-holder').slideUp();
    }
});
