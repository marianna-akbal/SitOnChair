document.addEventListener("DOMContentLoaded", function() {

  /* -------------- dropdown menu Firma ------------------- */

    var topLevelMenuItems = Array.from(document.querySelectorAll('.menu ul li'));

    topLevelMenuItems.forEach(function(item){
        item.addEventListener("mouseover", function(){
            var secondMenu = this.querySelector(".secondMenu");
            if(secondMenu != undefined){
                secondMenu.classList.remove('hidden');

                secondMenu.addEventListener("mouseout", function(){
                  this.classList.add("hidden");
                })

                var secondLevelMenuItems = Array.from(this.querySelectorAll("li"));

                secondLevelMenuItems.forEach(function(secondItem){
                  secondItem.addEventListener("click", function(){
                    this.parentNode.classList.add("hidden");
                  });
                });
            }
        });
    });

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

    /* --------------dropdown menu - wybor krzesla ------------------- */

        var dropdownMenu = Array.from(document.querySelectorAll('.list_arrow'));

        dropdownMenu.forEach(function(item){
          item.addEventListener('click', function(){
              if( this.nextElementSibling.style.display === 'none' ) {
                this.nextElementSibling.style.display = 'block';
              } else {
                this.nextElementSibling.style.display = 'none';
              }
          })
        });

        var listItems = Array.from(document.querySelectorAll('.list_panel li'));
        var title = document.querySelector('.title');
        var color = document.querySelector('.color');
        var pattern = document.querySelector('.pattern');
        var colorValue = document.querySelector('.colorValue');
        var patternValue = document.querySelector('.patternValue');
        var chairValue = document.querySelector('.titleValue');


        listItems.forEach(function(item){
          item.addEventListener('click', function(){
            if(this.parentNode.classList.contains('type')) {
              title.innerHTML = 'Chair ' + this.innerHTML;
              chairValue.innerHTML = this.dataset['chairPrice'];
            } if (this.parentNode.classList.contains('chairColor')){
              color.innerHTML = this.innerHTML;
              colorValue.innerHTML = this.dataset['colorPrice'];
            } if (this.parentNode.classList.contains('chairPattern')){
              pattern.innerHTML = this.innerHTML;
              patternValue.innerHTML = this.dataset['patternPrice'];
            }

          })
        });

        var checkbox = document.querySelector('#transport');
        var transport = document.querySelector('.transport');
        var transportValue = document.querySelector('.transportValue')

        checkbox.addEventListener('click', function(){
          console.log(this.checked);
          if(this.checked) {
            transport.innerHTML = "Transport";
            transportValue.innerHTML = this.dataset['transportPrice'];
          }
        });


        var sum = document.querySelector('.sum');

        var totalPrice = 0;

        








});
