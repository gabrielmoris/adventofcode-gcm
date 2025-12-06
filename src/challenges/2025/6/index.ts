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

  const numbers = columns.map(
    (column) => column.split(" ").map(Number)
    // .filter((num) => num !== 0) Not  needed because it tells me the possition of the numbers to calculate from right to left
  );

  let colPosition = 0;

  while (operators && colPosition < operators?.length) {
    let total = 0;
    const currOperator = operators[colPosition];
    // 1. I terate over the columns and separate them on an array of numbers. (3d array)\
    // 2. I iterate over the 3d array and sum the numbers of each column. (From right to left of each column. we have tot ake into account the 0 that are the spaces!)
  }

  return solution;
};
