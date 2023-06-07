

    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-red')
    let equal = document.querySelector('.btn-green')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let numValue = e.target.value;
            screen.value += numValue;
        })
    })

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = ''
        } else {
            let display = screen.value
            let answer = eval(display);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = '';
    })

