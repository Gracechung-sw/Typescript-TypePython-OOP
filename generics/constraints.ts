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

function pay(employee: Employee): Employee {
  employee.pay();
  return employee;
}

const grace = new FullTimeEmployee();
const bob = new PartTimeEmployee();

grace.workFullTime();
bob.workPartTime();

const graceAfterPay = pay(grace);
graceAfterPay.workFullTime(); // Property 'workFullTime' does not exist on type 'Employee'. 라는 에러 발생 왜?
// pay라는 함 수 사용하고 나서는 리턴타입이 Employee이라서 FullTimeEmployee이 가진 class 정보가 사라졌기 때문.
// 이를 해결하기 위해 const graceAfterPay = pay(grace) as FullTimeEmployee 라고 할 수도 있지만 가능하면 as는 사용하지 않는 것이 좋다.
// 이런 경우 generic을 사용할 수 있다.
const bobAfterPay = pay(bob);
