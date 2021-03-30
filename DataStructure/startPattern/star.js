/*

* 
** 
***
**** 
*****

*/

let printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let star = ''

        for (let j = 0; j <= i; j++) {

            star += '*'
        }
        console.log(star);
    }
}

// printPattern(5)

/*
*****
****
***
**
*
*/

let printReversePattern = (n) => {
    for (let i = n; i > 0; i--) {
        let star = '';
        for (let j = i; j > 0; j--) {
            star += '\xa0' + '*'
        }
        console.log(star);
    }
}

// printReversePattern(5)

/** --------------

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

----------------*/

let printPatternFromRight = (n) => {

    for (let i = 0; i <= n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (i + j >= n) {
                str += '* '
            } else {
                str = str.concat(" ")
            }
        }
        console.log(str);

    }
}

// printPatternFromRight(5)

/** --------------

*********
 ********
  *******
   ******
    *****
     ****
      ***
       **
        *
----------------*/

let printPatternFromLeft = (n) => {
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (i <= j) {
                str += '* ';
            } else {
                str = str.concat(' ')
            }
        }
        console.log(str);
    }

}

// printPatternFromLeft(6);

/**
1
2 3
4 5 6
7 8 9 10
*/

let incrementTraingle = (n) => {
    
    let str = ''; 
    let number = 1;

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < i; j++) {
            str += number + ' ';
            number++
        }
        str = str.concat('\n')
    }
    console.log(str);
}

// incrementTraingle(5)

/*
A-Z letters
*/

let alphabets = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += (i+10).toString(36) + " ";
    }
    console.log(str);
}
// alphabets(26)

let tp = (n) => {

    let str = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n; j++) {
            
            if (i+j >= n) {
                str = str.concat('* ');
            } else {
                str = str.concat(' ');
            }
            
        }        
        str = str.concat('\n')
    }

    console.log(str);
    
}

tp(5)