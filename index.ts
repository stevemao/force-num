import forceEnv from 'force-env';

export default (a: string) => {
    const num = parseInt(forceEnv(a), 10);

    if (Number.isNaN(num)) {
      throw new Error(`${a} must be a number`);
    }
  
    return num;
  };
  