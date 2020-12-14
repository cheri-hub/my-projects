$(window).scroll(function() {

    var position = $(this).scrollTop();//Representa a posição atual da tela, digamos assim.
    
    $($('.wrapper').children()).each(function() {//Essa função passa por todas as seções criadas na div principal, a .wrapper.
        var target = $(this).offset().top; //Variável que contém o valor da posição onde uma seção começa (lembre-se que ela passa por todas)
        var id = $(this).attr('id'); //Variável que pega o id dessa seção.

        if (position >= target) {//Caso a posição atual seja maior ou igual à posição de uma das divs, quer dizer que você está nesta div em questão.
            var alvo;//Variável para pegar o ID da seção no menu.
            if(id == 'homepage'){//Série de ifs para fazer a transferência de nome da seção para nome no menu. (pode ser otimizado mudando os nomes dos id's do menu)
                alvo = '#h';
            }
            if(id == 'services'){
                alvo = '#s';
            }
            if(id == 'projects'){
                alvo = '#p';
            }
            if(id == 'about'){
                alvo = '#a';
            }
            if(id == 'contact'){
                alvo = '#c';
            }

            $('#menu > li').removeClass('active');//Remove a classe .activated de todos <li>
            $(alvo).addClass('active');//Adiciona a classe .activated no <li> da seção que você se encontra.
        }

    });
});

function hamburguer() {
    var hamenu = document.getElementById("hamenu");
    if (hamenu.className === "ham") {
      hamenu.className = "on";
    } else {
      hamenu.className = "ham";
    }
  }