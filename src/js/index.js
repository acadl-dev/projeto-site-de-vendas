function validarCamposObrigatorios(oProduto, aQuantidade, oPrecoUnitario, aDataTransacao) {
    return oProduto && aQuantidade != null && oPrecoUnitario != null && aDataTransacao;
}

function validarQuantidadeProduto(aQuantidade) {
    return aQuantidade > 0;
}

function validarPrecoUnitario(oPrecoUnitario) {

    return oPrecoUnitario > 0;
}

function registrarDataTransacao() {
    return new Date().toLocaleString();
}

function gerarNumeroTransacao(){    
    return Math.floor(Math.random()*10000);
}

function registrarVenda(produto, quantidade, precoUnitario) {
    let dataTransacao = registrarDataTransacao();

    let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
    let validaQuantidadeProduto = validarQuantidadeProduto(quantidade);
    let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);
    let identificador = gerarNumeroTransacao();

    if (validaCamposObrigatorios) {
        if (validaQuantidadeProduto) {
            if (validaPrecoUnitario) {
                return "ID: "+ identificador +". Transação realizada com sucesso! Produto: " + produto + ", Quantidade: " + quantidade + " unidades, Preço Unitário: R$" + precoUnitario + ", data da transação: " + dataTransacao;
            } else {
                return "Problemas na validação de Preço Unitário!";
            }
        } else {
            return "Problemas na validação de Quantidade de produtos!";
        }
    } else {
        return "Problemas na validação de campos obrigatórios!";
    }
}

function registrarHistoricoAlteracao(aMensagem){
    const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
    const liHistorico = document.createElement("li");
    liHistorico.textContent = aMensagem;
    ulHistoricoAlteracao.appendChild(liHistorico);
}

function vender(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let precoUnitario = document.getElementById("preco").value;

    const mensagem = registrarVenda(produto, quantidade, precoUnitario);    

    registrarHistoricoAlteracao(mensagem);
   
}

