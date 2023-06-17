const botaoNovoGato = document.getElementById('botao-novo-gato');
const imagemGato = document.getElementById('imagem-gato');
let totalLikes = 0;
let totalDislikes = 0;
const botaoLike = document.getElementById('like');
const botaoDislike = document.getElementById('dislike');
let botoesClicados = false;

function like() {
  if (!botoesClicados) {
    totalLikes++;
    atualizarContadorLikes();
    desabilitarBotoes();
    botoesClicados = true;
  }
}

function dislike() {
  if (!botoesClicados) {
    totalDislikes++;
    atualizarContadorDislikes();
    desabilitarBotoes();
    botoesClicados = true;
  }
}

//DESABILITA LIKE E DISLIKE DEPOIS QUE A PESSOA ESCOLHE UMA DAS OPÇÕES
function desabilitarBotoes() {
  botaoLike.disabled = true;
  botaoLike.style.backgroundColor = 'grey';
  botaoDislike.disabled = true;
  botaoDislike.style.backgroundColor = 'grey';
  
}

///HABILITA LIKE E DISLIKE DEPOIS QUE A PESSOA CLICA PRA GERAR NOVO GATINHO
function habilitarBotoes() {
  botaoLike.disabled = false;
  botaoLike.style.backgroundColor = 'green';
  botaoDislike.disabled = false;
  botaoDislike.style.backgroundColor = 'red';
  botoesClicados = false;
}

function atualizarContadorLikes() {
  document.getElementById('contador-likes').textContent = totalLikes;
}

function atualizarContadorDislikes() {
  document.getElementById('contador-dislikes').textContent = totalDislikes;
}

botaoNovoGato.addEventListener('click', function () {
  fetchImagemAleatoriaGato();
  habilitarBotoes();
});


//API
function fetchImagemAleatoriaGato() {
  const apiKey = 'live_3N6F1xrtglOuNze15nnd4cRDGoTpG6kiqbXhiVnmokcoNOLmSxjyQ1ELgVnD80tq';

  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      imagemGato.src = imageUrl;
    })
    .catch(error => {
      console.error('Erro na solicitação:', error);
    });
}
