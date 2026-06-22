
//question 1

const AddTwoNumbers= function(num1,num2){
    console.log(num1+num2)
}
AddTwoNumbers(2,6)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// question 2

const Is_Valid= function(num1,num2){
    console.log(num1<10 && num2<num1);
}
Is_Valid(5,3)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 3

const Check= function(a,b){
    console.log((a%10!=0 && b%10!=0)?"false":"true")
}
Check(2,3)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// question 4

const First_Digit= function(num){
    console.log(Math.floor(num/1000));
}
First_Digit(1456)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 5

const Last_Digit = function(numb1){
    console.log(numb1%10);
}
Last_Digit(5356476567)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 6

const Find_the_remainder = function(divisor,dividend){
    console.log(dividend%divisor);
   
}
Find_the_remainder(2,9)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 7
function Multiply_two_number(num1,num2){
    console.log(num1*num2);
}
Multiply_two_number(5,4);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function Sum(a,b,c){
    console.log(a+b+c);
}
Sum(89,59,83);
function Average(a,b,c){
    console.log((a+b+c)/3);
}
Average(89,59,83)