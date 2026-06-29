//Q1. Find the Smaller Angle

function Minimal_Angle(h, m) {
   
    let hourAngle = (h % 12) * 30 + m * 0.5;
    let minuteAngle = m * 6;

    let angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
console.log(Minimal_Angle(5, 30)); 
console.log(Minimal_Angle(6, 0));  

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q2. Leap Year Check

function Check_Leap(N) {
    if ((N % 4 === 0 && N % 100 !== 0) || (N % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Non Leap Year";
    }
}
console.log(Check_Leap(1900)); 
console.log(Check_Leap(2012)); 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q3. Perfect Number Check

function Perfect_Check(N) {
    if (N === 1) return "YES";

    let sum = 1; 
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            sum += i;
            if (i !== N / i) sum += N / i; 
        }
    }

    return sum === N ? "YES" : "NO";
}

console.log(Perfect_Check(6));     
console.log(Perfect_Check(28));    
console.log(Perfect_Check(96345)); 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q4. Reverse a Number

function Reverse_Number(N) {
    let reversed = parseInt(String(N).split('').reverse().join(''));
    return reversed;
}
console.log(Reverse_Number(1900)); 
console.log(Reverse_Number(2012)); 




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q5. Substring Check

function Substring_Check(S1, S2) {
    return S2.includes(S1) ? "YES" : "NO";
}

console.log(Substring_Check("Prepbuddy", "Hii this is Prepbuddy")); 
console.log(Substring_Check("Prepbuddy", "Prepbytes"));             