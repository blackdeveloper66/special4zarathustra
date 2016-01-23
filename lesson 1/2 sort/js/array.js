var array = [ 1, 5, 7, 50, 6, 13, 14, 18, 18, 18, 17, 1, 6, 5, 4, 2, 50, 8, 27, 16, 33, 15, 17, 49, 17, 16, 5, 17 ];

function drawArray() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);

    for (var i = 0; i < array.length; i++) {
        drawArrayElement(array[i], i);
    }

    function drawArrayElement(element, index) {
        ctx.fillRect(index * 10, 500, 10, -(element * 10));
    }
}