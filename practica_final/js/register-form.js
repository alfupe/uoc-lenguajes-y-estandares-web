function showAfterSubmitFeedback() {
    var form = document.getElementById('register-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        form.reset();
        form.innerHTML = '<div class="form-feedback">Registro realizado con éxito<br>¡Nos pondremos en contacto contigo enseguida!</div>';
    });
}

document.addEventListener('DOMContentLoaded', function (event) {
    showAfterSubmitFeedback();
});
