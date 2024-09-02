$(document).ready(function() {

    $.validator.addMethod("fullname", function(value, element) {
        value = $.trim(value);
        var parts = value.split(/\s+/);
        return parts.length >= 2;
    }, "Please enter your full name.");

    $.validator.addMethod("validPhone", function(value, element) {
        var cleanVal = value.replace(/\D/g, '');
        return cleanVal.length >= 11;
    }, "Please enter your phone number with area code.");

    $('#phone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    });

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                fullname: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                validPhone: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: 'Please enter your name.'
            },
            email: {
                required: 'Please enter your email.',
                email: 'Please enter a valid email.'
            },
            phone: {
                required: 'Please enter your phone number with area code.'
            },
            message: {
                required: 'Please enter a message.',
                minlength: 'The message must be at least 10 characters long.'
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validator) {
            let incorrect = validator.numberOfInvalids();
            if (incorrect) {
                alert('Please review your contact information.');
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});