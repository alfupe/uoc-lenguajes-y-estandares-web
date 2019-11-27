function someOtherCheckboxIsChecked(changedCheckbox, checkboxes) {
    var hasOtherCheckboxChecked = false;
    checkboxes.forEach(function (checkbox) {
        if (changedCheckbox !== checkbox && checkbox.checked) {
            hasOtherCheckboxChecked = true;
        }
    });

    return hasOtherCheckboxChecked;
}

function manageCheckboxesValidation() {
    var checkboxGroup = document.querySelector('.checkbox-group');
    var checkboxes = checkboxGroup.querySelectorAll('[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            checkboxes.forEach(function (checkbox) {
                if (!someOtherCheckboxIsChecked(this, checkboxes)) {
                    checkbox.setAttribute('required', '');
                } else {
                    checkbox.removeAttribute('required')
                }
            });
        });
    });
}

function showFormPost() {
    var form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(form);

        var result = {};
        for (var [key, value] of formData.entries()) {
           result[key] = value;
        }

        confirm('Valores del formulario:\n' + JSON.stringify(result, null, 4));
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    manageCheckboxesValidation();
    showFormPost();
});
