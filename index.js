function checkFunction () {

    const regexName = new RegExp('^[а-яА-Я]{30}|[a-zA-Z]{30}$');
    
    if (regexName.test(document.getElementById('name').value) === false) {

        document.getElementById('result').innerHTML = (`Имя нужно вводить только полностью русскими или английскими буквами`);

    }
}

function sendInfo() {

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let topic = document.getElementById('topic').value;

    let message = document.getElementById('message').value;

    let textarea = document.getElementById('textarea').value;

    if (name === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (email === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (topic === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (message === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}`);

    }

    if (textarea === '') {

        document.getElementById('result').innerHTML = (`Ошибка!`);

    } else {

        document.getElementById('result').innerHTML = (`Добро пожаловать, ${name}!`);

    }

} 