export const solutionFn = ({ arg }: { arg: string }) => {
  let solution = 0;

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

  let colPosition = 0;

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
  let solution = 0;
  const columns = arg.split("\n");
  const operators = columns
    .pop()
    ?.split(" ")
    .filter((operator) => operator !== "");

  const rotatedNumbers: number[][] = buildVerticalNumbers(columns);
  if (!operators) throw new Error("No operators!");
  const reversedOperators = operators.reverse();

  for (let i = 0; i < reversedOperators.length; i++) {
    let total = 0;
    rotatedNumbers[i].forEach((num) => {
      if (reversedOperators[i] === "*") {
        if (total === 0) {
          total = 1;
        }
        total *= num;
      } else if (reversedOperators[i] === "+") {
        total += num;
      }
    });
    solution += total;
    total = 0;
  }

  return solution;
};

const buildVerticalNumbers = (columns: string[]): number[][] => {
  const grid = columns.map((line) => line.split("").map((column) => (column === " " ? " " : column))).map((line) => line.reverse());
  const verticalNumbers: number[][] = [];
  const rowLength = grid[0].length;
  let currentNumbersRow: number[] = [];

  for (let i = 0; i < rowLength; i++) {
    let num = "";

    for (let j = 0; j < grid.length; j++) {
      num += grid[j][i];
    }

    if (Number(num) !== 0) {
      currentNumbersRow.push(Number(num));
    } else {
      verticalNumbers.push(currentNumbersRow);
      currentNumbersRow = [];
    }
  }
  verticalNumbers.push(currentNumbersRow);
  return verticalNumbers;
};
