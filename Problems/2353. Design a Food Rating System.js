/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.cuiMaxHeaps = {}, this.foodMaps = {};
  this.len = foods.length;
  for (let i = 0; i < this.len; i++) {
    if (!this.cuiMaxHeaps[cuisines[i]]) {
      this.cuiMaxHeaps[cuisines[i]] = new MaxPriorityQueue({
        compare: (a, b) => {
          if (a.rat === b.rat) return a.food >= b.food ? 1 : -1;
          return b.rat - a.rat;
        }
      });
    }
    this.cuiMaxHeaps[cuisines[i]].enqueue({ rat: ratings[i], food: foods[i] });
    this.foodMaps[foods[i]] = [ratings[i], cuisines[i]];
  }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  const cui = this.foodMaps[food][1];
  this.foodMaps[food][0] = newRating;
  this.cuiMaxHeaps[cui].enqueue({ rat: newRating, food });
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const maxHeap = this.cuiMaxHeaps[cuisine];
  let item = maxHeap.front();
  while (item.rat !== this.foodMaps[item.food][0]) {
    maxHeap.dequeue();
    item = maxHeap.front();
  }
  return item.food;
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */