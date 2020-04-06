
function sum(a,b){
  return a + b + 2;
}

function randomizer(num){
  return num + Math.floor((Math.random() * 10) - 5);
}

module.exports = {
  sum,randomizer
}
