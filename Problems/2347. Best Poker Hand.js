/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (_.every(suits, el => el === suits[0])) return "Flush";
  const rankCounts = _.countBy(ranks);
  let three = false, two = false;
  for (let num in rankCounts) {
    if (rankCounts[num] >= 3) {
      three = true;
      break;
    }
    if (rankCounts[num] >= 2) {
      two = true;
      break;
    }
  }
  if (three) return "Three of a Kind";
  if (two) return "Pair";
  return "High Card";
};