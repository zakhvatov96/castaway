const menu = document.querySelector(".menu"),
  menuItem = document.querySelectorAll(".menu__list-item"),
  hamburger = document.querySelector(".hamburger");

function validateForms(form) {
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        reqired: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Введите свое имя",
        minlength: jQuery.validator.format("Введите {0} символа!"),
      },
      email: {
        required: "Введите свой email",
        email: "Неправильно введен email",
      },
    },
  });
}

validateForms(".subscribe__form");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// pageup

$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});

$('a[href^="#"').on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top,
  });
  return false;
});
