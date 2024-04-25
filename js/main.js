$(document).ready(function() {

    $.validator.addMethod("fullname", function(value, element) {
        value = $.trim(value);
        var parts = value.split(/\s+/);
        return parts.length >= 2;
    }, "Por favor, insira o seu nome completo.");

    $.validator.addMethod("validPhone", function(value, element) {
        var cleanVal = value.replace(/\D/g, '');
        return cleanVal.length >= 11;
    }, "Por favor, insira o seu telefone com DDD.");

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
                required: 'Por favor, insira o seu nome.'
            },
            email: {
                required: 'Por favor, insira o seu email.',
                email: 'Por favor, insira um email válido.'
            },
            phone: {
                required: 'Por favor, insira o seu telefone com DDD.'
            },
            message: {
                required: 'Por favor, insira uma mensagem.',
                minlength: 'A mensagem deve ter pelo menos 10 caracteres.'
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validator) {
            let incorrect = validator.numberOfInvalids();
            if (incorrect) {
                alert('Por favor revise os seus dados de contato.');
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});