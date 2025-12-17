type Point = [number, number];

export const solutionFn = ({ arg }: { arg: string }) => {
  const tiles: Point[] = arg.split("\n").map((line) => line.split(",").map(Number)) as Point[];

  let area = 0;

  tiles.forEach((tile: Point) => {
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
  const tiles = arg.split("\n").map((line) => line.split(",").map(Number)) as Point[];

  let area = 0;

  tiles.forEach((tile) => {
    tiles.forEach((secondTile) => {
      if (tile[0] === secondTile[0] && tile[1] === secondTile[1]) {
        return;
      }

      if (!checkIfAreaIsValid(tile, secondTile, tiles)) return;
      const currentArea = calculateArea(tile, secondTile);
      if (currentArea > area) {
        area = currentArea;
      }
    });
  });
  return area; // 4537841076 too high 4750297200
};

const checkIfAreaIsValid = (corner1: Point, cortner2: Point, tiles: Point[]): boolean => {
  const xmin = Math.min(corner1[0], cortner2[0]);
  const xmax = Math.max(corner1[0], cortner2[0]);
  const ymin = Math.min(corner1[1], cortner2[1]);
  const ymax = Math.max(corner1[1], cortner2[1]);

  return false;
};
