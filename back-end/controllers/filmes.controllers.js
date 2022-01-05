
const filmesService = require('../services/filmes.services');


const getFilmes = (req, res) => {
    const filmes = filmesService.getFilmesService();
    res.send(filmes);
}
const getFilmesById = (req, res) => {
 
    const id = req.params.id;
    const filme = filmesService.getByIdService(id);
    res.send(filme)
}


const postFilme = (req, res) => {
    const filme = req.body;
    console.log(req.body);
    const newFilme = filmesService.addFilme(filme);
    res.send({message:`Filme ${newFilme.nome} foi cadastrado com sucesso!`});
}

const putFilme = (req, res) => {
    const idParam = req.params.id
    const filmeEdit = req.body
    const edicao = filmesService.putFilme(idParam, filmeEdit);
    if(edicao) {res.send({message:`O filme foi editado com sucesso!!!`})
}else{
    res.status(404).send({message:`Não encontramos filme com esse id para editar!!!`})
}
}   

const deleteFilme = (req, res) => {
    const filmeExcluido = filmesService.deleteFilme(req.params.id);
    res.send({message: `O filme ${filmeExcluido.imagem} da empresa ${filmeExcluida.imagem} foi excluida com sucesso`});
}

module.exports = {
    getFilmes,
    getFilmesById,
    postFilme,
    putFilme,
    deleteFilme
}