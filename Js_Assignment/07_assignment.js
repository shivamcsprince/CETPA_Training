// Q1 Find the number of digits
function Find_Digits(N) {
    return String(N).length;
}
console.log(Find_Digits(1234)); // 4



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q2 Find the Fives
function Find_Five(N) {
    return String(N).split('').filter(d => d === '5').length;
}
console.log(Find_Five(345654)); // 2




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q3 Find Sum of even integers from 1 to N
function findSum(N) {
    let sum = 0;
    for (let i = 2; i <= N; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(findSum(6));




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q4 Find the sum of digits of a given number
function Number_Sum(N) {
    return String(N).split('').reduce((sum, d) => sum + Number(d), 0);
}
console.log(Number_Sum(1234)); 




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q5 Print the Odds
function Print_Odd(N) {
    console.log(2);
    for (let i = 3; i <= N; i += 2) {
        console.log(i);
    }
}
Print_Odd(10); 



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q6 Print the Pattern
function Print_Pattern(N) {
    for (let i = 1; i <= N; i++) {
        console.log('*'.repeat(i));
    }
}
Print_Pattern(5);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q7 Check whether a Number is Prime or not
function Prime_Check(N) {
    if (N < 2) return 'NO';
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) return 'NO';
    }
    return 'YES';
}
console.log(Prime_Check(7)); // YES
console.log(Prime_Check(4)); // NO




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q8 Print Numbers from 1 to N
function printNumbers(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}
printNumbers(4); 




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q9 Print the Table
function Print_Table(N) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${N}*${i}=${N * i}`);
    }
}
Print_Table(3);