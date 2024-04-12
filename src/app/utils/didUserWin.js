export function didUserWin(
  firstFieldWinValues,
  secondFieldWinValues,
  firstFieldSelectedNumbers,
  secondFieldSelectedNumbers
) {
  const winByFirstField =
    firstFieldWinValues.filter((randomValue) =>
      firstFieldSelectedNumbers.includes(randomValue)
    ).length >= 4;

  const winByBothFields =
    firstFieldWinValues.filter((randomValue) =>
      firstFieldSelectedNumbers.includes(randomValue)
    ).length >= 3 &&
    secondFieldWinValues.filter((randomValue) =>
      secondFieldSelectedNumbers.includes(randomValue)
    ).length === 1;

  return winByFirstField || winByBothFields;
}
