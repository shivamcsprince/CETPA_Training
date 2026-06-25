// Q1. Count Characters
function countCharacters(str){
  let countA=0;
  let countD=0;
  const arr=[...str]
  arr.forEach(element => {
    if(element=="A"){
     countA++;
    }
    if(element=="D"){
    countD++;
    }
  });
  return [countA,countD]

}
console.log(countCharacters("AbaDd"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Q2. Count the Heads

// function CountHead(head){
//   let arr=[...head];
//   let count=0;

// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q3. Count the Vowels
function  Count_Vowel(str){
  const arr=[...str]
  let count=0;
  arr.forEach(x =>{
    if(x=="a"||x=='e' ||x=='i' || x=='o' || x=='u'){
      count++;
    }
  })
  return count;
}
console.log(Count_Vowel("sdadhgahvi"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q4. Concatenate the Strings

function Concatenate_Strings(str1,str2){
  console.log(`${str1}${str2}`)
}
Concatenate_Strings("shivam","prince")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q5. Find Length

function  findLength(str){
  console.log(str.length);
  
}
findLength("jhdvghjvghvbnvhjvhjvh")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q6. Find the Winner

function Game_Winner(str){
  let countA=0;
  let countD=0;
  const arr=[...str];
  arr.forEach(x=>{
    if(x=='A'){
      countA++
    }
    else if(x=='D'){
      countD++
    }

  });
  if(countA==countD){
    console.log("DRAW");
  }
  else if(countA>countD){
    console.log("winner is aditya");
  }
  else{
    console.log("winner is danis");
  }
}

Game_Winner('ADDDDDDDAAA')


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q7. Join Strings

function  joinString(str1,str2){
  return str1+str2;
}
console.log(joinString("jsdcvhj","shjvhj"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q8. Plaindrome Check
 function  Plain_Check(S) {
    const reversedStr = [...S].reverse().join('');
    if (S === reversedStr) {
        return "True"; 
    } else {
        return "False"; 
    }
}
console.log( Plain_Check("naman")); 
console.log( Plain_Check("Naman")); 

