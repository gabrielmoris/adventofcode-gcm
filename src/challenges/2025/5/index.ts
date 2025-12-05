export const solutionFn = ({ arg }: { arg: string }) => {
  let freshIngredients = 0;

  const [ranges, numbers] = arg.split("\n\n");

  const arrayOfRanges = ranges.split("\n").map((range) => {
    const [first, last] = range.split("-").map(Number);
    return { first, last };
  });

  return ranges;
};
