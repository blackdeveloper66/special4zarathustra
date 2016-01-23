function bubble() {
    var flag = false;
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            changeElements(i, i + 1);
            flag = true;
        }
    }

    if (flag) {
        return bubble();
    }
    showHistory();

    /*
     var flag = true;
     while (flag) {
     flag = false;
     for  (var i = 0; i < array.length - 1; i++) {
     if (array[i] > array[i + 1]) {
     changeElements(i, i + 1);
     flag = true;
     }
     }
     }
     */
}



