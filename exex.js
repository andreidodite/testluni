// function myFunction(fparam,sparam) {
//     if (fparam > sparam) {
// return 1;
//     } else { 
//      if (fparam == sparam) {
//         return 2;
//     } else {
//         return 3;
//     }
//     }
// }
// console.log(myFunction(2,3));

let number = 1;
// console.log(typeof number + ':' number);
// let number = 1;
// let string = '1';
// console.log(typeof number + '+' number);
// var number = 1;



// function add2toX(x)  {
//     let y = 2;
//     console.log(a)

//     return x + y;
// }
// var number = 1;


// switch (key) {
//     case value:
//         break;

//         default:
//             break;




var array = [8,2,3,7,5,4,1];
function sortare(arr) {
    for(let j=0;j<arr.length;j++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }      
    return arr;
}
console.log(sortare(array));