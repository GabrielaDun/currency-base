export const convertPLNToUSD = (PLN) => {
  if (!PLN) {
    return NaN;
  }
  else if (typeof PLN === 'string') {
    return NaN;
  } 
  else if (typeof PLN === 'object') {
    return 'Error';
  }
  else if (PLN.isArray) {
    return 'Error';
  }
  else if (PLN < 0) {
    return PLN = '0';
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