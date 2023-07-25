export const convertPLNToUSD = (PLN) => {
  if (!PLN) {
    return NaN;
  }
  else if (typeof PLN === 'string') {
    return NaN;
  } 
  else {

    const PLNtoUSD = PLN / 3.5;
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}