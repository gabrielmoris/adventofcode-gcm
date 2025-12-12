export const solutionFn = ({ arg }: { arg: string }) => {
  const tiles = arg.split("\n").map((line) => line.split(",").map(Number));

  let area = 0;

  tiles.forEach((tile) => {
    tiles.forEach((secondTile) => {
      if (tile[0] === secondTile[0] && tile[1] === secondTile[1]) {
        return;
      }
      const currentArea = calculateArea(tile, secondTile);
      if (currentArea > area) {
        area = currentArea;
      }
    });
  });

  return area;
};

const calculateArea = (vertexPoint1: number[], vertexPoint: number[]) => {
  const width = Math.abs(vertexPoint1[0] - vertexPoint[0]) + 1;
  const height = Math.abs(vertexPoint1[1] - vertexPoint[1]) + 1;
  return width * height;
};
