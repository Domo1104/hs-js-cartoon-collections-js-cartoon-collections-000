function dwarfRollCall(dwarves) {
  let line = []
  for (let i = dwarves.length/2; i < dwarves.length; i++) {
    line.push(`${i + 1}. ${dwarves[i]} `)
  }  return line.join("")
}

function summonCaptainPlanet(planeteerCalls){
  let newCall = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    newCall.push(`${planeteerCalls[i]}!`.toUpperCase())
  }return newCall
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } 
} return false
} 

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
       return "cheddar"
    } if (foods[i] === "gouda") {
      return "gouda"
    } if (foods[i] === "camembert") {
      return "camembert" 
    }
  }return "no cheese!"
}

function wordsWithB() {
  
}