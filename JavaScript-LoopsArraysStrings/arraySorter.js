/**
 * Created by Mario on 24.7.2014 г..
 */
function sortArray(value) {
    var result = [];
    var length = value.length;
    for(var i=1;i < length;i++) {
        if (value[i-1] - value[i] < 0) {
            value[i-1] = value[i];
        }

    }
}
sortArray([5, 4, 3, 2, 1]);