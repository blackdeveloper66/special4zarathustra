(function() {
    function Events(obj) {
        obj.__events      = {};
        obj.on            = on;
        obj.dispatchEvent = dispatchEvent;

        function on(name, delegate) {
            /*
            if (!obj.__events[name]) { obj.__events[name] = []; }
            obj.__events[name].push(delegate);
            */
            (obj.__events[name] || (obj.__events[name] = [])).push(delegate);   // эквивалентен верхнему комменту
        }

        function dispatchEvent(name, arg) {
            (obj.__events[name] || []).forEach(function(item) { item(arg); });
        }
    }

    window.Game.Events = Events;
})();