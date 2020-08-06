const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf8'); // definindo o hearder do response
  console.log(typeof req.url); // string
  const parsedUrl = url.parse(req.url, true); // utilizando a lib url para parsear a url da request e poder manipulá-la
  console.log(parsedUrl); // o query é um objeto agora
  const { nome = 'Jane Doe' } = parsedUrl.query; // definindo um valor padrão para o name, caso ele não esteja presente na query da url
  const { pathname } = parsedUrl; // pegando qual seria a rota que foi acessado (home, contato, etc)
  if (pathname == '/boas-vindas') {
    // se for o boas vindas retornará a mensagem abaixo
    return res.end(
      '<span>Olá, <strong>' +
        nome +
        '</strong>, você está em um servidor http! ✨</span>'
    );
  } else if (pathname == '/') {
    // se for a rota raiz, será esta
    return res.end(
      '<span>Oi, essa é a primeira página do servidor http! 🔝</span> <br><a href="/boas-vindas">Página de boas vindas</a>'
    );
  } else {
    // caso seja uma rota inválida
    return res.end('❗❗❗❗❗ Essa url não é váida :( ❗❗❗❗');
  }
});

server.listen(3030, () => {
  console.log('o server está rodando');
});
