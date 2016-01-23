var array = [ 1, 5, 7, 50, 6, 13, 14, 18, 18, 18, 17, 1, 6, 5, 4, 2, 50, 8, 27, 16, 33, 15, 17, 49, 17, 16, 5, 17 ];
var arrayHistory = [];

function drawArray(arr) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);

    for (var i = 0; i < arr.length; i++) {
        drawArrayElement(arr[i], i);
    }

    function drawArrayElement(element, index) {
        ctx.fillRect(index * 10, 500, 10, -(element * 10));
    }
}

function changeElements(i, j, callback){
    var b = array[i];
    array[i] = array[j];
    array[j] = b;
    arrayHistory.push(array.concat([]));
}

function showHistory(){
    if (arrayHistory.length == 0){
        return;
    }
    var a = arrayHistory.shift();
    drawArray(a);
    setTimeout(showHistory, 100);
}