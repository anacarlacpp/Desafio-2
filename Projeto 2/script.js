function validarProduto(idNomeProduto, idCodProduto,idQtidadedeProduto){

let nome= document.getElementById(idNomeProduto).value;
let codigo= document.getElementById(idCodProduto).value;
let qtidade= document.getElementById(idQtidaded).value;

if (nome=="") 
    alert("Nome do Produto não pode estar em branco. Por favor, preenchê-lo!");
   
else if (codigo=="") 
    alert("Código do produto não pode estar em branco. Por favor, preenchê-lo!");
    
else cadastrarProduto(nome,codigo,parseInt(qtidade));
}

function cadastrarProduto(produto,codigo,qtidade) {
    let novoProduto ={nome:produto,codigo:codigo,qtidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos== null) produtos =[];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastados com sucesso" +qntidade+"unidades do produto"+produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();

    }

    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar a aplicação");
}

function carregarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque", ++document.getElementById(idCampo).innerHTML)
    
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElement(idCampo).innerHTML = totalEstoque;

    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar a aplicação");
}

function listarEstoque() {
    if(typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>");
        if(produtos == null)
        document.write("<h3> Ainda não há nenhum item no estoque</h3>");
        else{
            produtos= JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto:" +produto.nome+"</li>");
                document.write("<li>Código do produto:" +produto.nome+"</li>");
                document.write("<li>Quantidade no estoque:" +produto.quantidade+"</li>");
                document.write("</ul>");

            })
        }
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar a aplicação");
}