func();
func2();

function func() {
    return 10;
}

var func2 = function() { };

//Object

//Начало scope
// func a(); | a = func()

//result
function functionWithResult() {
    return 10;
}

//arguments
function nds(sum, k) {
    if (k == undefined) {
        return sum * 0.18;
    } else {
        return sum * k;
    }
}

function nds(sum, k) {
    if (k == undefined) {
        k = 0.18;
    }
    return sum * k;
}

function nds(sum, k) {
    return sum * (k || 0.18);
}

// (условие) ? true : false;
function nds(sum, k) {
    return k == undefined ? sum * 0.18 : sum * k;
}

function nds() {
    return arguments[1] == undefined ? arguments[0] * 0.18 : arguments[0] * arguments[1];
}
//arguments not array
//length
//0
//1

//scope
var k = 18;
function nds2(sum) {
    return sum * k / 100;
}

//scope example
function createNdsFunction(k) {
    function result(sum) {
        return sum * k;
    };

    return result;
}

var nds_0  = createNdsFunction(0);
var nds_10 = createNdsFunction(10);
var nds_18 = createNdsFunction(18);

console.log(nds_0(100));

//context
//bind
//call & apply
var human   = { steps : 0 };
var human_2 = { steps : 0 };

function doStep(h) {
    h.steps++;
}

doStep(human);
doStep(human);   // 2
doStep(human_2); // 1

function doStepWithThis(steps) {
    this.steps += steps || 1;
}

var human_do_step = doStepWithThis.bind(human);

human_do_step();

doStepWithThis.call(human, 10);        // call(this, args)
doStepWithThis.apply(human_2, [ 10 ]); // apply(this, args[])

//constructor
function Human() {
    this.steps = 0;
}

var dima = new Human();
var ivan = new Human();

//prototype
Human.prototype.doStep = function() {
    this.steps++;
};

dima.doStep();
/*
 dima - steps=1
 ivan - steps=0
*/

function AnotherHuman() {}

var dima = new AnotherHuman();
var ivan = new AnotherHuman();

Human.prototype.steps = 0;
Human.prototype.doStep = function() {
    this.steps++;
};

dima.doStep();
/*
dima.steps - 1
ivan.steps - 1
 */

function AnotherAnotherHuman() {
    this.steps = 0;
}

var dima = new AnotherAnotherHuman();
var ivan = new AnotherAnotherHuman();

Human.prototype.steps = 0;
Human.prototype.doStep = function() {
    this.steps++;
};

dima.doStep();

/*
 dima.steps - 1
 ivan.steps - 0
 */

var dima = new AnotherAnotherHuman();
var ivan = new AnotherAnotherHuman();

delete dima.steps;
delete ivan.steps;

Human.prototype.steps = 0;
Human.prototype.doStep = function() {
    this.steps++;
};

dima.doStep();

/*
 dima.steps - 1
 ivan.steps - 1
 */