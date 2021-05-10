/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = new Array(n).fill(1),
    cnt = Math.max(n - 2, 0);
  primes[0] = 0;
  primes[1] = 0;
  for (let i = 2; i ** 2 < n; i++) {
    if (!primes[i]) continue;
    for (let j = i ** 2; j < n; j += i) {
      primes[j] && cnt--;
      primes[j] = 0;
    }
  }
  return cnt;
};
