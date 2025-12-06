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
