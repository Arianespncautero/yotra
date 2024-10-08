function mostraResposta (cartao__conteudo){
    const resposta = cartao__conteudo.querySelector('.cartao__conteudo__resposta')
    if (resposta.style.display == 'none'){
        resposta.style.display == 'block';

    }
    else{
        resposta.style.display == 'none';
    }
}