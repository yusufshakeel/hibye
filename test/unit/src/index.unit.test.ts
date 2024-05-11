import HiBye from '../../../src';

describe('Testing HiBye class', () => {
  let hiBye: HiBye;

  beforeAll(() => {
    hiBye = new HiBye();
  });

  it('Should be able to call hi method', () => {
    expect(hiBye.hi()).toBe('hi');
  });

  it('Should be able to call bye method', () => {
    expect(hiBye.bye()).toBe('bye');
  });
});