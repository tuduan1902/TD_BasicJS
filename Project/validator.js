
// Đối tượng `Validator`
function Validator(options){
    // Hàm thực hiện validate
    function validate(inputElement, rule){
        // value: inputElement.value
        // test func: rules.test 
        var errorMessage = rule.test(inputElement.value)
        // Từ inputElement gọi đến thẻ form-group rồi gọi tới form-message
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            if(errorMessage){
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid');
            }else{
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if(formElement){
        options.rules.forEach(function(rule){
            var inputElement = formElement.querySelector(rule.selector);
            
            if(inputElement){
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => return message lỗi
// 2. Khi hợp lệ => return undefined
Validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        }
    };
}

Validator.minLength = function (selector,min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}