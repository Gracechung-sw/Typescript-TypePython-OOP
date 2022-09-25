// coffeeMachine
// data: totalCoffeeBeansGramm
// method: makeCoffee

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    // NOTE: 멤버 변수
    // class에서 member 변수를 정의 할 때는 const, let등의 keyword를 작성해주지 않아도 된다.

    // NOTE: static keyword
    private static BEANS_GRAMM_PER_SHOT: number = 7; // 불변하는 값. 그리고 이 값은 해당 class로 생성된 모든 instance에 모두 공통적으로 중복으로 들어가있다.
    // 이처럼 class로 생성된 instance사이에서 모두 공유할 수 있는 값은 멤버 변수로 생성하여 instance level로 매번 만들게 되면 메모리 낭비가 된다.
    // 이를 static keyword를 붙이면 class level로 지정된다. 또한 class level이기때문에 this.가 아니라 className.이 되어야 한다.
    private totalCoffeeBeansGramm: number = 0;

    constructor(coffeeBeansGramm: number) {
      // constructor: 해당 class의 instance를 생성할 때 항상 호출되는 함수.
      this.totalCoffeeBeansGramm = coffeeBeansGramm;
    }

    fullCoffeeBeansPerShots(coffeeShots: number): void {
      if (coffeeShots < 0) {
        throw new Error('value for coffeeShots should be greather than 0');
      }
      this.totalCoffeeBeansGramm +=
        coffeeShots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    // method의 경우에도 function이라는 키워드를 작성해주지 않아도 된다.
    makeCoffee(shots: number): CoffeeCup {
      if (
        this.totalCoffeeBeansGramm <
        shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
      ) {
        throw new Error('Not enough coffee beans!');
      }
      // NOTE: this
      this.totalCoffeeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const coffeeMachine = new CoffeeMachine(32);
  coffeeMachine.fullCoffeeBeansPerShots(3);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);

  /**
   * Refactoring point: Encapsulation
   * coffeeMachine.totalCoffeeBeansGramm = -34; 이런 식으로 data에 직접 접근해서 수정이 가능하다. 즉, 외부에서 instance를 유효하지 않은 상태로 만들 수 있는 매우 위험한 상태이다.
   * 이런 경우, public, private, protected 등의 접근 제한자를 사용해서 정보를 은닉할 수 있다.
   */
  // coffeeMachine.totalCoffeeBeansGramm = -34; // Property 'totalCoffeeBeansGramm' is private and only accessible within class 'CoffeeMachine'.
}
