// How to find the largest string from an array and show its index number

function longestString(names) {
    let longestWord = '';
    for (name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }
    return [longestWord, names.indexof(longestWord)]
}
console.log(longestString(['Lubaba Anjum', 'Keya Mudok Tiya', 'Rahin Ahsan', 'Duniya']));