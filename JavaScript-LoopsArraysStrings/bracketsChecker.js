/**
 * Created by Mario on 27.7.2014 г..
 */
function checkBrackets(value) {
     var openBr = 0;
    for( var pos = 0;pos < value.length;pos++) {
        if (value[pos] == '(') {
            openBr++;
        } else if ( value[pos] == ')') {
            openBr--;
        }
    }
    if ( openBr != 0 ) {
        console.log('incorrect');
    }
    else if (openBr == 0) {
        console.log('correct');
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');