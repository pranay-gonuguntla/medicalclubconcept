'use strict'



$("#emailbtn, #boardappbtn, #remindbtn").hover( function() {
    var $hover = $(this).attr('data-hover'); 
    $(this).css({ "background-color" : $hover }); 
}, function() {
    var $color = $(this).attr('data-color');  
    $(this).css({ "background-color" : $color });  
});

$("#emailbtn, #boardappbtn, #remindbtn").on("click", function(event) {
    $("#desclink").css("display", "block");
    var btnclicked = this.id;
    console.log(btnclicked);
    if (btnclicked == "emailbtn") {
        $(".linkbtm").slideUp("fast", function () {
        });
        $("#desclink").text("Press the button below to be in our email list!");
        $("#link").removeClass("disabled");
        $("#link").attr("href","https://docs.google.com/forms/d/e/1FAIpQLScvGbnkcH6PD4v9mWnQhCVrfMOsIYwsZxmiXyt-or-SrU-85g/viewform");
        $(".linkbtm").slideDown("fast", function () {
        });
    } else if (btnclicked == "remindbtn") {   
        $(".linkbtm").slideUp("fast", function () {
        });
        $("#link").addClass("disabled");
        $("#desclink").text("Press the button below to join/apply for our Remind! Make sure to use the code: uhsmed20");
        $(".linkbtm").slideDown("fast", function () {
        });
    } else if (btnclicked == "boardappbtn") {
        $(".linkbtm").slideUp("fast", function () {
        });
        $("#desclink").text("Press the button below to apply as a board member in the club!");
        $("#link").removeClass("disabled");
        $("#link").attr("href","https://docs.google.com/forms/d/e/1FAIpQLScXDT9zRqKpuBEYx6EvS7FYol0jlnzj5h2h_sfHA3aMRo-rVg/viewform");
        $(".linkbtm").slideDown("fast", function () {
        });
    }
});




// function link(y, z) {
//     $("a#link").attr("href",y);
//     $("p#desclink").text(z);
// }

// switch($("button#"+x)) {

//  case x="boardappbtn": 
//     link("boardappsss","#");
//     break;
//  case x="emaillistbtn": 
//     link("emails","#");
//     break;
    
//  case x="remindbtn": 
//     link("remindlinks","#");
//     break;
// }



// $("button.makeRed").on("click", function() {
//     $("h1").addClass("red");
// });

// $("button.makeSmaller").on("click", function() {

//     $("h1").addClass("smaller")


// });


// $("input").on("keypress", function(event){
//     $("h1").text(event.key);
// });
