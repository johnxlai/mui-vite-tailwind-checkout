export function addTax(price) {
  //Remove the dollar sign and convert to number
  price = price.replace('$', '');
  return parseFloat(price * 1.13).toFixed(2);
}

export function getTax(price) {
  //Remove the dollar sign and convert to number
  price = price.replace('$', '');
  return parseFloat(price * 0.13).toFixed(2);
}
