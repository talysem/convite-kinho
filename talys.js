var t4Styles = document.documentElement;
var caixa = document.getElementById('caixa');
var body = document.getElementsByTagName('body')[0];

var larguraCaixa = caixa.offsetWidth;
var alturaCaixa = caixa.offsetHeight;

var larguraBody = body.offsetWidth;
var alturaBody = body.offsetHeight;

var limitadorLargura = larguraBody - larguraCaixa;
var limitadorAltura = alturaBody - alturaCaixa;

var margemLargura = larguraCaixa / 2;
var margemAltura = alturaCaixa / 2;

var novaLargura = 0
var novaAltura = 0

var imgTinhu = document.getElementById('tinhu');

function aceitou() {
    imgTinhu.style.display = 'flex';
    imgTinhu.style.opacity = '1';
    setTimeout(function () {
        imgTinhu.style.width = '100%';
    }, 250)
}



function reposicionar() {
    novaLargura = Math.floor(Math.random() * (margemLargura - limitadorLargura) + limitadorLargura);
    novaAltura = Math.floor(Math.random() * (margemAltura - limitadorAltura) + limitadorAltura);

    caixa.style.left = novaLargura + 'px';
    caixa.style.top = novaAltura + 'px';
}