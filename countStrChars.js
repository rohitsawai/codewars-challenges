/**
 * ref: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 * @param {*} string 
 * @returns 
 */

function count(string) {
  // TODO
  const cnt = string.split("").reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += 1;
      return acc;
    }
    acc = {...acc, [curr]: 1 };
    return acc;
  }, {});
  return cnt;
}

console.log(count("aba"));
