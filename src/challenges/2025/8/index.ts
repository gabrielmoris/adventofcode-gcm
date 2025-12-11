type Box = {
  x: number;
  y: number;
  z: number;
};
type DistanceCalcualtedJB = {
  i: number;
  j: number;
  dist: number;
};

function euclideanDistance3D(point1: Box, point2: Box) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  const dz = point1.z - point2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export const solutionFn = ({ arg }: { arg: string }) => {
  const junctionBoxes = arg
    .split("\n")
    .map((line) => line.split(",").map(Number))
    .map((line) => {
      return { x: line[0], y: line[1], z: line[2] };
    });

  let JBIndexesWithDistance = calculateDistanceAndSort(junctionBoxes);

  const circuits = buildCircuits(JBIndexesWithDistance, junctionBoxes.length, 1000);

  circuits.sort((a, b) => b.length - a.length);

  return circuits[0].length * circuits[1].length * circuits[2].length;
};

const calculateDistanceAndSort = (junctionBoxes: Box[]) => {
  const JBLength = junctionBoxes.length;

  const distanceCalculatedJB: DistanceCalcualtedJB[] = [];
  for (let i = 0; i < JBLength; i++) {
    for (let j = i + 1; j < JBLength; j++) {
      const dist = euclideanDistance3D(junctionBoxes[i], junctionBoxes[j]);
      distanceCalculatedJB.push({ i, j, dist });
    }
  }

  return distanceCalculatedJB.sort((a, b) => a.dist - b.dist);
};

let circuitParent: number[] = [];
let circuitSize: number[] = [];

const buildCircuits = (sortedPairsByDistance: DistanceCalcualtedJB[], junctionBoxCount: number, maxConnections: number = 1000): number[][] => {
  circuitParent = Array.from({ length: junctionBoxCount }, (_, index) => index);
  circuitSize = new Array(junctionBoxCount).fill(1);

  let connectionsTried = 0;
  for (const { i: boxAIndex, j: boxBIndex } of sortedPairsByDistance) {
    connectCircuits(boxAIndex, boxBIndex);
    connectionsTried++;
    if (connectionsTried === maxConnections) break;
  }

  const circuitsMap = new Map<number, number[]>();
  for (let boxIndex = 0; boxIndex < junctionBoxCount; boxIndex++) {
    const root = findCircuit(boxIndex);
    if (!circuitsMap.has(root)) circuitsMap.set(root, []);
    circuitsMap.get(root)!.push(boxIndex);
  }

  return [...circuitsMap.values()];
};

const findCircuit = (boxIndex: number): number => {
  if (circuitParent[boxIndex] !== boxIndex) {
    circuitParent[boxIndex] = findCircuit(circuitParent[boxIndex]);
  }
  return circuitParent[boxIndex];
};

const connectCircuits = (boxA: number, boxB: number): boolean => {
  let rootA = findCircuit(boxA);
  let rootB = findCircuit(boxB);
  if (rootA === rootB) return false;

  if (circuitSize[rootA] < circuitSize[rootB]) {
    [rootA, rootB] = [rootB, rootA];
  }
  circuitParent[rootB] = rootA;
  circuitSize[rootA] += circuitSize[rootB];
  return true;
};

export const solutionFn2 = ({ arg }: { arg: string }) => {
  const junctionBoxes = arg
    .split("\n")
    .map((line) => line.split(",").map(Number))
    .map((line) => {
      return { x: line[0], y: line[1], z: line[2] };
    });

  let JBIndexesWithDistance = calculateDistanceAndSort(junctionBoxes);

  const solution = connectUntilSingleCircuit(JBIndexesWithDistance, junctionBoxes.length, junctionBoxes);

  return solution;
};

const connectUntilSingleCircuit = (sortedPairsByDistance: DistanceCalcualtedJB[], junctionBoxCount: number, boxes: Box[]) => {
  circuitParent = Array.from({ length: junctionBoxCount }, (_, index) => index);
  circuitSize = new Array(junctionBoxCount).fill(1);

  let circuitsCount = junctionBoxCount;
  let lastA = 0;
  let lastB = 0;

  for (const { i: boxAIndex, j: boxBIndex } of sortedPairsByDistance) {
    if (connectCircuits(boxAIndex, boxBIndex)) {
      circuitsCount--;

      lastA = boxAIndex;
      lastB = boxBIndex;

      if (circuitsCount === 1) {
        const a = boxes[lastA];
        const b = boxes[lastB];
        return a.x * b.x; // return the x of last 2 boxes
      }
    }
  }
};
