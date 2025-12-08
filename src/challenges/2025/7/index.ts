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

export const solutionFn2 = ({ arg }: { arg: string }) => {
  const lines = arg.split("\n").filter((l) => l.trim());
  const grid = lines.map((line) => line.split(""));
  let beams = new Array(grid[0].length).fill(0);

  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] === "S") {
      beams[j] = 1;
      break;
    }
  }

  for (let i = 0; i < grid.length - 1; i++) {
    // 1. I will check future path
    // 2. I will check if there is a fork beam
    // 3. I will keep the beams that are not stopped
    let nextBeams = new Array(grid[0].length).fill(0);

    for (let j = 0; j < grid[i].length; j++) {
      if (beams[j] > 0) {
        if (grid[i + 1][j] === "^") {
          // fork beam
          if (j > 0) nextBeams[j - 1] += beams[j];
          if (j + 1 < grid[0].length) nextBeams[j + 1] += beams[j];
        } else {
          nextBeams[j] += beams[j];
        }
      }
    }
    beams = nextBeams;
  }

  return beams.reduce((sum, b) => sum + b, 0);
};
