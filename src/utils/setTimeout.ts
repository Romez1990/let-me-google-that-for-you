function setTimeoutPromisified(callback: ((...args: any[]) => void), time: number): NodeJS.Timeout;
async function setTimeoutPromisified(time?: number): Promise<void>;

function setTimeoutPromisified(param1?: ((...args: any[]) => void) | number,
                               param2?: number): NodeJS.Timeout | Promise<void> {
  if (param1 && param2 && typeof param1 !== 'number') {
    const callback = param1;
    const time = param2;
    return setTimeout(callback, time);
  } else if (typeof param1 === 'number' || typeof param1 === 'undefined') {
    const time = param1;
    return new Promise(resolve => setTimeout(resolve, time));
  }

  throw new Error('wrong arguments');
}

export default setTimeoutPromisified;
