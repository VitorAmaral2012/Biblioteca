const fs = require('fs');
var list = [];
const dir = 'javaScript/livro/img/capas';
fs.readdir(dir, (err, arquivos) => {
    arquivos.forEach(arquivo => {
        arquivo = arquivo.slice(0, arquivo.length - 4);
        list.push(arquivo);


    });
    console.log(list);
});