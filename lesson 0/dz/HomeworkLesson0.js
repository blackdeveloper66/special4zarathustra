/**
 * Created by Pi-iMac on 24/01/16.
 */

/*fi_0 1 1
 fi_1 1 2
 fi_2 2 10
 fi_3 9 11
 fi_4 8 7
 fi_5 2 3
 fi_6 7 11
 fi_7 1 4
 fi_8 1 5
 fi_9 1 8
 */

function fic(a,b) {
    var _a = a;
    var _b = b;
    return function(){
        var c = _a + _b;
        _a = _b;
        _b = c;
        return c;
    }
}

var fi_4 = fic(8,7);
/*
function fi_0() {
    var a = 1;
    var b = 1;
    for (var i = 0; i < 10; i++) {
        var c = a + b;
        a = b;
        b = c;
        console.log("fi_0", "step", i, c);
    }
}

function fi_1(){
    var a = 1;
    var b = 2;
    for (var i = 0; i < 10; i++) {
        var c = a + b;
        a = b;
        b = c;
        console.log("fi_1", "step", i, c);
    }
}

fi_0();
fi_1();

var t = 1;
var y = 1;
function fi(t,y) {
    for (var i = 0; i < 10; i++) {
        var c = t + y;
        t = y;
        y = c;
        console.log("fi", "step", i, c);
    }
}

fi(8,7);

/*
 Нужно написать функцию f, которая последовательно возвращает значения
 1 -2 3 -4 5 -6 7 -8
 */
function f(){
    for (var i = 1; i < 10; i++) {
        var c = i * d;
        d = -(d);
        console.log(c);
    }
}
f();

/*
 Решето Эратосфена Array
 https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BE_%D0%AD%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D0%BD%D0%B0
 1-1000
 */


function resh() {
    var array = [];
    for (var i = 0; i < 1001; i++) {
        array[i] = true;
    }
    for (var j = 2; j < Math.sqrt(1000); j++) {
        if (array[j] == false) {
            continue;
        }

       /*
        var c = 2 * j;
        while (c < 1000) {
            array[c] = false;
            c += j;   // c = c +j
        }
        */

        for (var c = 2 * j; c < 1000; c += j) {
            array[c] = false;
        }
    }
    var result = [];
    for (var k = 2; k < 1000; k++) {
        if (array[k]) {
            result.push(k);
        }
    }
    return result;
}
resh();


/* switch
 http://javascript.ru/switch

 Есть переменная result = ''
 Есть функция func(a, b)
 if a - не передали то result увеличить на 'not;'
 if a = 1 - то result увеличить на '++'
 if a = 2 - то result увеличить на b (или 0) ''
 if a = 3 - то result увеличить на b (или 0) '==b'
 */
var b = '';
var result = '';
function func(a, b) {
    switch (a) {
        case undefined:
            return result += "not";
        case 1:
            return result += " \'++' ";
        case 2:
            return result c = b || 0
            console.log (result + c)
            break
        case 3:
            c = b || 0
            console.log (result - c)
            break
        default:
            console.log ("nigger")
    }
}
func (3,2);
