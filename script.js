//***************************
//© Copyright Hayden Coe 2020
//***************************

var window_height;
var header_height;
var doc_height;
var posTop_s1;
var posBottom_s1;
var posTop_s2;
var posBottom_s2;
var posTop_s3;
var posBottom_s3;
var posTop_s4;
var posBottom_s4;
var posTop_s5;
var posBottom_s5;

var height_s1;
var height_s2;
var height_s3;
var height_s4;
var height_s5;
var h_h;


var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;

var previousScroll = 0;

var font_height;
var spacer_height;
var new_height;

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function() {


    getValues();

    console.log("pt1 " + posTop_s1);
    console.log(height_s1)
    console.log(posBottom_s1);

    console.log("pt2 " + posTop_s2);
    console.log(height_s2)
    console.log(posBottom_s2);

    console.log("pt3 " + posTop_s3);
    console.log(height_s3)
    console.log(posBottom_s3);

    console.log("pt4 " + posTop_s4);
    console.log(height_s4)
    console.log(posBottom_s4);

    console.log("pt5 " + posTop_s5);
    console.log(height_s5)
    console.log(posBottom_s5);


    h_h = window_height / 2;
    console.log("half height: " + h_h);



});




$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);

    //    ***************************************DOWN***********************************************************


    if (scroll > previousScroll) // Scrolling down

    {



        //*****************2019*******************************
        if (scroll > (posTop_s2 - h_h) && (scroll < (posBottom_s2 - h_h))) {

            console.log("2019 space down");


            if (flag1 == false) {
                console.log("flag1 2019 d");

                $("#spacer").height(new_height);


                $("#header1").animate({
                    opacity: '0.5',
                    fontSize: "2vw"

                }, 200);



                $("#header2").animate({

                    opacity: '1',
                    fontSize: "6vw"

                }, 200);


                document.getElementById("header3").style.fontSize = "2vw";
                document.getElementById("header3").style.display = "block";

                flag1 = true;
            } // End of flag1 


        } // End of scroll



        //*****************2018*******************************

        if (scroll > (posTop_s3 - h_h) && (scroll < (posBottom_s3 - h_h))) {

            console.log("2018 space down");

            if (flag2 == false) {
                console.log("flag2 2018 d");

                document.getElementById("header1").style.display = "none";

                $("#header2").animate({


                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                $("#header3").animate({

                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header4").style.fontSize = "2vw";
                document.getElementById("header4").style.display = "block";


                flag2 = true;

            } // End of flag2 


        } // End of scroll 2018



        //*****************2017*******************************      
        if (scroll > (posTop_s4 - h_h) && (scroll < (posBottom_s4 - h_h))) {


            console.log("2017 space down");

            if (flag3 == false) {
                console.log("flag3 2017");

                $("#header3").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                $("#header4").animate({

                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header2").style.display = "none";

                document.getElementById("header5").style.fontSize = "2vw";
                document.getElementById("header5").style.display = "block";


                flag3 = true;

            } // End of flag3

        } // End of scroll 2017



        //*****************2016*******************************
        if (scroll > (posTop_s5 - h_h) && (scroll < (posBottom_s5 - h_h))) {

            console.log("2016 space down");

            if (flag4 == false) {
                console.log("flag4 2016 d");

                $("#header4").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });



                $("#header5").animate({

                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header3").style.display = "none";

                flag4 = true;
            }


        }


    }
    //    *************************************** UP ************************************************************************************************************
    else // Scolling up.
    {
        console.log('up');



        if (scroll < posTop_s1) {



            $("#header1").animate({
                opacity: '1',
                fontSize: "6vw"

            }, {
                duration: 200,
                queue: false
            });



            $("#header2").animate({

                opacity: '0.5',
                fontSize: "2vw"

            }, {
                duration: 200,
                queue: false
            });



        }


        //*****************2020*******************************

        if (scroll < (posTop_s2 - h_h)) {

            console.log("2020 space up");

            if (flag1 == true) {


                $("#header1").animate({
                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });



                $("#header2").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("spacer").style.height = "40vh";

                document.getElementById("header3").style.display = "none";

                //         document.getElementById("header1").innerHTML = "2019";

                flag1 = false;
            }




        }



        //*****************2019*******************************
        if (scroll > (posTop_s2 - h_h) && scroll < (posBottom_s2 - h_h)) {

            console.log("2019 space up");


            if (flag2 == true) {

                $("#header2").animate({
                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });



                $("#header3").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header4").style.display = "none";

                document.getElementById("header1").style.fontSize = "2vw";
                document.getElementById("header1").style.display = "block";

                flag2 = false;
            }



        }


        //*****************2018*******************************

        if (scroll > (posTop_s3 - h_h) && scroll < (posBottom_s3 - h_h)) {


            console.log("2018 space up");


            if (flag3 == true) {

                $("#header3").animate({
                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });



                $("#header4").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header5").style.display = "none";

                document.getElementById("header2").style.fontSize = "2vw";
                document.getElementById("header2").style.display = "block";
                //         document.getElementById("header1").innerHTML = "2019";

                flag3 = false;
            }



        }


        //*****************2017*******************************

        if (scroll > (posTop_s4 - h_h) && scroll < (posBottom_s4 - h_h)) {

            console.log("2017 space up");


            if (flag4 == true) {


                $("#header4").animate({

                    opacity: '1',
                    fontSize: "6vw"

                }, {
                    duration: 200,
                    queue: false
                });



                $("#header5").animate({

                    opacity: '0.5',
                    fontSize: "2vw"

                }, {
                    duration: 200,
                    queue: false
                });


                document.getElementById("header3").style.display = "block";

                flag4 = false;
            }


        }


    } // End of else.

    previousScroll = scroll;



}); // End of scroll function.

function getValues() {
    window_height = $(window).height();
    doc_height = $(document).height();
    header_height = $('header').height();

    // Get heights 
    height_s1 = $('#s1').height();
    height_s2 = $('#s2').height();
    height_s3 = $('#s3').height();
    height_s4 = $('#s4').height();
    height_s5 = $('#s5').height();

    // Get top position
    posTop_s1 = header_height;
    posTop_s2 = posTop_s1 + height_s1;

    posTop_s3 = posTop_s2 + height_s2;

    posTop_s4 = posTop_s3 + height_s3;

    posTop_s5 = posTop_s4 + height_s4;


    // Get bottom position
    posBottom_s1 = posTop_s1 + height_s1;

    posBottom_s2 = posTop_s2 + height_s2;

    posBottom_s3 = posTop_s3 + height_s3;

    posBottom_s4 = posTop_s4 + height_s4;

    posBottom_s5 = posTop_s5 + height_s5;


    //   posBottom_s6 = doc_height;

    spacer_height = $('#spacer').height();
    console.log("spacer_height: " + spacer_height);

    font_height = $('#header2').height();
    console.log("font_height: " + font_height);

    new_height = spacer_height - font_height;
    console.log("new_height: " + new_height);


}


var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        getValues();
    }
}