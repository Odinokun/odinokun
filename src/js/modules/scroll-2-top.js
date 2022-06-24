module.exports = function () {

  // begin to-top
  $(document).ready(function () {
    let top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    let delay = 1000; // Задержка прокрутки
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) {
        $('#up').fadeIn();
      }
      else {
        $('#up').fadeOut();
      }
    });
  });
  // end to-top

};