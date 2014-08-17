/**
 * Created by Mario on 24.7.2014 г..
 */
function findMinAndMax(value) {
    var max_of_array = Math.max.apply(Math, value);
    var min_of_array = Math.min.apply(Math,value);
    console.log('Min -> ' + min_of_array);
    console.log('Max -> ' + max_of_array);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31])
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);