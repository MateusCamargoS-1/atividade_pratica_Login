const h1 = document.querySelector('h1');
const listaRecados = document.getElementById('recados');

const recados = sessionStorage.getItem('usuario');
if(recados != null) {
    const listRecados = JSON.parse(recados);
    h1.textContent = `Recados de ${listRecados.nome}`

    if (!listRecados.messages) {
        listaRecados.innerHTML = '<h3>Não há recados.</h3>';
    } else {
    
        const ul = document.createElement('ul');
        listRecados.messages.forEach(recado => {
            const li = document.createElement('li');
            li.innerHTML = `
            <h2>${recado.title}</h2>
            <p>${recado.message}</p>
            `;
            ul.appendChild(li);
        });
    
        listaRecados.appendChild(ul);
    }
    
} else {
    window.location.href = './../index.html';
}

