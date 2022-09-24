{
  // Array
  // 배열의 타입 정의 방법 2가지 .
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4]; // 이렇게 정의하는건, 나중에 <generic type> 공부해보면 조금 더 이해 할 수 있다.

  // 전달 된 인자(여기선 fruits)를 함수(여기선 printArray) 내부에서 변경하지 않도록 해주고 싶을 때
  // readonly로 보장할 수 있다. -> object의 불변성 보장이라는 매우 중요한 속성!
  function printArray(fruits: readonly string[]) {
    // fruits.push 이러혐 Property 'push' does not exist on type 'readonly string[]'.
    // Array<number> 에는 아직 readonly Array<number> 가 허용되지 않기 때문에 string[] 사용을 권장.
  }

  // Tuple : tuple을 사용하면 고정된 size의 서로 다른 데이터 타입을 담을 수 있는 배열을 정의할 수 있다.
  // Tuple 사용을 권장하지 않는 이유
  // 왜? Tuple내 값에 접근시 index(0, 1, ...)로 접근하는 것의 가독성이 좋지 않음
  // 따라서 interface, type alias, class를 사용하자!
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
/**
 * 배열과 튜플, 언제 튜플을 사용해야 할까?
 *
 */
