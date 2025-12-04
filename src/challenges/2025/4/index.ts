export const solutionFn = ({ arg }: { arg: string }) => {
  let rollsOfPaper = 0;
  const lineOfPaper = arg.split("\n");

  const arrayOfRollsOfPaper = lineOfPaper.map((line) => [...line.split("")]);

  arrayOfRollsOfPaper.forEach((line, index) => {
    line.forEach((_cell, index2) => {
      const numberOfNeighbours = checkArroundRoll(arrayOfRollsOfPaper, index, index2);
      numberOfNeighbours < 4 && rollsOfPaper++;
    });
  });

  return rollsOfPaper;
};

const checkArroundRoll = (arrayOfRollsOfPaper: string[][], row: number, col: number) => {
  const target = arrayOfRollsOfPaper[row][col];

  if (target === ".") return 100;

  const top = arrayOfRollsOfPaper[row - 1]?.[col] === "@" ? 1 : 0;
  const topRight = arrayOfRollsOfPaper[row - 1]?.[col + 1] === "@" ? 1 : 0;
  const right = arrayOfRollsOfPaper[row]?.[col + 1] === "@" ? 1 : 0;
  const bottomRight = arrayOfRollsOfPaper[row + 1]?.[col + 1] === "@" ? 1 : 0;
  const bottom = arrayOfRollsOfPaper[row + 1]?.[col] === "@" ? 1 : 0;
  const bottomLeft = arrayOfRollsOfPaper[row + 1]?.[col - 1] === "@" ? 1 : 0;
  const left = arrayOfRollsOfPaper[row]?.[col - 1] === "@" ? 1 : 0;
  const topLeft = arrayOfRollsOfPaper[row - 1]?.[col - 1] === "@" ? 1 : 0;

  return top + topRight + right + bottomRight + bottom + bottomLeft + left + topLeft;
};
