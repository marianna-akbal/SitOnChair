document.addEventListener("DOMContentLoaded", function() {



  /* -------------- dropdown menu Firma ------------------- */

    // var firstMenuElement = document.querySelector('ul li');
    //
    // firstMenuElement.addEventListener('mouseover', function() {
    //     console.log("mouse over");
    //     var secondMenu = document.querySelector('.secondMenu');
    //     secondMenu.classList.remove('hidden');
    // });
    //
    // firstMenuElement.addEventListener('mouseout', function() {
    //     console.log("mouse leave");
    //     var secondMenu = document.querySelector('.secondMenu');
    //     secondMenu.classList.add('hidden');
    // });

    // var firstMenuElement = document.querySelector('ul li');
    //
    // firstMenuElement.addEventListener('mouseover', function() {
    // document.querySelector('.secondMenu').style.display="block";
    // });
    //
    // firstMenuElement.addEventListener('mouseout', function() {
    // document.querySelector('.secondMenu').style.display="none";
    // });



    /* -------------- END OF dropdown menu Firma ------------------- */


    /* -------------- ukrywanie apli na zdjeciu ------------------- */
    var partTwoPhoto1 = document.querySelector('.partTwoPhoto1');
    var rectanglePhoto1 = document.querySelector('.rectanglePhoto1');

    partTwoPhoto1.addEventListener('mouseover', function() {
        rectanglePhoto1.classList.add("hidden");
    });

    partTwoPhoto1.addEventListener('mouseout', function() {
        rectanglePhoto1.classList.remove("hidden");
    });

    var partTwoPhoto2 = document.querySelector('.partTwoPhoto2');
    var rectanglePhoto2 = document.querySelector('.rectanglePhoto2');

    partTwoPhoto2.addEventListener('mouseover', function() {
        rectanglePhoto2.classList.add("hidden");
    });

    partTwoPhoto2.addEventListener('mouseout', function() {
        rectanglePhoto2.classList.remove("hidden");
    });

    /* -------------- END OF ukrywanie apli na zdjeciu ------------------- */

    /* -------------- slider------------------- */

    var rightButton = document.querySelector('.rightSliderArrow');
    var leftButton = document.querySelector('.leftSliderArrow');
    var slideIndex = 1;
    showDivs(slideIndex);



    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        };
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

    rightButton.addEventListener('click', function() {
        slideIndex = slideIndex + 1;
        showDivs(slideIndex);
    })

    leftButton.addEventListener('click', function() {
        slideIndex = slideIndex - 1;
        showDivs(slideIndex);
    })

    /* -------------- END OF slider------------------- */


});
