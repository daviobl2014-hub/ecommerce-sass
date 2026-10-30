// script para o carrossel da pagina produto

var elemsCarrosselBotao = document.querySelectorAll(
  '.s-produto__carrossel-botao',
);
var elemsCarrosselImagens = document.querySelector(
  '.s-produto__carrossel-itens',
);

elemsCarrosselBotao.forEach(function (elem, i) {
  elem.addEventListener('click', function () {
    elemsCarrosselImagens.style = 'transform: translateX(-' + i * 100 + '%);';

    elemsCarrosselBotao.forEach(function (ele) {
      if (ele != elem) {
        ele.classList.remove('s-produto__carrossel-botao--selecionado');
      } else {
        ele.classList.add('s-produto__carrossel-botao--selecionado');
      }
    });
  });
});
