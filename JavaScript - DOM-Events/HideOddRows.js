/**
 * Created by Mario on 1.8.2014 г..
 */
function hideOddRows() {
    var rows = document.querySelectorAll('body table tr'),
        i;

    for (i = 0; i < rows.length; i += 2){
        rows[i].style.display = 'none';
    }
}

var button = document.getElementById('btnHideOddRows');
button.addEventListener('click', hideOddRows, false);