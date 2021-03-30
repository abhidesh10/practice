function LongestWord(sen) { 
    let filterSen = sen.match(/[a-z0-9]+/gi);
    
    return filterSen.sort((a, b) => { return b.length - a.length});
}

console.log(LongestWord("Banana fun time Banana12 Apple Banana1"));