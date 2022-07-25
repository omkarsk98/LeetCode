/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
  passengers.sort((a, b) => a - b);
  buses.sort((a, b) => a - b);

  let pPtr = 0, bPtr = 0, pLen = passengers.length, bLen = buses.length, pCnt = 0, pCache = new Set(passengers);
  const busesStack = Array.from(new Array(bLen), () => new Array());
  while (pPtr < pLen && bPtr < bLen) {
    if (passengers[pPtr] <= buses[bPtr]) {
      // arrived before bus departs
      if (pCnt < capacity) {
        // can be accomodated
        busesStack[bPtr].push(passengers[pPtr]);
        pCnt++;
        pPtr++;
      }
    }
    else if (buses[bPtr] < passengers[pPtr]) {
      // bus left before this passenger came
      bPtr++;
      pCnt = 0;
    }
    if (pCnt === capacity) {
      // bus full. move to next bus
      pCnt = 0;
      bPtr++;
    }
  }
  let i = bLen - 1;
  while (i >= 0) {
    const stack = busesStack[i];
    let j = stack.length - 1;
    // vacant spot and last guy came before bus left. this guy can come at the time of bus leaving
    if (stack.length < capacity && stack[j] !== buses[i])
      return buses[i];
    // vacant spot and last guy came way before bus left
    if (stack.length < capacity && stack[j] + 1 < buses[i])
      return stack[j] + 1;
    while (j >= 0) {
      if (!pCache.has(stack[j] - 1))
        return stack[j] - 1;
      j--;
    }
    i--;
  }
  return -1;
};
/* 
[10,20]
[2,17,18,19]
2
[20,30,10]
[19,13,26,4,25,11,21]
2
[3]
[2,4]
2

*/