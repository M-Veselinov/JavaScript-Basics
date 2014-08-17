/**
 * Created by Mario on 24.7.2014 г..
 */
function reverseString(value) {
    var result = [];
    var length = value.length -1;
    for (i = 0;i < value.length;i++) {
        result[i] = value[length];
        length--;
        console.log(result[i]);
    }
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');