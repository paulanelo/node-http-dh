const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf8');
  console.log(typeof req.url); // string
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl); // o query é um objeto agora
  const { nome } = parsedUrl.query;
  res.end(
    '<span>Olá, <strong>' +
      nome +
      '</strong>, você está em um servidor http! ✨</span>'
  );
});

server.listen(3030, () => {
  console.log('o server está rodando');
});
