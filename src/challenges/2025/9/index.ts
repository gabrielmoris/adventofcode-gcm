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
  const coloredSet = createPoligon(tiles);

  let area = 0;

  // tiles.forEach((tile) => {
  //   tiles.forEach((secondTile) => {
  //     if (tile[0] === secondTile[0] && tile[1] === secondTile[1]) return;

  //     if (!checkIfAreaIsValid(tile, secondTile, coloredSet)) return;
  //     const currentArea = calculateArea(tile, secondTile);
  //     if (currentArea > area) area = currentArea;
  //   });
  // });

  console.log([...coloredSet]);
  console.log(coloredSet.has("7,1"));
  return area;
};

// const checkIfAreaIsValid = (corner1: Point, cortner2: Point, coloredSet: Set<string>): boolean => {
//   const xmin = Math.min(corner1[0], cortner2[0]);
//   const xmax = Math.max(corner1[0], cortner2[0]);
//   const ymin = Math.min(corner1[1], cortner2[1]);
//   const ymax = Math.max(corner1[1], cortner2[1]);

//   for (let x = xmin; x <= xmax; x++) {
//     for (let y = ymin; y <= ymax; y++) {
//       if (!coloredSet.has(`${x},${y}`)) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const createPoligon = (tiles: Point[]) => {
  const polygon = new Set<string>();

  tiles.forEach(([x, y]) => {
    polygon.add(`${x},${y}`);
    tiles.forEach(([x2, y2]) => {
      if (x === x2 && y === y2) return;

      polygon.add(`${x2},${y2}`);

      const minX = Math.min(x, x2);
      const maxX = Math.max(x, x2);
      const minY = Math.min(y, y2);
      const maxY = Math.max(y, y2);

      for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
          polygon.add(`${x},${y}`);
        }
      }
    });
  });

  return polygon;
};
