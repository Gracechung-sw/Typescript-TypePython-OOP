{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null(비워져있다고 결정 된 것), undefined(비워져있는지 아닌지 조차 결정되지 않은 것)
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩 - 타입을 모르겠음.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 - 어떠한 타입도 들어올 수 있음.
  let anything: any = 0;
  anything = 'hello';

  // void - 함수에서 어떤 것을 리턴하지 않을 때. 변수에는 undefined만 할당할 수 있기 때문에 거의 사용하지 않음
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never - application에서 handling할 수 없는 error를 throw할 때, 또는 계속 while문을 도는 것일 때 never사용.
  // 정확한 것은 추후에 <에러 처리>에서 살펴 볼 것임.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
