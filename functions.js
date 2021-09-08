// function sum(a,b){
//     return a+b;
// }

// function fibonic(z){


//     var inital  = [0,1];
//     var output;
    
//     for(i=0 ; i<z-2; i++){
    
//             output = inital[i]+inital[i+1];
//             inital.push(output);
        
        
//     }

//     return inital;
    
// }

// var z = sum(1,4);
// var sumup = fibonic(z);
// //console.log(sumup);

// function add(sumup){

//      var adding = 0;    
//     for(i=0; i<sumup.length; i++){
//          adding += sumup[i];
//     }
//     return adding;
// }

// console.log(add(sumup));


// var x = [1,2,2,3,3,3,4];

// function dupli(x){

//     var z = {};

//     for(i=0; i<x.length; i++){
//         z[x[i]] = 0; 
//     }

//     for(j=0; j<x.length; j++){
//           z[x[j]] += 1; 
                 
//     }
//   return z;
// }
// console.log(dupli(x));


// //to find length
// var x = [1,2,2,3,3,3,4];
// function sum(x){
//     var z =0;
// for(i=0; i<=x.length-1; i++){
//     z += 1;
// }
// return z 
// }

// console.log(sum(x));


// var x = [1,2,3,4,5];

// function list(x){
// var arr=[];
// for(i=x.length-1; i>=0; i--){
//       arr.push(x[i]); 
// }
// return arr;
// }


// var str = list(x).join("");


// function num(str){
//     var addnum = 0;
//     for(i=0; i<str.length; i++){
//         addnum += parseInt(str[i]);
//     }
//     return addnum;
// }

// console.log(num(str));