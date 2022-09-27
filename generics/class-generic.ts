interface Either {
  left: () => number;
  right: () => number;
}

class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}
  left(): number {
    return this.leftValue;
  }
  right(): number {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);

/** To Generic */

interface EitherGood<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEitherGood<L, R> implements EitherGood<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either2: EitherGood<number, number> = new SimpleEitherGood(4, 5);
