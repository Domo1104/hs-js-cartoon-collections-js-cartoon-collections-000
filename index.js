function dwarfRollCall(dwarves) {
  var line = []
  for (let i = 0; i < dwarves.length; i++)
 line.push(`${i + 1}. ${dwarves[i]} `) 
 return line.join("")
}

function summonCaptainPlanet(planeteerCalls){
  let capitalize = []
  for (let i = 0; i < planeteerCalls.length; i++) {
    capitalize.push(`${planeteerCalls[i]}!`.toUpperCase())
  } 
  return capitalize
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } return false
  }
}
    

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if ("gouda" === foods[i]) {
     return "gouda" 
    } if ("cheddar" === foods[i]) {
      return "cheddar"
    } if ("camembert" === foods[i]) {
      return "camembert"
    }
  }return "no cheese!"
}
