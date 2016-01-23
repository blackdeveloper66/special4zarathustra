function addText() {
    var element = document.getElementById('text');
    element.innerText += 'Hi!!!';
}

function createElement() {
    var element = document.createElement('div');
    element.innerText += 'Create from JS';
    element.setAttribute('style', 'font-size:' + Math.random() * 50 + 'px');

    document.getElementById('elements').appendChild(element);
}

window.onload = function() {
    document.getElementById('change').onclick = addText;
    document.getElementById('append').onclick = createElement;
};