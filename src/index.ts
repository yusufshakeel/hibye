export type HiByeJson = {
  message: string;
};

class HiBye {
  hi(): string {
    return 'hi';
  }

  bye(): string {
    return 'bye';
  }

  hiJson(): HiByeJson {
    return { message: 'hi' };
  }

  byeJson(): HiByeJson {
    return { message: 'bye' };
  }
}

export default HiBye;
export { HiBye };
