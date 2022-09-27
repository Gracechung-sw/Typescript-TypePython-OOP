{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  function checkNotNullString(arg: string | null): string {
    if (arg == null) {
      throw new Error('not valid string');
    }
    return arg;
  }

  const result = checkNotNull(123);
  console.log(result);

  checkNotNull(null);

  /**
   * ... 이런식으로 다른 타입에 대한 check를 해주기 위해 매번 같은 기능을 하는 함수를 이렇게 반복적으로 만들어야 할까?\
   *  No! 코드 중복 무슨 일이야...
   * 아니면 function checkNotNull(arg: any | null): any { 이렇게 어떠한 type도 올 수 있게 해야할까?
   *  No! 타입 보장이 되지 않는다.
   *
   * 이렇때 generic을 사용할 수 있다. generic을 사용하면 compile 시점에 타입을 보장받을 수 있다.
   */
  function checkNotNullGood<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  const number = checkNotNullGood(123);
  const string = checkNotNullGood('hello');
}
