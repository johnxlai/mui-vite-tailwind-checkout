export function addTax(price) {
  //Remove the dollar sign and convert to number
  price = price.replace('$', '');
  return parseInt(price) * 1.13;
}
