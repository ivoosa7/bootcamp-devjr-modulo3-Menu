//Pegar os produtos do HTML

//Lista de Produtos
var produtos = [
                { id: 1, nameProduct: $("#nameProduct1").text(), price: $("#price1").text()},//0
                { id: 2, nameProduct: $("#nameProduct2").text(), price: $("#price2").text()},//1
                { id: 3, nameProduct: $("#nameProduct3").text(), price: $("#price3").text()},//2
                { id: 4, nameProduct: $("#nameProduct4").text(), price: $("#price4").text()},//3
                { id: 5, nameProduct: $("#nameProduct5").text(), price: $("#price5").text()},//4
                { id: 6, nameProduct: $("#nameProduct6").text(), price: $("#price6").text()},//5
                //Puxando corretamente através do .text(), usando jQuery $()
];

function gerarResumo(){
    var Resumo  = document.getElementById("order-summary");
    Resumo.innerHTML = `Produto: ${produtos[4].nameProduct}  - Preço: ${produtos[4].price}`;
}