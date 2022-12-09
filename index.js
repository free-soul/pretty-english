const toPretty = function(c) {
    var content = '';
    var character = '';

    for(i = 0; i < c.length; i++) {
        character = c.charAt(i);
        if (i == 0) {
            content += character.toUpperCase();
            continue;
        }
        if (!(/^[a-zA-Z]+$/.test(character)) || character.toUpperCase() != character) content += character; 
        else if (character.toUpperCase() == character) {
            if (content.charAt(i - 1) == content.charAt(i - 1).toUpperCase()) content += character;
            else content += (' ' + character);
        }
    }
    return content;
}
console.log(toPretty('helloWorld'))
