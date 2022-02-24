// Print all even numbers from 0 - 10
for(let i = 0; i<=10; i+=2){
    console.log(i)
}

// Print the multiplication table between 1 to 10
let res = '\n'
let nums = [1,2,3,4,5,6,7,8,9,10,11,12]
nums.forEach((i) => {
    for(let j = 1; j < 13; j++){
        res += j*i + '  '
    }
    console.log(res += '\n')
});