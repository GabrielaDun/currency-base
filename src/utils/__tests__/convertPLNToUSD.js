import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when give a correct input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return Nan when input is text', () => {
    expect(convertPLNToUSD('adwe')).toBeNaN();
    expect(convertPLNToUSD('78')).toBeNaN();
    expect(convertPLNToUSD('Dzień')).toBeNaN();
  });
});