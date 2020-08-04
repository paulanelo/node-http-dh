const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf8');
  console.log(typeof req.url); // string
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl); // o query é um objeto agora
  const { nome = 'Jane Doe' } = parsedUrl.query;
  const { pathname } = parsedUrl;
  if (pathname == '/boas-vindas') {
    return res.end(
      '<span>Olá, <strong>' +
        nome +
        '</strong>, você está em um servidor http! ✨</span>'
    );
  } else if (pathname == '/') {
    return res.end(
      '<span>Oi, essa é a primeira página do servidor http! 🔝</span> <br><a href="/boas-vindas">Página de boas vindas</a>'
    );
  } else {
    return res.end('❗❗❗❗❗ Essa url não é váida :( ❗❗❗❗');
  }
});

server.listen(3030, () => {
  console.log('o server está rodando');
});
