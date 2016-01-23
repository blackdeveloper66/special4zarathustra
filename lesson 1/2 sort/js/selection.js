function selection(){
    function step(ind) {
        if (ind == array.length){
            return showHistory();
        }
        var index = ind;
        for (var i = ind; i < array.length; i++) {
            if (array[i] < array[index]) {
                index = i;
            }
        }
        if (index !== ind) {
            changeElements(ind, index);
        }
        step(ind + 1);
    }
    step(0);
}
