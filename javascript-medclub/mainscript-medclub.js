'use strict'








$("#myNavbar a").on('click', function(event) {

    if (this.hash !== "") {
  
      event.preventDefault();
  
      var hash = this.hash;
  
      $('html, #scrollspy').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
  
        window.location.hash = hash;
      });
  
    } 
  
  });



$("#oppedu, #oppexp, #oppvolun, #oppmed").on("click", function(event) {
  var btnclicked = this.id;
  console.log(btnclicked);
  if (btnclicked == "oppedu") {
      $("#oppedu, #oppexp, #oppvolun, #oppmed").css("color","#17A2B8");
      $("li a").removeClass("active ");
      $("#oppedu").addClass("active ");
      $(this).css("color","#FFFFFF");
      $("#oppdesc p").text("Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Pharetra magna ac placerat vestibulum lectus mauris. Aliquam etiam erat velit scelerisque in dictum non consectetur. Facilisi etiam dignissim diam quis enim. At elementum eu facilisis sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet nulla facilisi morbi. Vitae congue eu consequat ac felis donec et odio pellentesque. Dolor morbi non arcu risus quis varius quam quisque. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Nisl nisi scelerisque eu ultrices vitae auctor. In ante metus dictum at tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus pulvinar elementum. Lacus luctus accumsan tortor posuere ac ut consequat.");
  } else if (btnclicked == "oppexp") {    
      $("#oppedu, #oppexp, #oppvolun, #oppmed").css("color","#17A2B8");
      $("li a").removeClass("active ");
      $("#oppexp").addClass("active ");
      $(this).css("color","#FFFFFF");
      $("#oppdesc p").text("Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Pharetra magna ac placerat vestibulum lectus mauris. Aliquam etiam erat velit scelerisque in dictum non consectetur. Facilisi etiam dignissim diam quis enim. At elementum eu facilisis sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet nulla facilisi morbi. Vitae congue eu consequat ac felis donec et odio pellentesque. Dolor morbi non arcu risus quis varius quam quisque. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Nisl nisi scelerisque eu ultrices vitae auctor. In ante metus dictum at tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus pulvinar elementum. Lacus luctus accumsan tortor posuere ac ut consequat.");
  } else if (btnclicked == "oppvolun") {
      $("#oppedu, #oppexp, #oppvolun, #oppmed").css("color","#17A2B8");
      $("li a").removeClass("active ");
      $("#oppvolun").addClass("active ");
      $(this).css("color","#FFFFFF");
      $("#oppdesc p").text("Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Pharetra magna ac placerat vestibulum lectus mauris. Aliquam etiam erat velit scelerisque in dictum non consectetur. Facilisi etiam dignissim diam quis enim. At elementum eu facilisis sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet nulla facilisi morbi. Vitae congue eu consequat ac felis donec et odio pellentesque. Dolor morbi non arcu risus quis varius quam quisque. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Nisl nisi scelerisque eu ultrices vitae auctor. In ante metus dictum at tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus pulvinar elementum. Lacus luctus accumsan tortor posuere ac ut consequat.");
  }  else if (btnclicked == "oppmed") {
      $("#oppedu, #oppexp, #oppvolun, #oppmed").css("color","#17A2B8");
      $("li a").removeClass("active ");
      $("#oppmed").addClass("active ");
      $(this).css("color","#FFFFFF");
      $("#oppdesc p").text("Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Pharetra magna ac placerat vestibulum lectus mauris. Aliquam etiam erat velit scelerisque in dictum non consectetur. Facilisi etiam dignissim diam quis enim. At elementum eu facilisis sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet nulla facilisi morbi. Vitae congue eu consequat ac felis donec et odio pellentesque. Dolor morbi non arcu risus quis varius quam quisque. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Nisl nisi scelerisque eu ultrices vitae auctor. In ante metus dictum at tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus pulvinar elementum. Lacus luctus accumsan tortor posuere ac ut consequat.");
  }
});

  
$("#oppedu, #oppexp, #oppvolun, #oppmed").hover( function(){

  if ($(this).hasClass("active") == true) {
    return;
  } else if ($(this).hasClass("active") == false){ 
    var $hover = $(this).attr('data-hover'); 
    $(this).css({ "color" : $hover }); 
  }
  }, function() {
  if ($(this).hasClass("active") == true) {
    return;
  } else if ($(this).hasClass("active") == false) { 
    var $color = $(this).attr('data-color'); 
    $(this).css({ "color" : $color }); 
  }

  }
);




// $("#emailbtn, #boardappbtn, #remindbtn").hover( function() {
//   var $hover = $(this).attr('data-hover'); 
//   $(this).css({ "color" : $hover }); 
// }, function() {
//   var $color = $(this).attr('data-color');  
//   $(this).css({ "color" : $color });  
// });







// typewriting animation 
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };