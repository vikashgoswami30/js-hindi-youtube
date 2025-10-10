const marverl_heros = ["Thor", " Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marverl_heros.push(dc_heros)
// console.log(marverl_heros);
// console.log(marverl_heros[3][1][2]);

// const new_heros = marverl_heros.concat(dc_heros)
// console.log(new_heros);

// const all_new_heros= [...marverl_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4,5,6] , 7 , [6,7, [4,5]] ]

const real_another_array = anotherArray.flat(Infinity) 
console.log(real_another_array);

console.log(Array.isArray("Vikash"));
console.log(Array.from("Vikash"));

console.log(Array.from({name:"Vikash"})); 

