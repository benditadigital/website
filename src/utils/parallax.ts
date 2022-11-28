export function calculateTranslateY(percentage: any, multiplier = 1) {
  if (percentage <= 1) {
    var value = ((-35 * (1 - percentage) + 35 * percentage) * multiplier)
      .toFixed(2)
      .toString();
    return value + "px";
  }
}
