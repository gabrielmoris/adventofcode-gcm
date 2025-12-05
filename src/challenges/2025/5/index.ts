export const solutionFn = ({ arg }: { arg: string }) => {
  let freshIngredients = 0;

  const [ranges, numbers] = arg.split("\n\n");

  const arrayOfRanges = ranges.split("\n").map((range) => {
    const [first, last] = range.split("-").map(Number);
    return { first, last };
  });

  numbers.split("\n").forEach((number) => {
    const numericNumber = Number(number);
    let isFresh = false;
    arrayOfRanges.forEach((range) => {
      // console.log(numericNumber, range.first, range.last, numericNumber >= range.first && numericNumber <= range.last);
      if (numericNumber >= range.first && numericNumber <= range.last) {
        isFresh = true;
      }
    });
    if (isFresh) {
      freshIngredients++;
    }
  });

  return freshIngredients;
};

export const solutionFn2 = ({ arg }: { arg: string }) => {
  const [allRanges] = arg.split("\n\n");
  const arrayOfRanges: [number, number][] = allRanges
    .split("\n")
    .map((line) => {
      const [first, last] = line.split("-").map(Number);
      return [first, last] as [number, number];
    })
    .sort((a, b) => a[0] - b[0]);

  if (!arrayOfRanges.length) return 0;

  let total = 0;
  let [start, end] = arrayOfRanges[0];

  // formula endingRange - startingRange + 1 = total number of IDs
  for (let i = 1; i < arrayOfRanges.length; i++) {
    const [currStart, currEnd] = arrayOfRanges[i];
    if (currStart <= end + 1) {
      end = Math.max(end, currEnd);
    } else {
      total += end - start + 1;
      [start, end] = [currStart, currEnd];
    }
  }
  return total + end - start + 1;
};
