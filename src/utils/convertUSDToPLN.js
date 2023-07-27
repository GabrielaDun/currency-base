export const convertUSDToPLN = (USD) => {
  if (!USD) {
    return NaN;
  }
  else if (USD< 0) {
    return USD = 'Wrong value…'
  }
  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}