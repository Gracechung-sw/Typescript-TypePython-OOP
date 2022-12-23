{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // NOTE: interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fullCoffeeBeansPerShots(coffeeShots: number): void;
    cleanMachine(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private totalCoffeeBeansGramm: number = 0;

    constructor(coffeeBeansGramm: number) {
      this.totalCoffeeBeansGramm = coffeeBeansGramm;
    }

    static makeMachine(coffeeBeansGramm: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeansGramm);
    }

    fullCoffeeBeansPerShots(coffeeShots: number): void {
      if (coffeeShots < 0) {
        throw new Error('value for coffeeShots should be greather than 0');
      }
      this.totalCoffeeBeansGramm +=
        coffeeShots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (
        this.totalCoffeeBeansGramm <
        shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
      ) {
        throw Error('Not enough coffee beans!');
      }
      this.totalCoffeeBeansGramm -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up....');
    }

    private extractCoffee(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extractCoffee(shots);
    }

    cleanMachine(): void {
      console.log('cleaning the machine...');
    }
  }

  const coffeeMachine: CoffeeMachine = new CoffeeMachine(32);
  coffeeMachine.fullCoffeeBeansPerShots(3);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);

  // coffeeMachine. // 여기까지 입력하면 사용할 수 있는 method로 fullCoffeeBeansPerShots, grindBeans, preHeat, extractCoffee, makeCoffee 모두 나옴.
  // 사실 외부에서 사용자가 call해야하는 method는 fullCoffeeBeansPerShots, makeCoffee만 하면 되는데.!

  // 이럴때 필요한게 바로 Abstraction!!!!!!
  // NOTE: Abstraction
  /**
   * 1. 접근제어자를 이용한 추상화
   * 2. interface를 이용한 추상화
   */

  const coffeeMachine2: CoffeeMaker = new CoffeeMachine(32);
  // coffeeMachine2.fullCoffeeBeansPerShots(3); // Property 'fullCoffeeBeansPerShots' does not exist on type 'CoffeeMaker'.
  // interface에 없는 method를 사용하려고 하면 위와 같은 에러가 발생한다.
  // 즉, interfacefe를 통해 내가 얼마만큼의 행동을 보장, 허용할 것인지 명시해 줄 수 있다.
  const coffee2 = coffeeMachine2.makeCoffee(2);
  console.log(coffee2);

  const coffeeMachine3: CommercialCoffeeMaker = new CoffeeMachine(32);
  coffeeMachine3.cleanMachine();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(32);
      console.log(coffee);
      // only makeCoffe method is available b/c this machine follows CoffeeMaker interface
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(32);
      console.log(coffee);
      this.machine.fullCoffeeBeansPerShots(45);
      this.machine.cleanMachine();
      // makeCoffee,fullCoffeeBeansPerShots,cleanMachine methods are available b/c this machine follows CommercialCoffeeMaker interface
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amatuer = new AmateurUser(maker);
  amatuer.makeCoffee();

  const pro = new ProBarista(maker);
  pro.makeCoffee();

  /**
   * point of interface:
   * 동일한 instance라고 할 지라도 (const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);)
   * 이 instance는 2가지 interface를 구현하고 있기 때문에
   * AmateurUser와 ProBarista는 각각 다른 interface를 구현한 instance를 받아온 것이 된다.
   * 그래서 이 Interface에서 규약된 method에만 접근 가능.
   *
   * 이 class내부에 어떤 method가 얼마나 많고, 복잡하던지간에 사용하는 곳에서는 interface 규약만 보고 사용하면 된다!
   *
   */
}
