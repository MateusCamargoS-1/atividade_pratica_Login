const btnLogin = document.getElementById('btnLogin');

const submit = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username != '' && password != '') {
        api.post('/login', {
            email: username,
            password,
        })
            .then(function (response) {
                api.get('/users')
                    .then(function (response) {
                        const user = response.data.data.find(user => user.email === username);

                        sessionStorage.setItem('usuario', JSON.stringify({ nome: username, messages: user.recado}));
                        
                        window.location.href = './recados/recados.html';
                    })
                    .catch(function (error) {
                        console.log(error)
                    })



            })
            .catch(function (error) {
                alert(error.response.data.message);
            })

    } else {
        alert('Todos os campos precisam ser preenchidos!');
    }

}

btnLogin.addEventListener('click', submit);