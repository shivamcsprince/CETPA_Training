//Q1. Create a Function

function solve(obj) {
    obj.setter = function() {
        console.log(obj.name);
    };
    obj.setter();
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q2. Delete a Parameter

function solve(obj) {
    delete obj.rollno;
    return obj;
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q3. Dream Package Check

function solve(obj) {
    if (obj.salary > 500000) {
        return "Dream";
    } else {
        return "NotDream";
    }
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q4. Check whether Object has a parameter

function solve(obj) {
    if (Object.keys(obj).length === 0) {
        return "false";
    } else {
        return "true";
    }
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q5. Merge the Objects

function solve(obj1, obj2) {
    let mergedObj = Object.assign({}, obj1, obj2);
    return mergedObj;
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q6. Object Multiplier

function solve(obj, N) {
    obj.id = obj.id * N;
    obj.houseno = obj.houseno * N;
    return obj;
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q7. Find the Sum of Object Members

function Check(Obj) {
    return Obj.p1 + Obj.p2 + Obj.p3;
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q8. Check whether Objects are same

function solve(obj, new_name, new_id) {
    if (obj.name === new_name && obj.id === new_id) {
        return "true";
    } else {
        return "false";
    }
}