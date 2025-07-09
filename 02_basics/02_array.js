const marvel_heroes = ["Thor", "Ironman", "Batman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
const newHeroes = marvel_heroes.concat(dc_heroes);
console.log(newHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const depthArray = [1,2,[3,4],[5,6,[7,8]]]
const flatArray = depthArray.flat(2)
const flatArray1 = depthArray.flat(Infinity)
console.log(flatArray);
console.log(flatArray1);


console.log(Array.isArray("Jagruti"));
console.log(Array.from("Jagruti"));

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));


