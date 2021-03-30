/* Letter Changes */
function LetterChanges(str) { 
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let changeStr = '';
    for (let i = 0; i < str.length; i++) {

        let index = letters.indexOf(str[i]);        
        let letter = '';

        if (index > 0 && index > 25) letter = a;
        if (index < 0) letter = str[i];
        if (index > -1 && index < 26) letter = letters[index + 1];        
        if (['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1) letter = letter.toUpperCase()
        changeStr += letter
    }
    return changeStr; 
    
}

console.log(LetterChanges('hello*3'));