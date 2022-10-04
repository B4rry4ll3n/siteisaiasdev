'use strict';

const images = [
    { 'id': '1', 'url':'./CertificadosUdemy/aws.png' },
    { 'id': '2', 'url':'./CertificadosUdemy/aws.png' },
    { 'id': '3', 'url':'./CertificadosUdemy/ConceitoseModelagemdeBancodeDadosRelacional.jpg' },
    { 'id': '4', 'url':'./CertificadosUdemy/DominandoBancodedadoscomMySQL.jpg' },
    { 'id': '5', 'url':'./CertificadosUdemy/HTMLeCSSEssencial.jpg' },
    { 'id': '6', 'url':'./CertificadosUdemy/JavaProgramaçãoOrientadaaObjetoscomjava.png' },
    { 'id': '7', 'url':'./CertificadosUdemy/LógicadeprogramaçãoealgoritmocomJAVA.png' },
    { 'id': '8', 'url':'./CertificadosUdemy/ModelagemdoBancodeDadosMySQLelinguagemSQL.png' },
    { 'id': '9', 'url':'./CertificadosUdemy/OrientaçãoaobjetoscomJAVA.png' },
    { 'id': '10', 'url':'./CertificadosUdemy/SQLdozero.png' },
]



const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}



loadImages( images, containerItems );


let items = document.querySelectorAll('.item');


const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}


const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
