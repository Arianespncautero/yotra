function mostraResposta (cartao_conteudo){
    const resposta = cartao_conteudo.querySelector('.cartao_conteudo_resposta')
    if (resposta.style.display == 'none'){
        resposta.style.display == 'block';

    }
    else{
        resposta.style.display == 'none';
    }
}