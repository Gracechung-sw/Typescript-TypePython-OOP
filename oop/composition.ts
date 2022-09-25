{
  /**
   * 상속의 문제점
   * - 상속은 수직적으로 관계가 형성되어 나가기때문에 깊이가 깊어질 수록 class간의 관계가 복잡해진다.
   * - 또한 부모 class에서 수정사항이 생기면 그를 상속받고 있는 자식 class들에 모두 영향을 미친다는 어려움도 있다.
   * - 그리고 새로운 기능을 추가하려고 할 때 어떻게 상속구조를 가져가야하지? 가 너무 복잡해질 수 있다.
   * - TS에서 가장 큰 문제는 1가지 이상의 부모 class를 한 자식 class가 상속받을 수 없다.는 것이다.
   *    class SweetCaffeeLatteMachine extends SweetCoffeeMachine, CaffeLatterMachine 이런게 불가능하다.
   *
   * 이를 Composition으로 해결해보자! Favor Composition over inheritance. 필요한 것을 가져와서 조립해나가자!
   *
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface MilkFother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('steaming some milk... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('steaming some milk... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFother {
    private steamMilk(): void {
      console.log('steaming some milk... ');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer implements SugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CandySugarMixer implements SugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  /**
   * 필요한 기능들을 외부에서 주입받아서 사용해보자! (Dependency Injection)
   */
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private totalCoffeeBeansGramm: number = 0;

    constructor(
      coffeeBeansGramm: number,
      private milk: MilkFother,
      private sugar: SugarMixer
    ) {
      this.totalCoffeeBeansGramm = coffeeBeansGramm;
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
      const coffee = this.extractCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(coffee);
    }

    cleanMachine(): void {
      console.log('cleaning the machine...');
    }
  }

  /**
   * Refactoring point
   *
   * 이렇게 composition의 강력한 기능을 사용해보았지만 여전히 문제가 있다.
   * CaffeLatteeMachine, SweetCoffeeMachine, SweetCaffeeLatteMachine이
   * CheapMilkSteamer, AutomaticSugarMixer에 강력한 의존관계가 있다는 것이다.
   *
   * 다른 milkSteamer, sugarMixer를 사용하고 싶다면 하나하나 다 바꿔줘야한다.
   *
   * 이런 문제를 더 강력한 interface의 사용으로 해결해보자! 코드 재사용의 극대화!!!!
   */

  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const automaticSugarMixer = new AutomaticSugarMixer();
  const candySugarMixer = new CandySugarMixer();
  const noSugar = new NoSugar();

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugarMixer);
  const sweetMachine = new CoffeeMachine(12, noMilk, automaticSugarMixer);
  const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkSteamer, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkSteamer, noSugar);
  const sweetLatteMachine = new CoffeeMachine(
    12,
    fancyMilkSteamer,
    candySugarMixer
  );

  /**
   * 그런데 이렇게 부품을 끼웠다 뺐다할 수 있다면 굳이 CoffeeMachine, SweetCoffeeMachine, CaffeLatteeMachine, SweetCaffeeLatteMachine
   * 가 다 구현되어 있어야 하나?
   * CoffeeMachine 안에서 다 가능할 거 같은데? 맞다!
   *
   */
}
