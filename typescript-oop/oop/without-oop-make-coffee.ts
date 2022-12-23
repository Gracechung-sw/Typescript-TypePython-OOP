{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeansGramm: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeansGramm < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeansGramm += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
}
