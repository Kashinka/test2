// валидация имени
function checkName () {

    const regexName = new RegExp('^[а-яА-Я]{1,30}|[a-zA-Z]{1,30}$');
    
    if (regexName.test(document.getElementById('name').value) === false) {

        document.getElementById('result').innerHTML = (`Имя нужно вводить только полностью русскими или английскими буквами`);

    }
}

// анти-спам
function checkSpam() {

    let str = document.getElementById('textarea').value;

    let lowerStr = str.toLowerCase();

    if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {

        document.getElementById('result').innerHTML = 'spam detected';

    } else {

        document.getElementById('result').innerHTML = '';

    }

}

// валидация на пустые поля при отправке
function checkSpaces() {

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let topic = document.getElementById('topic').value;

    let message = document.getElementById('message').value;

    let textarea = document.getElementById('textarea').value;

    if (name === '') {

        document.getElementById('result').innerHTML = (`Ошибка, заполните все поля формы!`);

    } else if (email === '') {

        document.getElementById('result').innerHTML = (`Ошибка, заполните все поля формы!`);

    } else if (topic === '') {

        document.getElementById('result').innerHTML = (`Ошибка, заполните все поля формы!`);

    } else if (message === '') {

        document.getElementById('result').innerHTML = (`Ошибка, заполните все поля формы!`);

    } else if (textarea === '') {

        document.getElementById('result').innerHTML = (`Ошибка, заполните все поля формы!`);

    } else {

        window.location.replace("https://test.artgorka.site/feedback.html");

    }

} 