function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagemJogo = jogoClicado.querySelector(".dashboard__item__img");
    let botao = jogoClicado.querySelector(".dashboard__item__button");
    let nomeJogo = jogoClicado.querySelector(".dashboard__item__name");
   
    if(imagemJogo.classList.contains("dashboard__item__img--rented")) {
        if(confirm(`Você deseja retornar o jogo ${nomeJogo.innerHTML}?`)) {
            imagemJogo.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "Alugar";
        }
    } else {
        imagemJogo.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    }
}