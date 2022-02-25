document.body.onload = start;

var NomeDosLivros = [
    [
        'A Arte da Guerra',
        'A Divina Comedia',
        'A Igreja Do Diabo',
        'A Ilustre Casa De Ramires',
        'A Metamorfose',
        'A Pequena Sereia',
        'A revolucao dos bichos',
        'A volta do mundo em 80 dias',
        'Alice no pais das maravilhas',
        'As viagens du Guliver',
        'Contos de Lima Barreto',
        'Da terra à Lua',
        'Dom Casmurro',
        'Dom Quixote Miguel de Cervantes',
        'Iracema',
        'Memórias postumas de Bras cubas',
        'O Alienista',
        'O Amanhã não está a venda',
        'O castelo',
        'O Cortico',
        'O Desaparecido',
        'O Enfermeiro',
        'O Foguista',
        'O Guarani',
        'O Mercador De Veneza',
        'O triste fim de Policarpo Quaresma',
        'Os Sertões',
        'Romeu e Julieta',
        'Um Artista Da Fome',
        'Ursula',
        'Viagem ao Centro da Terra',
        'Vinte Mil Léguas Submarinas'
    ]
]



function start() {
    ColocarLivros(0);
    contarLivros();
    mudarCorDaBarra(1, "white", "rgb(20, 1, 80)");
}


//buscar
window.pes = function pesquisar() {
    var livro = document.getElementById("pesquisar").value;
    pegarL(livro);
}


function pegarL(nome) {
    var achado;

    NomeDosLivros.forEach(paginas => {
        achado = paginas.find(livro => livro.toLowerCase() === nome.toLowerCase());

    })

    Limpar();
    if (achado == undefined) {
        console.log("und");
    } else {
        criaLivro(achado)
    }

}

//gerenciador da biblioteca
function contarLivros() {
    var quantidadeDeLivros = 0;
    NomeDosLivros.forEach(pasta => {
        quantidadeDeLivros += pasta.length;
    })

    var contador = document.getElementById("ContLivros");
    contador.appendChild(document.createTextNode("Numero De Livros: " + quantidadeDeLivros))
}

function ColocarLivros(num) {
    NomeDosLivros[num].forEach(livro => {
        criaLivro(livro);
    });
}

function criaLivro(til) {

    //creat elemnts
    var figure = document.createElement("figure");
    var titulo = document.createElement("figcaption");
    var pdf = document.createElement("a");
    var conteudo = document.createTextNode(til);



    //set pdf
    var src = "https://ifmg.websiteseguro.com/pdfDosLivros/" + til + ".pdf";
    pdf.setAttribute('href', src);
    pdf.style.textDecoration = 'none';
    pdf.style.color = 'inherit';
    pdf.setAttribute('download', til);

    //set images
    var img = document.createElement("img");
    img.src = "img/capas/" + til + ".jpg";

    //apend child
    pdf.appendChild(conteudo);
    titulo.appendChild(pdf);
    figure.append(img);
    figure.append(titulo);


    document.getElementById("biblioteca").appendChild(figure);
}


//mudar paginas
var paginaAtual = 1;

window.Mudarpagina = function Mudarpagina(num) {


    mudarCorDaBarra(paginaAtual, "rgb(20, 1, 80)", "#d4b400");
    mudarCorDaBarra(num, "white", "rgb(20, 1, 80)");
    paginaAtual = num;

    Limpar();
    ColocarLivros(num - 1);
}




function mudarCorDaBarra(num, color, backgroundColor) {
    const p = document.getElementById("p" + num);
    const li = document.getElementById("li" + num);
    p.style.color = color;
    li.style.backgroundColor = backgroundColor;
}



function Limpar() {
    const parent = document.getElementById("biblioteca")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}