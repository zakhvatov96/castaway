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
