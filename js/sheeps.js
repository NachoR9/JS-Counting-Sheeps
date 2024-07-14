export function countSheeps(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === true) {
      count++;
    } 
  }
  if (count === 0) {
    return `UPS!!! Wolfs eaten Sheeps`
  }
  return `There are ${count} sheep in total`;
}

