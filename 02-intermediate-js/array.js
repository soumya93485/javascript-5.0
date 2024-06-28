// let marks =[67,98,56,43,98];

// console.log(marks);
// console.log(typeof marks)
// console.log(marks.length)

// console.log(marks[0]); //67
// console.log(marks[3]); //43

// marks[0] = 66;
// console.log(marks);

// let heros = ["ironman","batman","hulk","thor"];

// // for (let i =0; i < heros.length;i++)
// //     {
// //         console.log(heros[i]);
// //     }

// for (let hero of heros)
//     {
//         console.log(hero);
//     }


// let cities = ["delhi","mumbai","pune","bhubaneswar"]

// for (let city of cities)
//     {
//         console.log(city.toUpperCase());
//     }

// let marks = [85,97,44,37,76,60];
// sum= marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
// // console.log(sum);
// let avg = sum / marks.length;
// console.log(avg);


// let marks = [85,97,44,37,76,60];
// let sum = 0 ;
// for(mark of marks)
//     {
//         sum = sum+ mark;
//     }
// let avg = sum / marks.length;
// console.log(avg);

let items =[250,645,300,900,50];
 let i = 0;
 for(let val of items)
    {
        console.log(`value at index ${i}=${val}`);
        let offer = val / 10 ;
        items[i] = items [i] - offer;
        console.log(`value after offer = ${items[i]}`);
        i++;
    }



