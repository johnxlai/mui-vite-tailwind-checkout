export function addTax(price) {
  //Remove the dollar sign and convert to number
  price = price.replace('$', '');
  return parseInt(price) * 1.13;
}

export function getTax(price) {
  //Remove the dollar sign and convert to number
  price = price.replace('$', '');
  return parseInt(price) * 0.13;
}
