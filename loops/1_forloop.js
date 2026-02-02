console.log('Start of the loop');

/// for loop
let numbers = [2,3,4,5,6]
for (let i = 0; i < numbers.length; i++){
    //console.log(`The numbers are: ${numbers[i]}`)
} 
 
let numbers1 = [2,3,4,5,6]
for (let i = numbers1.length-1; i >= 0 ; i--){
    //console.log(`The numbers are reversed : ${numbers1[i]}`)
    }


let number2 = [2, 3, 4, 5, 6]
for (let i = 0; i< number2.length; i++){
    let num = number2[i];
    //console.log(`\n Table of ${num}`);

    for (let j= 1; j<=10; j++){
    //console.log(`${num} x ${j}= ${num*j}`)
    }
}


/// Print numbers from 1 to 10
for (let i = 0; i<=10; i++){
    console.log(`Numbers from 1-10: ${i}`)
};
///print number from 10 to 1
for (let i = 10; i>= 0; i--){
    console.log(`reversedz:${i}`)
}
///Print all even numbers between 1 and 20
for (let i = 1; i<=20; i++){
        if(i%2 === 0){
            console.log(`Even Numbers ${i}`)
        }
}

///Print all odd numbers between 1 and 20
for (let i = 1; i<=20; i++){
        if(i%2 === 1){
            console.log(`Odd Numbers ${i}`)
        }
}
///Print the square of numbers from 1 to 5

for (let i=1; i<= 5; i++){
    console.log(`Sq numbers: ${i*i}`)
}
//arry
let arr = [3, 6, 9, 12];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  //console.log(element)
    }
///sum
let sum = 0;
for ( i = 0; i < arr.length ; i++){
 sum = sum + arr[i];
}
 console.log(`${sum}`)
 ///max
console.log(Math.max(...arr))


