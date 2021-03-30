let traditionalWay = (array) => {
    let a;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                a = array[i];
                array[i] = array[j];
                array[j] = a;
            }
        }
    }
}

console.time("TIME :")
let array = Array.from({length: 10}, (_, i) => (Math.floor(Math.random() * 10) + 1))
traditionalWay(array);
console.timeEnd("TIME :")