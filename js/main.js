$(function() {

    // percent

    $('.variant-btn').click(function() {
        $('.variant-btn').removeClass('variant-btn-active');
        $('.percent-num').removeClass('current-num');
        var variant = $(this).children('span').text();
        $('.description span').text(variant);
        if ($(this).attr('data-val') == 30) {
            $(this).addClass('variant-btn-active');
            $('#percent30').addClass('current-num');
        } else if ($(this).attr('data-val') == 50) {
            $('#percent50').addClass('current-num');
        } else {
            $('#percent70').addClass('current-num');
        }
    });

    // validate form

    $("input[type='submit']").click(function(e) {
        var name = $("input[name='name']");
        var email = $("input[name='email']");
        var password = $("input[name='password']");

        if (!name.val()) {
            $(this).prop('disabled', true);
            name.val("Введите свое имя")
            name.addClass('field-error');
            return false;
        } else if (!email.val()) {
            $(this).prop('disabled', true);
            email.val("Неверный формат email")
            email.addClass('field-error');
            return false;
        } else if (!password.val()) {
            $(this).prop('disabled', true);
            password.val("Придумайте новый пароль")
            password.addClass('field-error');
            return false;
        } else {
            return true;
        }
    });

    $(".form-input").focus(function() {
        $(this).removeClass('field-error');
        $(this).val('');
        $("input[type='submit']").prop('disabled', false);
    });

    $('.form-btn').click(function(e) {
        $('.form-btn').removeClass('form-btn-active');
        e.preventDefault();
        $(this).addClass('form-btn-active');
    })
});