$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//parallax effect
$('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpeg', speed: 0.4,});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

var menuButton = $(".menu-button");
menuButton.on('click', function(){
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  // if ($(".navbar-bottom--visible").height() > ($(window).height()*0.8)) {
  //     $(".navbar-bottom--visible").height($(window).height()*0.8);
  //     $(".navbar-bottom--visible").style.height = "100vh";
  //   } 
});

var modalButton = $('[data-toggle=modal]');
var closeModalButton = $(".modal__close");
var mainPageButton = $(".gratitude__button");

modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);
//go to the main page button
mainPageButton.on('click', goToMainPage);

//to go to the main page
function goToMainPage(event){
  event.preventDefault();
  window.location.replace("index.html");
}

//to close the modal window when esc is pressed
$(".modal__overlay--visible").keydown(closeModalEsc);

  function openModal(){
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');

    // if ($(modalDialog).height() > ($(window).height()*0.8)) {
    //   $(modalDialog).height($(window).height()*0.8);
    //   $(modalDialog).style.height = "100vh";
    //   $(modalDialog).style.overflow = "hidden";
    //   console.log("I am here");
    // } 
  }

  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  //to close the modal window by pressing Esc
  function closeModalEsc(event){
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    if(event.which === 27){
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    } 
  }

  //Form validation
  $(".form").each(function() {
    $(this).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Your name must contain more than 2 characters",
      },
      email: {
        required: "We need your email to contact you",
        email: "The format: name@domain.com",
      },
      phone: {
        required: "Phone number is required in format: +7(777)777-77-77",
        minlength: "Please, enter a valid phone number",
      },
    }
  });
  })

  AOS.init();
                                        
});