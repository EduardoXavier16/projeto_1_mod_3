const express = require('express');

const cors = require('cors')

const app = express();

const filmesRouter = require('./routes/filmes.routes');

const port = 3000;

app.use(cors());

app.use(express.json());

app.use('/filmes', filmesRouter);

app.listen(port, () => {
    console.log(`App Rodando na porta ${port}`);
});