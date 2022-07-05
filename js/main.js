$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    // console.log(tabsItem);

    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href'); // Записывает в переменную ссылку на ссылку:Д
        // console.log($(this).attr('href')); // Выводит в консоль название атрибута ссылки
        $('.visible').toggleClass('visible'); // Снимает класс со старой...
        $(activeContent).toggleClass('visible'); // ...и даёт новой вкладке
        $('.tabs-item-active').toggleClass('tabs-item-active'); // А здесь удаляет
        $(this).toggleClass('tabs-item-active'); // Оно назначает ему этот класс
    });
});


// Дальше идёт код оформлени скриншотов
var slideIndex = 1;
showSlides(slideIndex);

// Элементы управления (следующий/предыдущий)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления эскизами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}