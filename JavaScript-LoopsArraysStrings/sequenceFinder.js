/**
 * Created by Mario on 24.7.2014 г..
 */
function findMaxSequence(value) {
    var result = [];
    var equalsCount = 0;
    var positionOfSequence = 0;
    var count = 0;
    for (var i = 1;i < value.length;i++) {
        if (value[i-1] == value[i]) {
            if (typeof(value[i-1]) == typeof(value[i])) {
                equalsCount++;
            }
            positionOfSequence = i;
        }
        if (equalsCount > count) {
            count = equalsCount;
            equalsCount = 0;
        }
    }
    for(var i = 0; i < count + 1; i++) {
        result[i] = value[positionOfSequence];
        positionOfSequence--;
        console.log(result[i]);
    }
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);