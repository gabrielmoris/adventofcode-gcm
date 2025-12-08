function euclideanDistance3D(point1: number[], point2: number[]) {
  const dx = point1[0] - point2[0];
  const dy = point1[1] - point2[1];
  const dz = point1[2] - point2[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export const solutionFn = ({ arg }: { arg: string }) => {
  const junctionBoxes = arg.split("\n").map((line) => line.split(",").map(Number));

  const JBLength = junctionBoxes.length;

  const pairs: { i: number; j: number; dist: number }[] = [];
  for (let i = 0; i < JBLength; i++) {
    for (let j = i + 1; j < JBLength; j++) {
      const dist = euclideanDistance3D(junctionBoxes[i], junctionBoxes[j]);
      pairs.push({ i, j, dist });
    }
  }

  pairs.sort((a, b) => a.dist - b.dist);

  console.log(pairs);

  return 0;
};
