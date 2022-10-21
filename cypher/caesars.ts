function rot13(str): string {
  const tempAlphas: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const tempAlpObj = {};
  for (let i = 0; i < tempAlphas.length; i += 1) {
    tempAlpObj[tempAlphas[i]] = i;
  }
  let tempRes: string = "";
  for (let letter of str) {
    if (letter === " " || letter.match(/\W/)) {
      tempRes = `${tempRes}${letter}`;
      continue;
    }
    let idx: number = tempAlpObj[letter] + 13;
    if (idx > 25) {
      idx = (idx % 25) - 1;
      tempRes = `${tempRes}${tempAlphas[idx]}`;
      continue;
    }
    tempRes = `${tempRes}${tempAlphas[idx]}`;
  }
  return tempRes;
}
