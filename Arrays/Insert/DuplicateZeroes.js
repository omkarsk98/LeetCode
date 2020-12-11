const { iteratee } = require('underscore');

const expect = require('chai').expect;

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  const res = [...arr], len = res.length;
  let i = j = 0;
  // console.log("Init:", res);
  while(j<len){
      // console.log("Checking", j, res[j]);
      if(res[i]!=0)
          arr[j++] = res[i++];
      else{
          arr[j++] = 0;
          if(j<len)
            arr[j++] = 0;
          i++
      }
      // console.log("arr:", arr);
  }
  // console.log("Res:", res);
  // console.log("New arr:", arr);
};

describe("Testing duplicate Zeroes", ()=>{
  let id = 1;
  it(`${id++} [1,0,2,3,0,4,5,0]`, ()=>{
    let arr = [1,0,2,3,0,4,5,0];
    duplicateZeros(arr);
    expect(arr).to.be.eql([1,0,0,2,3,0,0,4]);
  });
  it(`${id++} [1,2,3]`, ()=>{
    let arr = [1,2,3];
    duplicateZeros(arr);
    expect(arr).to.be.eql([1,2,3]);
  });
  it(`${id++} [0,0,0,0,0,0,0]`, ()=>{
    let arr = [0,0,0,0,0,0,0];
    duplicateZeros(arr);
    expect(arr).to.be.eql([0,0,0,0,0,0,0]);
  });
  // 
})

// let arr = [1,0,2,3,0,4,5,0];
// duplicateZeros(arr);
// console.log("Arr:", arr);