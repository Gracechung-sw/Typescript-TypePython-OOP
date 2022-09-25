{
  /**
   * Abstract class
   *
   * class내에서 절차적으로 실행되는게 있고, 어떤 특정 기능만 그를 상속받은 자식 class에서 조금씩 구현이 달라진다면,
   * Abstract class를 사용해 볼 수도 있다.
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
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

  class CaffeLatteeMachine extends CoffeeMachine {
    constructor(
      coffeeBeansGramm: number,
      public readonly serialNumber: string
    ) {
      // Constructors for derived classes must contain a 'super' call.ts(2377)
      // 즉 자식 class에 constructor를 재정의 해주려면 부모 class의 생성자를 호출해줘야 한다 (super())

      super(coffeeBeansGramm); // 그리고 자식 class에선 부모 class에서 필요로하는 인자도 받아와서 부모 class의 생성자를 호출할 때 넣어주어야 한다.
    }
    private steamMilk() {
      console.log('steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const coffeeMachine: CoffeeMachine = new CoffeeMachine(32);
  coffeeMachine.fullCoffeeBeansPerShots(3);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);

  const coffeeMachine2: CoffeeMaker = new CaffeLatteeMachine(32, 'V1');
  const coffee2 = coffeeMachine2.makeCoffee(2);
  console.log(coffee2);

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteeMachine(16, 'V1'),
    new SweetCoffeeMachine(16),
    new CoffeeMachine(16),
    new CaffeLatteeMachine(16, 'V1'),
    new SweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log('----------------------');
    machine.makeCoffee(1);
  });
  /**
   * Polymorphism
   */
}
