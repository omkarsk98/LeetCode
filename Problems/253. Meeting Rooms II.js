/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const startTimes = intervals.map(el => el[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(el => el[1]).sort((a, b) => a - b);
  let st = 0, en = 0, len = startTimes.length, cnt = 0;
  while (st < len) {
    if (startTimes[st] >= endTimes[en]) {
      cnt--;
      en++;
    }
    cnt++;
    st++;
  }
  return cnt;
};