export default function divideFunction(numeator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
