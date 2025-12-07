export const solutionFn = ({ arg }: { arg: string }) => {
  let numberOfSplits = 0;
  const lines = arg.split("\n");
  const grid = lines.map((line) => line.split(""));
  let beams = new Array(grid[0].length).fill(0);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "S") {
        beams[j] = 1;
        continue;
      } else if (beams[j] > 0 && beams[j] < grid[i].length && grid[i][j] === "^") {
        beams[j] = 0;
        beams[j - 1] = 1;
        beams[j + 1] = 1;
        numberOfSplits++;
      }
    }
  }

  return numberOfSplits;
};
