{
  /**
   * Type Assertions 💩 - 타입 강요. 이를 사용하는 건 권장하진 않음.
   *
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  // result as string 즉, 난 result가 string타입이라는 걸 확신해! 그러니 문자열에 사용할 수 있는 api(.length.. 등)를 쓸래.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱
  numbers!.push(2); // 😱 !을 붙이면 절대 undefined가 아니야 장담. 좋진 않음.

  const button = document.querySelector('class')!;
}
