function sortFunction(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] < array[i]) {
                done = false;
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
}
