import HiBye, { HiByeJson } from '../../../src';

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

  it('Should be able to call hiJson method', () => {
    const json: HiByeJson = hiBye.hiJson();
    expect(json).toStrictEqual({ message: 'hi' });
  });

  it('Should be able to call byeJson method', () => {
    const json: HiByeJson = hiBye.byeJson();
    expect(json).toStrictEqual({ message: 'bye' });
  });
});