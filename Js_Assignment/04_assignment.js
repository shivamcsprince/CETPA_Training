//Q1. Find the Product
function Find_Prod(arr){
let prod=1;
arr.forEach(a => {
prod*=a;  
});
return prod;
}
console.log(Find_Prod([2,3,4,5,6]));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q2. Find the Sum

function Find_Sum(n,num){
  let sum=0;
  for(let i=0;i<n;i++){
    sum+=num[i]
  }
  return sum;
}
console.log(Find_Sum(5,[1,2,3,4,5]));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q4. Even Odd

function findEvenOdd(num){
  let evensum=0;
  let oddsum=0;
  num.forEach(x=>{
    if(x%2==0){
      evensum+=x;
    }
    else{
      oddsum+=x;
    }
  })
  return [evensum,oddsum]
}

console.log(findEvenOdd([2,3,4,5,6,7,8,9,1]));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q5. Find whether the number is present or not

function Find_Num(num){
  console.log(num.includes(5));
}
Find_Num([1,2,3,4,5]);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q6. Higher Age

function highAge(age){
  let res=[];
  for(let i=0;i<age.length;i++){
   if(age[i]>=18){
     res.push(age[i]);
   }
  }
  return res;
}

console.log(highAge([23,8,34,21,14,18,16]));



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q7. Increment the Array Elements

function Inc_Arr(arr){
  let res=[];
  for(let i=0;i<arr.length;i++){
    res.push(arr[i]+1);
  }
  return res;
}
console.log(Inc_Arr([1,2,3,4,5]));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q8. Pass or Fail

function  isAllPass(marks){
  for(let i=0;i<marks.length;i++){
    if(marks[i]<32){
      return "NO";
    }
  }
  return "YES";
}
console.log(isAllPass([32,44,13,55,66,33,51,12]));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q9. Unique Color Shirt

function color_shirt(arr){
  arr.sort((a, b) => a - b);
  let count=0
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            count++;
        }
    }
    return count;
}
console.log(color_shirt([2,3,4,2,1]));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q10. Min and Max

function find_min_max(nums){
  nums.sort((a, b) => a - b);
  return [nums[0],nums[nums.length-1]];
  
}
console.log(find_min_max([33,77,11,99,23]));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++