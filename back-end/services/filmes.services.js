const filmes = [
  {
    id: 1,
    nome: "Furia sobre rodas",
    imagem: "",
    genero: "Ação",
    nota: 9,
    assistido: false,
  },
  {
    id: 2,
    nome: "Jhon Week, de volta ao jogo",
    imagem: "",
    genero: "Ação",
    nota: 10,
    assistido: false,
  },
  {
    id: 3,
    nome: "Matrix 4",
    imagem: "",
    genero: "Ficção Cientifica",
    nota: 9,
    assistido: false,
  },
];

const getFilmesService = () => {
  return filmes;
};

const getFilmesByIdService = (idParam) => {
  return filmes.find((filme) => filme.id == idParam);
};
const addFilme = (newFilme) => {
  const newId = filmes.length + 1;
  newFilme.id = newId;
  filmes.push(newfilme);
  return newFilme;
};

const putFilme = (idParam, filmeEdit) => {
  const index = filmes.findIndex((filme) => filme.id == idParam);
  if (index >= 0) {
    filmes[index] = {
      ...filmes[index],
      ...filmeEdit,
    };
    return true;
  } else {
    return false;
  }
};

const deleteFilme = (idParam) => {
  const index = filmes.findIndex((filme) => filme.id == idParam);
  const filmeExcluido = filmes[index];
  filmes.splice(index, 1);
  return filmeExcluido;
};

module.exports = {
  getFilmesService,
  getFilmesByIdService,
  addFilme,
  putFilme,
  deleteFilme,
};
