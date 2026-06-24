//question 1

function findGrades(M){
  switch (true) {
    case M <= 10:
      return "Grade E";
      break;
    case 10<M && M<=20:
      return "Grade D";

      case 20<M && M<=30:
      return "Grade C";
      case 30<M && M<=40:
      return "Grade B";
      
      case 40<M && M<=50:
      return "Grade A";
  }
}
let g=findGrades(33)
console.log(g);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//question 2
function getValue(char){
  if(char=='P' || char=='p'){
    return  'PrepBytes';
  }
  if(char=='Z' || char=='z'){
    return  'Zenith';
  }
  if(char=='E' || char=='e'){
    return   'Expert_Coder';
  }
  if(char=='D' || char=='d'){
    return  'Datastructure';
  }
}
console.log(getValue('e'));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 3
function Max_out_of_three(A,B,C){
if(A>B){
  return A;
}
if(B>C){
  return B;
}
if(C>A){
  return C;
}
if(A==B &&B==C){
  return "-1-1"
}
}
console.log(Max_out_of_three(2,5,7));
console.log(Max_out_of_three(7,7,7));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 4
const findSndSmallest=function(a,b,c){ // 2   9   23
  if ((b <= a && a <= c) || (c <= a && a <= b)){
    return a;
  } else if ((a <= b && b <= c) || (c <= b && b <= a)){
    return b;
  } else {
    return c;
  }
}

console.log(findSndSmallest(9,2,23));
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//question 5

function Triangle_Check(x,y,z){
  if(x>90||y>90||z>90){
    return "obtuse triangle";
  }else{
    return "acute traingle"
  }
}
console.log(Triangle_Check(45,35,100));
