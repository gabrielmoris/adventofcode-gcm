export const solutionFn = ({ arg }: { arg: string }) => {
  const columns = arg.split("\n");
  const operators = columns
    .pop()
    ?.split(" ")
    .filter((operator) => operator !== "");

  const numbers = columns.map((column) =>
    column
      .split(" ")
      .map(Number)
      .filter((num) => num !== 0)
  );
  return operateNumbers(operators, numbers);
};

const operateNumbers = (operators: string[] | undefined, numbers: string | any[]) => {
  let colPosition = 0;
  let solution = 0;

  while (operators && colPosition < operators?.length) {
    let total = 0;
    const currOperator = operators[colPosition];

    for (let row = 0; row < numbers.length; row++) {
      if (currOperator === "*") {
        if (total === 0) {
          total = 1;
        }
        total *= numbers[row][colPosition];
      } else if (currOperator === "+") {
        total += numbers[row][colPosition];
      }
    }

    solution += total;
    total = 0;
    colPosition++;
  }

  return solution;
};

export const solutionFn2 = ({ arg }: { arg: string }) => {
  const columns = arg.split("\n");
  const operators = columns
    .pop()
    ?.split(" ")
    .filter((operator) => operator !== "");

  const rotatedNumbers: number[][] = buildVerticalNumbers(columns);
  console.log("Rotated Numbers", rotatedNumbers);
  return operateNumbers(operators?.reverse(), rotatedNumbers);
};

const isSeparator = (grid: string[][], col: number, height: number): boolean => {
  for (let row = 0; row < height; row++) {
    if (grid[row][col] !== " " && grid[row][col] !== undefined) return false;
  }
  return true;
};

const buildVerticalNumbers = (columns: string[]): number[][] => {
  const grid = columns.map((line) => line.split("").map((column) => (column === " " ? " " : column)));

  const rowLength = grid[0].length;

  console.log(grid);
  // From here rebuild the array starting from grid[grid.lenght-1][rowLength-1] and making the numbers until I have the new arrays.

  return [[]];
};
