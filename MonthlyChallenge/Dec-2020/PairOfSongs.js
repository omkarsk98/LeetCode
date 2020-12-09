// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/570/week-2-december-8th-december-14th/3559/
const numPairsDivisibleBy60 = function (time) {
  let cnt = 0;
  for (let i = 0, len = time.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const sLen = time[i] + time[j];
      if (sLen % 60 == 0)
        cnt++;
    }
  }
  return cnt;
};
const time = [439,407,197,191,291,486,30,307,11];
console.log(numPairsDivisibleBy60(time));