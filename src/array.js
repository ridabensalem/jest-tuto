//Question 1
let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
let primeNumbers = primeNumber(arr)
function primeNumber(){
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 1 === 0 && arr [i] % arr [i] === 0){
            return true
        } else return false
}

//Question 2
let average = averageOfArr(arr)
function averageOfArr(){
    let avrg = 0;
    for (let i = 0; i < arr.length; i++){
        avrg += arr[i] / arr.length;
    }
    return avrg
}

module.exports={primeNumbers, average};
