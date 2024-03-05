// 1. Reverse a string.
// let obj="shiva";
// let reverseword=obj.split("").reverse().join("")
// console.log("reverseword:", reverseword)

// 2. Find the maximum number in an array

// let number=[80,50,60,70,250,50]

// let maxnumber=number[0]
// for(let i=0;i<number.length;i++){
//     console.log(i)
//     console.log(number.length)
//     console.log(number[i])
//     console.log(maxnumber)
//    if(number[i]>maxnumber){
//        maxnumber=number[i]
//    }
// }
// console.log("maxnumber:", maxnumber)
// let max=Math.max(...number)
// console.log("max:", max)

// 3. Calculate the factorial of a number.
  
// let num=4;
// let fac=1
// debugger;
// for(num;num >=1;num--){
//       fac=fac*num
//       console.log(num)
//       console.log("fac:", fac)
//     }
// like =4x3x2x1=24
   


// 4. Check if a given number is prime.

//   let prime=5

//   prime numbers 2,5,7,11 evi 1 tho ledha sonthaga matra me % avithai ea 
   
// if(prime==1){
//     console.log("1 is not prime number")
// }else if(prime<1){
//     console.log("negative number are not prime numbers")
// }else{

//     for(let i=2;i<prime;i++){
//              if(prime%i==0){
//                 console.log("---not a prime")
//                 break
//              }else{
//                 console.log(`${prime} prime number`)
//              }
//     }
// }



// 5. Remove duplicates from an array.

//   let dublicate=[1,2,3,4,4,2,5,1]
  
//    let data= new Set(dublicate)
//    console.log("data:",[...data])

// 6. Check if a given string is a palindrome.
  
// palindrome ante oka padanni mundu nundi chadivina venada nundi chadivina same vasta di like dad,medam

// let pali="dad"
// let msg="plindrome string"

// for(let i=0;i<pali.length/2;i++){
//     if(pali[i] !== pali[pali.length-1-i]){
//         msg="not palindrom"
//         console.log(msg)
//     }else{
//         console.log(msg)
//     }
// }