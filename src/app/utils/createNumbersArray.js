export function createNumbersArray(maxNumber) {
  return Array.from(Array(maxNumber), (_, i) => i + 1);
}
