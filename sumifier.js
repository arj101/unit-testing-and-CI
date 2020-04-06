
function sum(a,b){
  return a + b;
}

function randomizer(num){
  return num + Math.floor((Math.random() * 10) - 5);
}

function prod(a,b){
 return a * b;
}


module.exports = {
  sum,randomizer,prod
}
