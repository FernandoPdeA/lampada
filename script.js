const lapm = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const btn = document.querySelector('#refresh');


function atualizar() {
  lamp.src = './img/lampadaApagada.jpg'
}

function manterQuebrada() {
  return lamp.src.indexOf('lampadaQuebrada') > -1
};

function acender() {
  if (!manterQuebrada()) {
    lamp.src = './img/lampadaAcesa.jpg'
  }
};

function apagar() {
  if (!manterQuebrada()) {
    lamp.src = './img/lampadaApagada.jpg'
  }
};

function quebrar() {
  lamp.src = './img/lampadaQuebrada.jpg'
}


turnOn.addEventListener('click', acender);
turnOff.addEventListener('click', apagar);
// lamp.addEventListener('mouseover', acender);
// lamp.addEventListener('mouseleave', apagar);
lamp.addEventListener('dblclick', quebrar);
btn.addEventListener('click', atualizar);



