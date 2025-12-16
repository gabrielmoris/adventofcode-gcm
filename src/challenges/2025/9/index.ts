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

export const solutionFn2 = ({ arg }: { arg: string }) => {
  const tiles = arg.split("\n").map((line) => line.split(",").map(Number));

  let area = 0;

  tiles.forEach((tile) => {
    tiles.forEach((secondTile) => {
      if (tile[0] === secondTile[0] && tile[1] === secondTile[1]) {
        return;
      }

      if (!checkIfAreaIsValid(tile[0], tile[1], tiles) || !checkIfAreaIsValid(secondTile[0], secondTile[1], tiles)) return;
      const currentArea = calculateArea(tile, secondTile);
      if (currentArea > area) {
        area = currentArea;
      }
    });
  });
  return area; // 4537841076 too high
};

const checkIfAreaIsValid = (x: number, y: number, tiles: number[][]) => {
  let isValid = false;

  for (let i = 0, j = tiles.length - 1; i < tiles.length; j = i++) {
    const [xi, yi] = tiles[i];
    const [xj, yj] = tiles[j];

    //check here If it is omn green or red tile
  }

  return isValid;
};
