const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let highestScore = 0;
  vegetables.forEach(function (vegetable){
    //must use bracket notation for it to work
    if (vegetable[metric] >= highestScore) {
      winner = vegetable.submitter;
      highestScore = vegetable[metric];
    }
  });
  console.log(winner);
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)