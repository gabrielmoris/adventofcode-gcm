export const solutionFn = ({ arg }: { arg: string }) => {
  let joltage = 0;
  const arrayOfBanks = arg.split("\n");

  for (const bank of arrayOfBanks) {
    let firstHighestBattery = 0;
    let secondHighestBattery = 0;
    for (let i = 0; i <= bank.length - 2; i++) {
      const numericBattery = Number(bank[i]);
      if (numericBattery > firstHighestBattery) {
        firstHighestBattery = numericBattery;
      }
    }

    const firstIndex = bank.indexOf(firstHighestBattery.toString());

    for (let j = firstIndex + 1; j <= bank.length - 1; j++) {
      const numericBattery = Number(bank[j]);
      if (numericBattery > secondHighestBattery) {
        secondHighestBattery = numericBattery;
      }
    }

    joltage += Number(firstHighestBattery.toString() + secondHighestBattery.toString());
  }

  return joltage;
};

export const solutionFn2 = ({ arg }: { arg: string }) => {
  let joltage = 0;
  const arrayOfBanks = arg.split("\n");
  for (const bank of arrayOfBanks) {
    let stackOfBatteries: number[] = [];
    let removalsLeft = bank.length - 12;

    for (let i = 0; i < bank.length; i++) {
      const currentBattery = Number(bank[i]);

      while (removalsLeft > 0 && stackOfBatteries[stackOfBatteries.length - 1] < currentBattery) {
        stackOfBatteries.pop();
        removalsLeft--;
      }

      stackOfBatteries.push(currentBattery);
    }

    while (removalsLeft > 0) {
      stackOfBatteries.pop();
      removalsLeft--;
    }

    joltage += Number(stackOfBatteries);
  }

  return joltage;
};
