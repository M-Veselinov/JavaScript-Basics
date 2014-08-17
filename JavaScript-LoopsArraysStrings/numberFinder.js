/**
 * Created by Mario on 27.7.2014 г..
 */
function findMostFreqNum(value) {
    value.sort();
    var position = 0;
    var counter = 0;
    var count = 0;
    for(var i = 1;i < value.length;i++) {
        if (value[i-1] == value[i]) {
            counter++;
        } else {
            counter = 0;
        }
        if(counter > count) {
            count = counter;
            position = i;
        }
    }
    console.log(value[position] + '(' + (count + 1) + 'times)');
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);