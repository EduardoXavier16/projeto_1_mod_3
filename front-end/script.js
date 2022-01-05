const apiUrl = 'http://localhost:3000'

const lista = document.getElementById('lista');

const getFilmes = async () => {
  
    const response = await fetch(`${apiUrl}/filmes`);
    const lista = await response.json();

    filmes.map((filme) => {
        console.log(filme.nome);
        lista.insertAdjacentHTML('beforeend', `
            <tr>
                <th scope="row">${filme.id}</th>
                <td>${filme.nome}</td>
                <td>${filme.imagem}</td>
                <td>${filme.genero}</td>
                <td>${filme.nota}</td>
            </tr>
        `)
    })

}

getFilmes();


const escolherFilme = async () => {
    
    const idDigitado = document.getElementById('idFilme').value;
    
    const response = await fetch(`${apiUrl}/filmes/${idDigitado}`)
    
    const filme = await response.json();

    document.getElementById('filme').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${filme.id}</td>
            <th scope="row">${filme.nome}</th>
            <td>${filme.imagem}</td>
            <td>${filme.genero}</td>
            <td>${filme.nota}</td>
        </tr>
    `)
}