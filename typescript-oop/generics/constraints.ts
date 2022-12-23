interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }
  workPartTime() {}
}

// generic이긴 한데, 조건을 걸어 줄 수 있다.
// generic type인데, 이건 Employee를 확장한 타입들만 가능해
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const grace = new FullTimeEmployee();
const bob = new PartTimeEmployee();

grace.workFullTime();
bob.workPartTime();

const graceAfterPay = pay(grace);
graceAfterPay.workFullTime();
const bobAfterPay = pay(bob);
