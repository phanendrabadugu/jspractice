// var x = [1,2,4,4,5,6,4,4];

// var num = 4;
// count = 0;

// for(i=0; i<x.length; i++){
    
//     if(num==x[i]){
//         count++
//     }
// }
// console.log(count);

// var x = [1, 6, 6, 3, 3, 5, 4, 5];
// x = x.sort((a,b)=>a-b);

// var temp = [];

// for(i=0; i<x.length-1; i++){
//     if(x[i]!=x[i+1]){
//         temp.push(x[i]);
//     }
// }
// //console.log(temp);
// temp.push(x[x.length-1]);

// console.log(temp); 

//Chef and Operators


// var x = parseInt(window.prompt("Enter First Number"));
// var y = parseInt(window.prompt("Enter Second Number"));

// if(x>y){
    
//     document.getElementById("print").innerHTML= ">";
// }else if(x<y){
    
//     document.getElementById("print").innerHTML= "<";
// }else {
    
//     document.getElementById("print").innerHTML= "=";
// }

// //Chef and remissness


// // Triangle

// var x = parseInt(window.prompt("Enter First Number"));
// var y = parseInt(window.prompt("Enter Second Number"));
// var z = parseInt(window.prompt("Enter Third Number"));
// var a = x+y+z;

// if(a==180){
//     document.getElementById("print").innerText= "YES";
//     } else {
//     document.getElementById("print").innerText= "NO";
//     }



// //Decrement OR Increment

// var x = 5;
// if(x%4==0){
//     console.log(x+1);
// } else{
//     console.log(x-1);
// }


///////////////////29/08/2021

//Block Game

// var x = "343";
// var y = x.split("");
// var z = [];

// for(i=y.length-1; i>=0; i--){
//     z.push(y[i]);
// }

// z = z.join("");
// console.log(z);
// console.log(x);
// if(z==x){
//     console.log("You Win")
// }else{
//     console.log("Try Again")
// }


// Id and Ship
// var x = window.prompt("Enter Any of b,c,d,f");

// switch(x){

//     case "b":
//          console.log("Battle");
//          break;
//     case "c":
//         console.log("Cruiser");
//         break;
//     case "d":
//         console.log("Destroyer");
//         break;
//     case "f":
//         console.log("Frigate");
//         break;
//     default:
//         console.log("Enter Any One of b,c,d,f");
// }

// other Method

// var a = "B";
// var value = 0;
// var x = ["b", "c", "d", "f"];
// var y = ["Battle", "Cruiser", "Destroyer", "Fatigate"];

// for(i=0; i<x.length; i++){
    
//     if(a.toLowerCase()===x[i]){

//         value=y[i]

//     }
// }
// if(value===0){
//     console.log("Enter Any One of b,c,d,f");
// }else{
//     console.log(value);
// }



//31/08/2021


// var a = parseInt(window.prompt("Enter First Number"));
// var b = parseInt(window.prompt("Enter Second Number"));
// var x = [a,b];
// var y;

// for(i=0; i<12; i++){
//     y = x[i]+x[i+1]
//     x.push(y)
// }
// console.log(x);


var input = parseInt(window.prompt("Enter A Number"));
var inital  = [0,1];
var output;

// if(input>inital.length){
//     inital = inital.length
// }

for(i=0 ; i<input-2; i++){

        output = inital[i]+inital[i+1];
        inital.push(output);
    
    
}

console.log(input);
console.log(inital);


// input=10


// x=[]

// x[0]=0 
// x[1]=1 


// for(i=2;i<input;i++)

// {
  
  
 
  
  
//   x[i]=x[i-1]+x[i-2]
  
  
  
  
  
  
  
  
// }

//  console.log(x)