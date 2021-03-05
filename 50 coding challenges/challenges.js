// 1. Display numbers from 1 to 10 - fara defer la script in html

// for (let i = 1; i < 11; i++) {
//     document.write(i + "<br>")
// }


// 2. Display the odd numbers less than 100

// for (let i = 1; i < 100; i+=2) {
//     document.write(i + "<br>")
// }


// 3. Display the multiplication tabel with 7

// for (let i = 7; i < 8; i++) {
//     for (let j = 0; j < 11; j++) {
//         let product = i * j
//         document.write(i + " x " + j + " = " + product + "<br>")
//  }
    
// }

// 4. Display the multiplication tables with numbers from 1 to 10

// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         let product = i * j
//         document.write(i + " x " + j + " = " + product + "<br>")
        
//     }  
// }


// 5. Display the sum of numbers from 1 to 10

// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         let sum = i + j
//         document.write(i + " + " + j + " = " + sum + "<br>")
        
//     }  
// }

// 6. Calculate 10!


    // var total=1;
    // for (i = 2; i <= 10; i++)
    //     total = total * i;
    // document.write(total)

// 7. Calculate the sum of even numbers greater than 10 an less than 30

// var sum = 0
// for (let i = 10; i < 31; i+=2) {
//     sum += i 
//  
// }
// console.log(sum)

// 8. Create a function that will convert from Celsius to Fahrenheit

// document.querySelector("input[type='button']")
// .addEventListener("click", convert)


// function convert() {
//     let number = document.querySelector("#number").value
//     let convertF = number * (9/5) +32

//     document.querySelector("#result").innerText = ("Result: ") + convertF
// }

// 9. Create a function that will convert from Fahrenheit

// document.querySelector("input[type='button']")
// .addEventListener("click", convert)


// function convert() {
//     let number = document.querySelector("#number").value
//     let convertC = (number - 32) / 1.8

//     document.querySelector("#result").innerText = ("Result: ") + convertC
// }


// 10. Calculate the sum of numbers in an array of numbers 

// var total = 0
// let ar = [10, 5, 20, 10, 15]

//     for (let i = 0; i < ar.length; i++) {
//         total = total + ar[i] 
//     }
// console.log(total)

// sau

// ar.reduce((sum, value) => sum + value)


// 11. Calculate the average of the numbers in an array of numbers

// var total = 0
// let ar = [10, 5, 20, 10, 15]

//     for (let i = 0; i < ar.length; i++) {
//         total = total + ar[i] / ar.length
//     }
// console.log(total)

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

// let ar = [1, -1, 2, -2, 3, -3, 5, -6]

// ar = ar.filter(function(x){
//     return x > -1
// })

// console.log(ar)


// 13. Find the maximum number in an array of numbers

// let ar = [60, 59, 48, 71, 53, 47, 64, 45, 51, 70]

// ar.sort()

// max = ar.pop()

// console.log(max)

// //sau

// ar.reduce((max, value) => max > value ? max: value)

// 14. Print the first 10 Fibonacci numbers without recursion

var fib = [0, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 


