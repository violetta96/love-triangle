/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = 0;
  for (var i = 1; i <= preferences.length; i++) {
    if (preferences[preferences[preferences[i-1]-1]-1] === i) {
      triangles++;
    }
  }
  return Math.floor(triangles / 3);
};
