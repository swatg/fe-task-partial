export function validArray(arr) {
  return arr && arr.length > 0;
}

export function sortByPopularity({popularity : popularity1}, {popularity : popularity2}) {
  return Number(popularity2) - Number(popularity1);
}
