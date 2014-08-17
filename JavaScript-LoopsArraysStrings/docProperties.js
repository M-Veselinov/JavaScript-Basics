/**
 * Created by Mario on 27.7.2014 г..
 */
function displayProperties() {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();

    console.log(properties.join('/n'));

}

displayProperties();