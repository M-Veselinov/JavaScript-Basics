/**
 * Created by Mario on 24.7.2014 г..
 */
function compareChars(firstArray,secondArray) {
    var equal = 0;
    for (i=0; i < firstArray.length;i++) {
        if (firstArray.length > secondArray.length) {
            console.log('Not equal');
            break;
        } else if (secondArray.length > firstArray.length) {
            console.log('Not equal')
            break;
        }
        if (firstArray[i] == secondArray[i]) {
            equal++;
        }
        if (equal == firstArray.length - 1) {
            console.log('Equal');
        } else if (firstArray[i] != secondArray[i]) {
            console.log('Not Equal');
            break;
        }
    }
}


compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3','5','g','d'],['5','3','g','d']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);