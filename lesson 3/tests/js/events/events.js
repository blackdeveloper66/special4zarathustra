module('Events');

test('Constructor', function() {
    var obj = {};
    Game.Events(obj);

    deepEqual(obj.__events, {}, 'See valid __events');
    ok(obj.on instanceof Function, 'See function on');
    ok(obj.dispatchEvent instanceof Function, 'See function dispatchEvent');
});

test('on', function() {
    var obj = {};
    Game.Events(obj);
    function delegate() { }
    function another() { }

    obj.on('event-name', delegate);
    obj.on('event-name', another);

    deepEqual(obj.__events['event-name'], [ delegate, another ], 'See valid delegates');
});

test('dispatchEvent', function() {
    var obj = {};
    var arg = {};
    Game.Events(obj);
    var delegate = sinon.stub();
    var another  = sinon.stub();

    obj.on('event-name', delegate);
    obj.on('event-name', another);

    obj.dispatchEvent('event-name', arg);
    obj.dispatchEvent('another-event', arg);

    ok(delegate.calledOnce, 'delegate was called');
    ok(delegate.calledWith(arg), 'delegate was called with valid arguments');
    ok(another.calledOnce, 'another delegate was called');
    ok(another.calledWith(arg), 'another delegate was called with valid arguments');
});