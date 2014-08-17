/**
 * Created by Mario on 23.7.2014 г..
 */
function printNumbers(n) {
    for (i = 1;i <= n;i++) {
        if(i % 4 != 0 && i % 5 != 0 && n != 1) {
            console.log(i);
        }
        if (n==1) {
            console.log('no');
        }
    }
}
printNumbers(20);
printNumbers(1);
printNumbers(13);